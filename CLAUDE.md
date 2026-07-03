# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`velkyss.dev` — a technical portfolio for Ezequiel Marchena. **Static site: hand-written HTML/CSS/JS, no build step, no dependencies, no package.json, no framework.** Deployed on Cloudflare Pages (it serves the repo as-is and reads `_headers` on each build).

Because there is no toolchain, there are **no build / lint / test commands**. To develop, edit files and open them directly, or serve the folder over HTTP so absolute paths (`/cv/...`, `/assets/...`) resolve:

```bash
python -m http.server 8080   # then open http://localhost:8080
```

## Pages

- `index.html` — home (hero, Nullfast summary card, trajectory, method+stack, contact).
- `projects/nullfast/index.html` — Nullfast case study. Absolute-path aware; shares the root scripts/styles via `../../`.
- `nullfast/privacy.html` — standalone privacy policy. **Self-contained**: it does NOT use the shared i18n system; it has its own inline `setLang()` `<script>`, inline `<style>`, and `onclick=""` handlers. Editing it means touching CSP hashes (see below).

## Shared architecture (index.html + projects/nullfast)

Both main pages load the same five root files, and **script order matters** — `strings.js` must load before `i18n.js`:

```
strings.js  →  i18n.js  →  theme.js  →  main.js   (+ style.css)
```

Each JS file is a self-contained IIFE with no cross-file globals except `strings`:

- **`strings.js`** — the single source of copy. One object `strings = { es: {...}, en: {...} }` with **camelCase keys** (`navCase`, `cardCta`, …). No other casing exists; match it. Values that contain markup (`<br>`, `<strong>`, `<em>`) are consumed via `innerHTML`, so they pair with `data-i18n-html` in the HTML.
- **`i18n.js`** — applies copy on load and on the `#lang-toggle` click. Two node contracts: `[data-i18n]` → `textContent` (plain text), `[data-i18n-html]` → `innerHTML` (intentional markup). Initial language: saved `localStorage` → `navigator.language` → `es` (Spanish is primary). Also owns the CV download links via `CV_FILES` / `applyCvLinks(lang)` — it only sets `href` + `download`; the visible label is handled by the normal `data-i18n` swap.
- **`theme.js`** — dark is the brand default. Sets `data-theme` on `<html>`; order is saved → system `prefers-color-scheme` → dark. Toggle wraps the change in `document.startViewTransition` for a crossfade when supported.
- **`main.js`** — mobile menu, compact-nav-on-scroll, and reveal-on-scroll: elements with `.reveal` / `.reveal-stagger` get `.in` via `IntersectionObserver`. Under `prefers-reduced-motion` (or no IO support) everything is shown at once.

## Styling

Single `style.css`. Design tokens are CSS custom properties on `:root` (`--ink*`, `--fog*`, `--accent` = Ember `#C84A18`, `--accent-hi` = `#E5622E`; fonts `--font-display` Syne / `--font-body` DM Sans / `--font-mono` DM Mono). **Use these tokens, not raw hex.** Light theme is an override block: `html[data-theme="light"]` remaps the same variable names. There is no "primary button" component — CTAs are text-link styles (`.result-link`, `.case-card-cta`, `.channel`). A global `@media (prefers-reduced-motion: reduce)` block zeroes all transitions/animations, so any transition you add is neutralized automatically under that preference. Page-to-page and theme transitions use the native View Transitions API (`@view-transition`); download anchors don't navigate, so they don't interact with it.

## CSP / `_headers` — read before editing any HTML

`_headers` ships an **enforcing** `Content-Security-Policy` (`default-src 'self'`, etc.) that whitelists each inline block by **SHA-256 hash**. This has hard consequences:

- **`.gitattributes` pins `*.html` to LF.** The hashes were computed over the inline bytes in LF; a CRLF conversion changes the served bytes and every hashed block breaks. Never let HTML become CRLF.
- **If you edit an inline block, its hash changes and you must recompute it in `_headers`**, or the browser blocks that block. Hashed blocks: the `<script type="application/ld+json">` in `index.html` and in `projects/nullfast/index.html`, and the inline `<script>`, `<style>`, and two `onclick=""` handlers in `nullfast/privacy.html`. Recompute with the exact bytes between the tags:

  ```bash
  printf '%s' "<exact inline content>" | openssl dgst -sha256 -binary | openssl base64
  ```

- **Adding normal elements (anchors, divs, attributes) does NOT touch CSP** — only inline `<script>`/`<style>`/`style=""`/`on*=""` do. External JS/CSS/images must stay same-origin (`'self'`), fonts from `fonts.gstatic.com`, styles also from `fonts.googleapis.com`.

## Conventions to match

- i18n keys are **camelCase**; add both an `es` and `en` entry together, grouped with their section.
- `forEach` callbacks use `function (el) { … }`, not arrow functions (matches existing modules).
- Cross-page assets use **absolute paths** (`/cv/...`) so they resolve identically from the home and from `/projects/nullfast/`.
- Cloudflare Pages URLs are **case-sensitive** — filenames and links must match case exactly.

## CV download specifics

PDFs are served from `/cv/` (currently only `.gitkeep`; the actual PDFs are added out of band). Filenames are hardcoded in **two places that must stay in sync**: the no-JS fallback `href`/`download` in `index.html`, and `CV_FILES` in `i18n.js`. Expected exact names: `Ezequiel-Marchena-CV-ES.pdf`, `Ezequiel-Marchena-CV-EN.pdf`.
