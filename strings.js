/* ════════════════════════════════════════════════════════════════
   velkyss.dev — cadenas de texto ES / EN
   El español es el idioma principal; el inglés, secundario.

   Esquema de claves (sin duplicados):
     nav*      → navegación (compartida por ambas páginas)
     hero*     → hero de la home
     card*     → tarjeta-resumen de Nullfast en la home
     now*      → sección "en qué trabajo ahora" (home)
     triplo* / ht*  → items de trayectoria (home)
     method* / m* / stack*  → sección método (home)
     contact*  → contacto (compartido)
     foot*     → footer (compartido)
     proj*     → marco de la página de proyecto (cabecera, intro, nav inferior)
     case* / dec* / out* / k*  → cuerpo del caso de estudio (página de proyecto)
   ════════════════════════════════════════════════════════════════ */

const strings = {

  es: {
    /* ── Navegación (compartida) ── */
    navCase:    "Nullfast",
    navNow:     "ahora",
    navMethod:  "método",
    navContact: "contacto",

    /* ── Hero (home) ── */
    heroStatement:
      'Apps centradas en lo que importa.<br>' +
      '<span class="soft">Mi</span> <span class="underline">criterio</span> ' +
      '<span class="soft">está en lo que</span> decido <span class="soft">no construir</span>.',
    heroMetaL:
      '<strong>Velkyss</strong> es el nombre con el que firmo el trabajo.<br>' +
      'Detrás hay una persona escribiendo código nativo para Android e iOS.',
    heroMetaR:
      '<span class="who">Ezequiel Marchena</span><br>' +
      'Sanlúcar de Barrameda · ES<br>' +
      'Activo desde 2019',

    /* ── Tarjeta-resumen de Nullfast (home) ── */
    cardEyebrow:      "Caso de estudio · 2026",
    cardSummary:
      'App de ayuno intermitente para Android. Un temporizador que arranca rápido, ' +
      'un historial que sobrevive al teléfono, y nada más. Sin cuenta, sin nube, sin suscripción.',
    cardMetaScope:    "Una persona",
    cardMetaPlatform: "Android · Compose",
    cardMetaStatus:   "En Play Store",
    cardCta:          "Ver el caso completo",

    /* ── En qué trabajo ahora (home) ── */
    nowLabel: "Trayectoria",
    nowMeta:  'En desarrollo <br><span class="msep">· </span>2026',
    nowTitle: "En qué trabajo ahora",
    nowIntro:
      'Después de Nullfast, dos productos en desarrollo bajo la misma disciplina. ' +
      'No son apps publicadas todavía; son hacia dónde va el trabajo.',
    triploStatus: "En desarrollo",
    triploDesc:
      'App de planificación de viajes. Cada viaje activa solo los módulos que necesita: ' +
      'equipaje, itinerario, reservas, presupuesto. El resto, fuera.',
    htStatus: "En desarrollo",
    htDesc:
      'Suite de gestión doméstica para parejas. Datos compartidos entre dos personas y ' +
      'entre Android e iOS, desde una sola base de código en Kotlin Multiplatform.',
    nowClosing:
      'Mismo principio que Nullfast: terminar cuando lo esencial funciona, no cuando se ' +
      'agota la lista de funciones. No hay tarjetas vacías que rellenar aquí.',

    /* ── Método + stack (home) ── */
    methodLabel: "Método",
    methodMeta:  '4 decisiones <br><span class="msep">· </span>un stack',
    methodTitle: "Cómo trabajo",
    methodLede:
      'Cuatro decisiones, no cuatro reglas. Lo que pienso antes de empezar cada app. ' +
      'Y no siempre lo resuelvo de la misma manera.',
    m1: '<strong>Decidir antes de construir.</strong> En Nullfast fue una spec escrita entera antes del primer commit. No siempre toma esa forma, pero la arquitectura nunca se improvisa.',
    m2: '<strong>Nativo por defecto, cross-platform por decisión.</strong> Compose en Android, SwiftUI en iOS. Kotlin Multiplatform cuando hay dos plataformas que de verdad comparten lógica, como en HomeTogether.',
    m3: '<strong>Offline-first cuando el producto lo permite.</strong> Si los datos pueden vivir en el dispositivo, viven ahí, y la app funciona sin conexión. Nullfast es el caso extremo: la red solo entra para comprobar la versión mínima. Otros productos dependen de ella, y entonces la sincronización se diseña desde el principio.',
    m4: '<strong>El modelo sigue al producto.</strong> Cada decisión, desde la arquitectura hasta la monetización o qué entra y qué no, responde a lo que la app necesita ser, no a una moda ni a una plantilla.',
    stackCleanArch: "Clean Architecture",
    stackCross: "Cross",
    stackTools: "Herramientas",

    /* ── Contacto (compartido) ── */
    contactLabel: "Contacto",
    contactMeta:  'Respuesta <br>en 48 h',
    contactTitle: "La confianza se construye en los detalles.",
    contactSub:
      'Desarrollador Android e iOS. Producto propio en la Play Store. ' +
      'Si buscas a alguien para tu equipo, escríbeme.',
    cvDownload: "Descargar CV",
    cvOther:    "Versión en inglés",

    /* ════════════════════════════════════════════════════════
       PÁGINA DE PROYECTO · /projects/nullfast/
       ════════════════════════════════════════════════════════ */

    /* ── Marco: cabecera y navegación ── */
    projBack:     "Volver a Velkyss",
    projEyebrow:  "Caso de estudio",
    projDate:     "2026",
    projRole:     "Diseño, desarrollo y publicación · una persona",
    projIntro:
      'Cuando practiqué ayuno intermitente no encontré ninguna app que me gustara: ' +
      'todas pedían cuenta, formularios de registro larguísimos u onboardings eternos. ' +
      'Así que construí una que encajara con lo que de verdad hace falta. Un temporizador, ' +
      'un histórico y poco más.',

    /* ── Marco: navegación inferior ── */
    projNextLabel: "Siguiente proyecto",
    projNextName:  "Triplo",
    projNextNote:  "En desarrollo",
    projBackHome:  "Volver al inicio",

    /* ── Capturas (etiquetas de pie) ── */
    shotsLabel: "Pantallas",
    shot1: "Temporizador",
    shot2: "Historial",
    shot3: "Agua",
    shot4: "Peso",

    /* ── Cuerpo del caso de estudio ── */
    caseProblem: "El problema",
    caseProblemBody:
      'Quien ayuna no necesita una app que le venda planes premium ni que le obligue ' +
      'a registrarse para empezar. Necesita <strong>arrancar un temporizador en dos ' +
      'toques</strong> y que ese registro siga ahí dentro de un año. Las apps existentes ' +
      'mezclaban tracking, comunidad, coaching y muros de pago; cada interacción cargaba ' +
      'con peso ajeno al gesto que el usuario fue a hacer.',

    caseDecisions: "Decisiones",
    kSpec:     "spec-first",
    kPricing:  "modelo de pago",
    kData:     "datos",
    kPlatform: "plataforma",
    dec1: "La especificación se escribió antes que el primer commit. Cada pantalla justifica su existencia por escrito.",
    dec2: "Anuncios no invasivos y una compra única para quitarlos. Se paga una sola vez, sin suscripción ni cobros recurrentes.",
    dec3: "Todo vive en el dispositivo. No hay backend, no hay cuenta, no hay sincronización en la nube. No hay, por tanto, incidente de datos posible.",
    dec4: "Nullfast es una app solo para Android. Construirla nativa, sin capa cross-platform, era lo natural: no había una segunda plataforma con la que compartir código.",

    caseOut: "Fuera del alcance",
    out1: "Coaching y planes guiados",
    out2: "Comunidad y feed social",
    out3: "Suscripción mensual «premium»",
    out4: "Sincronización entre dispositivos",
    out5: "Integraciones con wearables",
    out6: "Recetas, planes nutricionales",

    caseResult: "Resultado",
    caseResultBody:
      'Vive en Google Play. Mantenida por una sola persona, sin servidor que pagar ni ' +
      'cuenta de usuario que migrar. El alcance acotado es lo que la hace sostenible: ' +
      'nada de la app requiere atención semanal para seguir funcionando el año que viene.',
    caseResultCta: "Ver en Play Store",
    casePullquote:
      'Lo que se decide <em>no</em> construir tiene tanto peso como lo que sí. ' +
      'Decir que no a la suscripción decidió la arquitectura: sin cuenta, sin servidor, sin atadura.'
  },

  en: {
    /* ── Navigation (shared) ── */
    navCase:    "Nullfast",
    navNow:     "now",
    navMethod:  "method",
    navContact: "contact",

    /* ── Hero (home) ── */
    heroStatement:
      'Apps focused on what matters.<br>' +
      '<span class="soft">My</span> <span class="underline">judgment</span> ' +
      '<span class="soft">lives in what I</span> decide <span class="soft">not to build</span>.',
    heroMetaL:
      '<strong>Velkyss</strong> is the name on the work.<br>' +
      'Behind it, one person writing native code for Android and iOS.',
    heroMetaR:
      '<span class="who">Ezequiel Marchena</span><br>' +
      'Sanlúcar de Barrameda · ES<br>' +
      'Shipping since 2019',

    /* ── Nullfast summary card (home) ── */
    cardEyebrow:      "Case study · 2026",
    cardSummary:
      'An intermittent-fasting app for Android. A timer that starts fast, ' +
      'a history that outlives the phone, and nothing else. No account, no cloud, no subscription.',
    cardMetaScope:    "Solo build",
    cardMetaPlatform: "Android · Compose",
    cardMetaStatus:   "Live on Play",
    cardCta:          "Read the full case",

    /* ── What I'm working on now (home) ── */
    nowLabel: "Trajectory",
    nowMeta:  'In development <br><span class="msep">· </span>2026',
    nowTitle: "What I'm working on now",
    nowIntro:
      'After Nullfast, two products in development under the same discipline. ' +
      'They\'re not shipped apps yet; they\'re where the work is heading.',
    triploStatus: "In development",
    triploDesc:
      'A travel-planning app. Each trip switches on only the modules it needs: ' +
      'packing, itinerary, reservations, budget. The rest stays out.',
    htStatus: "In development",
    htDesc:
      'A home-management suite for couples. Data shared between two people and across ' +
      'Android and iOS, from a single Kotlin Multiplatform codebase.',
    nowClosing:
      'Same principle as Nullfast: finish when the essential works, not when the feature ' +
      'list runs out. There are no empty cards to fill in here.',

    /* ── Method + stack (home) ── */
    methodLabel: "Method",
    methodMeta:  '4 decisions <br><span class="msep">· </span>one stack',
    methodTitle: "How I work",
    methodLede:
      'Four decisions, not four rules. What I think through before starting each app. ' +
      'And I don\'t always resolve it the same way.',
    m1: '<strong>Decide before building.</strong> For Nullfast that was a full spec written before the first commit. It doesn\'t always take that form, but the architecture is never improvised.',
    m2: '<strong>Native by default, cross-platform by decision.</strong> Compose on Android, SwiftUI on iOS. Kotlin Multiplatform when two platforms genuinely share logic, as in HomeTogether.',
    m3: '<strong>Offline-first when the product allows it.</strong> If the data can live on the device, it lives there, and the app works with no connection. Nullfast is the extreme case: the network only comes in to check the minimum version. Other products depend on it, and then sync is designed from the start.',
    m4: '<strong>The model follows the product.</strong> Every decision, from architecture to monetization to what goes in and what stays out, answers to what the app needs to be, not to a trend or a template.',
    stackCleanArch: "Clean Architecture",
    stackCross: "Cross",
    stackTools: "Tooling",

    /* ── Contact (shared) ── */
    contactLabel: "Contact",
    contactMeta:  'Reply <br>within 48 h',
    contactTitle: "Trust is built in the details.",
    contactSub:
      'Android & iOS developer. Shipped my own product to the Play Store. ' +
      'If you\'re hiring for your team, get in touch.',
    cvDownload: "Download CV",
    cvOther:    "Spanish version",

    /* ════════════════════════════════════════════════════════
       PROJECT PAGE · /projects/nullfast/
       ════════════════════════════════════════════════════════ */

    /* ── Frame: header and navigation ── */
    projBack:     "Back to Velkyss",
    projEyebrow:  "Case study",
    projDate:     "2026",
    projRole:     "Design, development and release · one person",
    projIntro:
      'When I was doing intermittent fasting I couldn\'t find an app I liked: ' +
      'they all wanted an account, long sign-up forms, or endless onboarding. ' +
      'So I built one that fit what you actually need. A timer, a history, and little else.',

    /* ── Frame: bottom navigation ── */
    projNextLabel: "Next project",
    projNextName:  "Triplo",
    projNextNote:  "In development",
    projBackHome:  "Back to home",

    /* ── Screenshots (captions) ── */
    shotsLabel: "Screens",
    shot1: "Timer",
    shot2: "History",
    shot3: "Water",
    shot4: "Weight",

    /* ── Case study body ── */
    caseProblem: "The problem",
    caseProblemBody:
      'People who fast don\'t need an app selling premium plans, and they don\'t need ' +
      'to register to start. They need to <strong>start a timer in two taps</strong> and ' +
      'trust the record will still be there a year from now. The apps that existed mixed ' +
      'tracking, community, coaching and paywalls; every interaction carried weight ' +
      'unrelated to the gesture the user came to make.',

    caseDecisions: "Decisions",
    kSpec:     "spec-first",
    kPricing:  "pricing",
    kData:     "data",
    kPlatform: "platform",
    dec1: "The spec was written before the first commit. Every screen justifies its existence on paper.",
    dec2: "Non-intrusive ads and a one-time purchase to remove them. Paid once, with no subscription and no recurring charges.",
    dec3: "Everything lives on the device. No backend, no account, no cloud sync. No possible data incident, therefore.",
    dec4: "Nullfast is an Android-only app. Building it native, with no cross-platform layer, was the natural call: there was no second platform to share code with.",

    caseOut: "Out of scope",
    out1: "Coaching and guided plans",
    out2: "Community and social feed",
    out3: 'Monthly "premium" subscription',
    out4: "Cross-device sync",
    out5: "Wearable integrations",
    out6: "Recipes, meal plans",

    caseResult: "Outcome",
    caseResultBody:
      'Live on Google Play. Maintained by one person, with no server to pay for and no ' +
      'user accounts to migrate. The narrow scope is what makes it sustainable: nothing ' +
      'in the app needs weekly attention to keep working next year.',
    caseResultCta: "View on Play Store",
    casePullquote:
      'What you decide <em>not</em> to build weighs as much as what you do. ' +
      'Saying no to the subscription decided the architecture: no account, no server, no lock-in.'
  }

};
