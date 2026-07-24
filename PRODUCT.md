# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Usuario primario: **hiring managers y reclutadores técnicos** evaluando a Ezequiel Marchena para un **puesto en plantilla (full-time)** como desarrollador de apps móviles. Llegan al portfolio para decidir en pocos minutos si merece una entrevista: quieren evidencia de criterio de producto y oficio técnico real, no una lista de tecnologías. Trabajo **remoto internacional con base en Sanlúcar de Barrameda (España)**; el sitio es bilingüe ES/EN (español primario) precisamente para audiencia dentro y fuera de España.

Una visita exitosa termina en contacto para un proceso de selección (mensaje) o, como paso intermedio, en la descarga del CV.

## Product Purpose

`velkyss.dev` es el portfolio técnico personal de Ezequiel Marchena. Existe para conseguir que un equipo lo contrate, demostrando su forma de trabajar a través de un caso de estudio real (Nullfast) y de su método, en lugar de un currículum genérico. El éxito es que la persona que evalúa quede convencida del criterio de producto y decida escribirle.

## Positioning

El diferencial no es "sé Kotlin/Swift", sino un **POV explícito: el criterio está en lo que se decide NO construir**. El caso de Nullfast lo demuestra materialmente — decir no a la suscripción y a la cuenta de usuario *decidió la arquitectura* (sin backend, sin nube, offline-first). Es un desarrollador nativo en solitario que diseña, construye y publica productos completos y sostenibles por una sola persona, con las decisiones de arquitectura, alcance y monetización subordinadas a lo que la app necesita ser. Un portfolio vecino podría listar el mismo stack, pero no puede reclamar con verdad un producto propio publicado construido bajo esa disciplina de sustracción.

## Operating Context

- Sitio estático servido en **Cloudflare Pages** (el repo se sirve tal cual; `_headers` se lee en cada build). Sin build step, sin dependencias, sin framework: HTML/CSS/JS a mano.
- Dos páginas principales: home (`index.html`) y el caso de estudio de Nullfast (`projects/nullfast/`), más una política de privacidad autónoma (`nullfast/privacy.html`).
- **CSP enforcing por hash SHA-256** en `_headers`: editar cualquier bloque inline obliga a recomputar su hash. `.gitattributes` fija los `*.html` a LF (una conversión a CRLF rompe todos los hashes).
- URLs de Cloudflare Pages **sensibles a mayúsculas**: nombres de archivo y enlaces deben coincidir en caso exacto.
- Assets compartidos entre páginas usan **rutas absolutas** (`/cv/...`, `/assets/...`) para resolver igual desde home y desde `/projects/nullfast/`.

## Capabilities and Constraints

- Sitio bilingüe ES/EN con sistema i18n propio (`strings.js` → `i18n.js`); el español es el idioma principal. Toda la copy vive en `strings.js` con claves camelCase.
- Tema claro/oscuro con **oscuro por defecto** (marca); transiciones vía View Transitions API.
- Descarga de CV en ES y EN desde `/cv/` (`Ezequiel-Marchena-CV-ES.pdf`, `Ezequiel-Marchena-CV-EN.pdf`); los nombres están hardcodeados en dos sitios que deben mantenerse sincronizados.
- Sin toolchain: no hay comandos de build/lint/test. Desarrollo abriendo archivos o sirviendo la carpeta por HTTP.
- Restricción de contenido: la copy evita cifras infladas y lenguaje de marketing; el tono es sobrio y de sustracción. Futuro trabajo debe preservar esa voz.

## Brand Commitments

- **Nombre / firma:** "Velkyss" es el nombre con el que Ezequiel firma el trabajo (una sola persona detrás).
- **Acento:** Ember `#C84A18` (`--accent`), con `--accent-hi` `#E5622E`. Usar los tokens CSS, no hex crudo.
- **Tipografía:** Syne (display), DM Sans (cuerpo), DM Mono (mono).
- **Tema:** oscuro es el default de marca; claro es un override.
- **POV / voz:** "El criterio está en lo que decido no construir." Sobria, técnica, honesta, sin hype. Sin componente de "botón primario": los CTA son estilos de enlace de texto.
- Direcciones visuales exploratorias registradas en memoria (dirección arquitectónica "Dark Souls": rosetón, gilt, teselas, corbeles, hoguera) — contexto de exploración, no compromiso vinculante de la home actual.

## Evidence on Hand

- **Nullfast — app real publicada en Google Play** (Android · Jetpack Compose). Enlazable. Es la prueba central del portfolio.
- **Métricas de Nullfast (reales, aprobadas para mostrarse):** **5★ con 6 valoraciones** y **105 descargas**, datos a fecha del **20 de julio de 2026**. Son cifras pequeñas y honestas — encajan con la voz de sustracción del sitio (early-stage, producto propio recién publicado), no deben inflarse ni redondearse al alza. Cualquier presentación debe fechar el dato o marcarlo como aproximado, porque crecerá. Futuro trabajo no debe inventar cifras distintas de estas.
- **Antigüedad real: activo desde 2019** ("Shipping since 2019") — usable como experiencia.
- **Capturas reales** de las pantallas de Nullfast (Temporizador, Historial, Agua, Peso).
- **CV en PDF (ES/EN)** servidos desde `/cv/` (se añaden fuera de banda; actualmente solo `.gitkeep`).
- **Triplo** (app de planificación de viajes) y **HomeTogether** (suite doméstica para parejas, Kotlin Multiplatform) están **en desarrollo, no publicadas** — deben presentarse como trayectoria/hacia dónde va el trabajo, nunca como apps lanzadas.
- No hay testimonios, clientes ni benchmarks fabricables: futuro trabajo no debe inventarlos.

## Product Principles

1. **El criterio está en la sustracción.** Lo que se decide no construir pesa tanto como lo que sí; el portfolio debe demostrarlo, no solo afirmarlo.
2. **Evidencia real por encima de reclamo.** Un producto publicado y decisiones justificadas convencen más que adjetivos o listas de tecnologías. Nunca fabricar cifras, clientes ni testimonios.
3. **Nativo por defecto, cross-platform por decisión.** El modelo técnico sigue al producto, no a la moda.
4. **Sostenibilidad de una sola persona.** Todo — arquitectura, alcance, monetización — se subordina a que una persona pueda mantenerlo; el propio sitio es estático y sin dependencias por la misma razón.
5. **Sobriedad honesta.** Tono técnico y sin hype; en desarrollo se dice en desarrollo, publicado se dice publicado.

## Accessibility & Inclusion

- Respeta `prefers-reduced-motion`: un bloque global neutraliza transiciones/animaciones; el reveal-on-scroll muestra todo de golpe sin IntersectionObserver.
- Respeta `prefers-color-scheme` para el tema inicial (con override guardado del usuario).
- Bilingüe ES/EN con selección inicial: `localStorage` → `navigator.language` → `es`.
