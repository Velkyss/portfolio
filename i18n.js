/* ════════════════════════════════════════════════════════════════
   velkyss.dev — i18n
   Aplica las cadenas de strings.js. Dos tipos de nodo:
     [data-i18n]       → texto plano  (textContent)
     [data-i18n-html]  → contiene markup intencional (innerHTML)
   ════════════════════════════════════════════════════════════════ */

(function () {
  const STORAGE_KEY = "velkyss-lang";
  let currentLang;

  // Descarga de CV: el idioma activo es el primario; el otro, el secundario.
  // Solo dueña href + download; el texto visible lo maneja el swap data-i18n.
  const CV_FILES = {
    es: { href: "/cv/Ezequiel-Marchena-CV-ES.pdf", name: "Ezequiel-Marchena-CV-ES.pdf" },
    en: { href: "/cv/Ezequiel-Marchena-CV-EN.pdf", name: "Ezequiel-Marchena-CV-EN.pdf" }
  };

  function applyCvLinks(lang) {
    const other = lang === "es" ? "en" : "es";
    document.querySelectorAll('[data-cv="primary"]').forEach(function (el) {
      el.href = CV_FILES[lang].href;
      el.download = CV_FILES[lang].name;
    });
    document.querySelectorAll('[data-cv="secondary"]').forEach(function (el) {
      el.href = CV_FILES[other].href;
      el.download = CV_FILES[other].name;
    });
  }

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

    applyCvLinks(lang);

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
