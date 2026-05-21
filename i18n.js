/* ════════════════════════════════════════════════════════════════
   velkyss.dev — i18n
   Aplica las cadenas de strings.js. Dos tipos de nodo:
     [data-i18n]       → texto plano  (textContent)
     [data-i18n-html]  → contiene markup intencional (innerHTML)
   ════════════════════════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = "velkyss-lang";
  let currentLang;

  function applyLanguage(lang) {
    if (!strings[lang]) lang = "es";
    currentLang = lang;
    const dict = strings[lang];

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const value = dict[el.getAttribute("data-i18n")];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const value = dict[el.getAttribute("data-i18n-html")];
      if (value !== undefined) el.innerHTML = value;
    });

    // El botón muestra el idioma al que se cambiará, no el actual.
    const toggle = document.getElementById("lang-toggle");
    if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";

    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Idioma inicial: preferencia guardada → idioma del navegador → español.
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved
    ? saved
    : (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
  applyLanguage(initial);

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      applyLanguage(currentLang === "es" ? "en" : "es");
    });
  }
})();
