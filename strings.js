/* ════════════════════════════════════════════════════════════════
   velkyss.dev — cadenas de texto ES / EN
   El español es el idioma principal; el inglés, secundario.
   ════════════════════════════════════════════════════════════════ */

const strings = {

  es: {
    /* ── Navegación ── */
    navCase:    "Nullfast",
    navNow:     "ahora",
    navMethod:  "método",
    navContact: "contacto",

    /* ── Hero ── */
    heroStatement:
      'Apps centradas en lo que importa.<br>' +
      '<span class="soft">Mi</span> <span class="underline">criterio</span> ' +
      '<span class="soft">está en lo que decido</span> no <span class="soft">construir</span>.',
    heroMetaL:
      '<strong>Velkyss</strong> es el nombre con el que firmo el trabajo.<br>' +
      'Detrás hay una persona escribiendo código nativo<br>' +
      'para Android e iOS.',
    heroMetaR:
      '<span class="who">Ezequiel Marchena</span><br>' +
      'Sanlúcar de Barrameda · ES<br>' +
      'Activo desde 2017',

    /* ── Caso de estudio: Nullfast ── */
    caseLabel: "Caso de estudio",
    caseLede:
      'Una app de ayuno intermitente para Android. <em>Un temporizador que arranca ' +
      'rápido, un historial que sobrevive al teléfono, y nada más.</em> Sin cuenta, ' +
      'sin sincronización en la nube, sin suscripción mensual fingiendo ser un coach.',

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
      'Decir que no a la suscripción decidió la arquitectura: sin cuenta, sin servidor, sin atadura.',

    /* ── En qué trabajo ahora ── */
    nowLabel: "Trayectoria",
    nowMeta:  "En desarrollo · 2026",
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
      'agota la lista de funciones. No hay tarjetas vacías que rellenar aquí. Cuando ' +
      'estén listas para enseñarse, se enseñarán.',

    /* ── Método + stack ── */
    methodLabel: "Método",
    methodMeta:  "Cuatro decisiones · un stack",
    methodTitle: "Cómo trabajo",
    methodLede:
      'Cuatro decisiones, no cuatro reglas. Lo que pienso antes de empezar cada app. ' +
      'Y no siempre lo resuelvo de la misma manera.',
    m1: '<strong>Decidir antes de construir.</strong> En Nullfast fue una spec escrita entera antes del primer commit. No siempre toma esa forma, pero la arquitectura nunca se improvisa.',
    m2: '<strong>Nativo por defecto, cross-platform por decisión.</strong> Compose en Android, SwiftUI en iOS. Kotlin Multiplatform cuando hay dos plataformas que de verdad comparten lógica, como en HomeTogether.',
    m3: '<strong>Funcionar sin depender de un servidor, siempre que se pueda.</strong> Nullfast no toca la red. Cuando una app sí la necesita, la sincronización se diseña desde el principio, no se parchea al final.',
    m4: '<strong>El modelo sigue al producto.</strong> Una compra única cuando no hay coste recurrente, como en Nullfast. Una suscripción cuando el producto se sostiene sobre infraestructura continua.',
    stackCleanArch: "Clean Architecture",
    stackCross: "Cross",
    stackTools: "Herramientas",

    /* ── Contacto ── */
    contactLabel: "Contacto",
    contactMeta:  "Respuesta en 48&nbsp;h",
    contactTitle: "Hablemos de un proyecto pequeño<br>y bien definido.",
    contactSub:
      'Trabajo en remoto desde Sanlúcar de Barrameda con clientes en España y fuera. ' +
      'No respondo a mensajes genéricos ni a propuestas vagas, pero sí, y rápido, a un correo concreto.',

    /* ── Footer ── */
    footMade: "Hecho en Sanlúcar de Barrameda"
  },

  en: {
    /* ── Navigation ── */
    navCase:    "Nullfast",
    navNow:     "now",
    navMethod:  "method",
    navContact: "contact",

    /* ── Hero ── */
    heroStatement:
      'Apps focused on what matters.<br>' +
      '<span class="soft">My</span> <span class="underline">judgment</span> ' +
      '<span class="soft">lives in what I decide</span> not <span class="soft">to build</span>.',
    heroMetaL:
      '<strong>Velkyss</strong> is the name on the work.<br>' +
      'Behind it, one person writing native code<br>' +
      'for Android and iOS.',
    heroMetaR:
      '<span class="who">Ezequiel Marchena</span><br>' +
      'Sanlúcar de Barrameda · ES<br>' +
      'Shipping since 2017',

    /* ── Case study: Nullfast ── */
    caseLabel: "Case study",
    caseLede:
      'An intermittent-fasting app for Android. <em>A timer that starts fast, a history ' +
      'that outlives the phone, and nothing else.</em> No account, no cloud sync, no ' +
      'monthly subscription pretending to be a coach.',

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
      'Saying no to the subscription decided the architecture: no account, no server, no lock-in.',

    /* ── What I'm working on now ── */
    nowLabel: "Trajectory",
    nowMeta:  "In development · 2026",
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
      'list runs out. There are no empty cards to fill in here. When they\'re ready to ' +
      'be shown, they\'ll be shown.',

    /* ── Method + stack ── */
    methodLabel: "Method",
    methodMeta:  "Four decisions · one stack",
    methodTitle: "How I work",
    methodLede:
      'Four decisions, not four rules. What I think through before starting each app. ' +
      'And I don\'t always resolve it the same way.',
    m1: '<strong>Decide before building.</strong> For Nullfast that was a full spec written before the first commit. It doesn\'t always take that form, but the architecture is never improvised.',
    m2: '<strong>Native by default, cross-platform by decision.</strong> Compose on Android, SwiftUI on iOS. Kotlin Multiplatform when two platforms genuinely share logic, as in HomeTogether.',
    m3: '<strong>Run without depending on a server, whenever possible.</strong> Nullfast never touches the network. When an app does need it, sync is designed from the start, not patched on at the end.',
    m4: '<strong>The model follows the product.</strong> A one-time payment when there\'s no recurring cost, as in Nullfast. A subscription when the product runs on continuous infrastructure.',
    stackCleanArch: "Clean Architecture",
    stackCross: "Cross",
    stackTools: "Tooling",

    /* ── Contact ── */
    contactLabel: "Contact",
    contactMeta:  "Reply within 48&nbsp;h",
    contactTitle: "Let's talk about a small,<br>well-scoped project.",
    contactSub:
      'I work remotely from Sanlúcar de Barrameda, with clients in Spain and beyond. ' +
      'I don\'t reply to generic messages or vague pitches, but I do, and quickly, to a concrete email.',

    /* ── Footer ── */
    footMade: "Built in Sanlúcar de Barrameda"
  }

};
