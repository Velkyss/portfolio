/* ════════════════════════════════════════════════════════════════
   velkyss.dev — interacciones
   · Menú móvil (hamburguesa)
   · Reveal on scroll (IntersectionObserver)
   · Nav compacto al hacer scroll
   El cambio de tema e idioma viven en sus propios módulos
   (theme.js / i18n.js).
   ════════════════════════════════════════════════════════════════ */

(function () {
  /* ─── menú móvil ─────────────────────────────────────────────── */
  const burger = document.getElementById("nav-burger");
  const menu = document.getElementById("nav-mobile");

  if (burger && menu) {
    function setOpen(open) {
      menu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    }

    burger.addEventListener("click", function () {
      setOpen(!menu.classList.contains("open"));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 880 && menu.classList.contains("open")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        setOpen(false);
        burger.focus();
      }
    });
  }

  /* ─── motion preferences ─────────────────────────────────────── */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─── reveal on scroll ───────────────────────────────────────── */
  // Elementos individuales con clase .reveal y contenedores .reveal-stagger
  // que escalonan a sus hijos directos. Si el usuario prefiere menos
  // movimiento, todo se muestra de golpe.
  if (reducedMotion) {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(function (el) {
      el.classList.add("in");
    });
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });

    document.querySelectorAll(".reveal, .reveal-stagger").forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Sin IntersectionObserver: mostrar todo sin animar.
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ─── nav compacto al hacer scroll ───────────────────────────── */
  const nav = document.querySelector("nav.top");
  if (nav) {
    let ticking = false;
    function updateNav() {
      nav.classList.toggle("scrolled", window.scrollY > 40);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    }, { passive: true });
    updateNav();
  }
})();
