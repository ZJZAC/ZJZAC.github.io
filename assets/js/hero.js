/* ============================================================
   Hero typing effect + stat counter animation
   ============================================================ */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Typing effect ---------- */
  function setupTyping() {
    var el = document.getElementById("hero-typing");
    if (!el) return;

    var phrases;
    try {
      phrases = JSON.parse(el.getAttribute("data-phrases") || "[]");
    } catch (e) {
      phrases = [];
    }
    if (!phrases.length) return;

    if (reduced) {
      el.textContent = phrases[0];
      return;
    }

    var pi = 0, ci = 0, deleting = false;

    function tick() {
      var phrase = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = phrase.slice(0, ci);
        if (ci === phrase.length) {
          deleting = true;
          setTimeout(tick, 2200); // hold full phrase
          return;
        }
        setTimeout(tick, 55 + Math.random() * 45);
      } else {
        ci--;
        el.textContent = phrase.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 28);
      }
    }
    tick();
  }

  /* ---------- Count-up animation ---------- */
  function animateCount(el, target, suffix, duration) {
    var start = null;
    function frame(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function setupCounters() {
    var nums = document.querySelectorAll(".stat-number[data-count]");
    if (!nums.length) return;

    if (reduced || !("IntersectionObserver" in window)) {
      nums.forEach(function (el) {
        el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        animateCount(el, target, suffix, 1400);
        observer.unobserve(el);
      });
    }, { threshold: 0.4 });

    nums.forEach(function (el) { observer.observe(el); });
  }

  function init() {
    setupTyping();
    setupCounters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
