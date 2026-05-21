/* ════════════════════════════════════════════════════════════════
   velkyss.dev — tema claro / oscuro
   Orden de decisión: preferencia guardada → preferencia del sistema
   → oscuro (por defecto de marca).
   ════════════════════════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = "velkyss-theme";
  let currentTheme;

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        currentTheme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      );
    }
    localStorage.setItem(STORAGE_KEY, currentTheme);
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }
})();
