/* ============================================================
   Light/dark theme toggle with localStorage persistence
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "homepage-theme";

  function currentTheme() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.title = btn.getAttribute("aria-label");
    }
  }

  function toggle() {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    apply(next);
  }

  // Apply immediately (script is loaded at end of body, so DOM exists)
  apply(currentTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.addEventListener("click", toggle);
    apply(currentTheme()); // ensure icon state after DOM ready
  });
})();
