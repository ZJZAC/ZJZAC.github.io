/* ============================================================
   Scroll-reveal animations (IntersectionObserver)
   ============================================================ */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return; // respect reduced-motion users
  }

  function setupReveal() {
    var content = document.querySelector(".page__content");
    if (!content) return;

    // Elements to animate: section headings and list items
    var targets = content.querySelectorAll("h2, h3, ul > li, ol > li, p");
    if (!targets.length) return;

    var MAX_STAGGER_GROUP = 12; // items revealed together share a stagger slot

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var idx = parseInt(el.dataset.animIndex || "0", 10);
        var delay = Math.min(idx % MAX_STAGGER_GROUP, 6) * 60; // ms, capped
        setTimeout(function () {
          el.classList.add("anim-visible");
        }, delay);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -24px 0px"
    });

    targets.forEach(function (el, i) {
      // Skip elements inside collapsible <details> blocks until opened
      if (el.closest("details:not([open])")) return;
      el.classList.add("anim-reveal");
      el.dataset.animIndex = i;
      observer.observe(el);
    });

    // Re-scan when a <details> block is toggled open
    content.querySelectorAll("details").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (!d.open) return;
        var inner = d.querySelectorAll("h2, h3, ul > li, ol > li, p");
        inner.forEach(function (el, i) {
          if (el.classList.contains("anim-reveal")) return;
          el.classList.add("anim-reveal");
          el.dataset.animIndex = i;
          observer.observe(el);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupReveal);
  } else {
    setupReveal();
  }
})();
