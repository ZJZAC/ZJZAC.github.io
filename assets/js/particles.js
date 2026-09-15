/* ============================================================
   Particle network background (neural-network style)
   Lightweight, no dependencies. Subtle, academic-friendly.
   ============================================================ */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.createElement("canvas");
  canvas.id = "particle-bg";
  document.body.prepend(canvas);
  var ctx = canvas.getContext("2d");

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W, H, particles = [];
  var mouse = { x: -9999, y: -9999 };

  var LINK_DIST = 140;      // px: max distance to draw a link
  var MOUSE_DIST = 180;     // px: mouse interaction radius
  var DENSITY = 12000;      // one particle per N px^2
  var MAX_PARTICLES = 90;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    seed();
  }

  function seed() {
    var n = Math.min(Math.floor((W * H) / DENSITY), MAX_PARTICLES);
    particles = [];
    for (var i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.6
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // gentle mouse repulsion
      var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
      var md = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < MOUSE_DIST && md > 0.01) {
        var f = (MOUSE_DIST - md) / MOUSE_DIST * 0.02;
        p.vx += (mdx / md) * f;
        p.vy += (mdy / md) * f;
      }
      // cap speed
      var sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (sp > 0.6) { p.vx *= 0.6 / sp; p.vy *= 0.6 / sp; }

      if (p.x < -20) p.x = W + 20; else if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20; else if (p.y > H + 20) p.y = -20;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(58, 123, 213, 0.35)";
      ctx.fill();
    }

    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var d2 = dx * dx + dy * dy;
        if (d2 < LINK_DIST * LINK_DIST) {
          var alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = "rgba(58, 123, 213, " + alpha.toFixed(3) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Pause when tab hidden to save battery
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) requestAnimationFrame(step);
  });

  resize();
  requestAnimationFrame(step);
})();
