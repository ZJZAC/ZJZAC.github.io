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

  /* ---------- Spotlight cursor ---------- */
  function setupSpotlight() {
    if (reduced) return;
    var el = document.createElement("div");
    el.id = "spotlight";
    document.body.appendChild(el);
    var raf = null;
    window.addEventListener("mousemove", function (e) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        el.style.setProperty("--mx", e.clientX + "px");
        el.style.setProperty("--my", e.clientY + "px");
        raf = null;
      });
    });
    document.documentElement.addEventListener("mouseleave", function () {
      el.style.setProperty("--mx", "-500px");
      el.style.setProperty("--my", "-500px");
    });
  }

  /* ---------- Letter-by-letter reveal of hero name ---------- */
  function setupLetterReveal() {
    var nameEl = document.querySelector(".hero-name");
    if (!nameEl || reduced) return;
    var text = nameEl.textContent;
    nameEl.textContent = "";
    var i = 0;
    Array.from(text).forEach(function (ch) {
      var span = document.createElement("span");
      span.className = "ltr";
      span.textContent = ch === " " ? " " : ch;
      span.style.setProperty("--d", (0.15 + i * 0.055).toFixed(2) + "s");
      nameEl.appendChild(span);
      i++;
    });
  }

  /* ---------- Reading progress bar ---------- */
  function setupReadingProgress() {
    if (reduced) return;
    var bar = document.createElement("div");
    bar.id = "reading-progress";
    document.body.appendChild(bar);
    var raf = null;
    function update() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct.toFixed(2) + "%";
      raf = null;
    }
    window.addEventListener("scroll", function () {
      if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ---------- News fade mask: hide hint when scrolled to bottom ---------- */
  function setupNewsFade() {
    var list = document.getElementById("news-list");
    if (!list) return;
    var wrap = document.createElement("div");
    wrap.className = "news-scroll-wrap";
    list.parentNode.insertBefore(wrap, list);
    wrap.appendChild(list);
    function check() {
      var atBottom = list.scrollTop + list.clientHeight >= list.scrollHeight - 4;
      wrap.classList.toggle("at-bottom", atBottom);
    }
    list.addEventListener("scroll", check, { passive: true });
    check();
  }

  /* ---------- Magnetic avatar ---------- */
  function setupMagneticAvatar() {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    var avatar = document.querySelector(".author__avatar");
    if (!avatar) return;
    var STRENGTH = 12; // px max pull
    document.addEventListener("mousemove", function (e) {
      var rect = avatar.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = e.clientX - cx;
      var dy = e.clientY - cy;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var RADIUS = 220;
      if (dist < RADIUS && dist > 1) {
        var pull = (1 - dist / RADIUS) * STRENGTH;
        avatar.style.transform =
          "translate(" + (dx / dist * pull).toFixed(1) + "px, " + (dy / dist * pull).toFixed(1) + "px)";
      } else {
        avatar.style.transform = "";
      }
    });
  }

  function init() {
    setupTyping();
    setupCounters();
    setupSpotlight();
    setupLetterReveal();
    setupReadingProgress();
    setupNewsFade();
    setupMagneticAvatar();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
