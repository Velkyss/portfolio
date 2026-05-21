/* ════════════════════════════════════════════════════════════════
   velkyss.dev — interacciones
   Menú móvil (hamburguesa). El cambio de tema e idioma viven en sus
   propios módulos (theme.js / i18n.js).
   ════════════════════════════════════════════════════════════════ */

(function () {
  const burger = document.getElementById("nav-burger");
  const menu = document.getElementById("nav-mobile");
  if (!burger || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  burger.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });

  // Cerrar al elegir un destino.
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  // Cerrar si se vuelve a tamaño escritorio mientras está abierto.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 880 && menu.classList.contains("open")) {
      setOpen(false);
    }
  });

  // Cerrar con Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      setOpen(false);
      burger.focus();
    }
  });
})();
