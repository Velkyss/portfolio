---
name: velkyss.dev
description: The Carved Specification — a technical-portfolio design system where the engineering spec meets sacred architecture.
colors:
  ember: "#C84A18"
  ember-bright: "#E5622E"
  byzantine-gilt: "#A9854D"
  basalt: "#0E0D0D"
  basalt-1: "#111010"
  basalt-2: "#161514"
  basalt-3: "#1C1B19"
  ash: "#F5F4F0"
  ash-dim: "#BFBCB6"
  ash-mute: "#807D78"
  ash-faint: "#4A4744"
  hairline: "rgba(245, 244, 240, 0.07)"
  hairline-strong: "rgba(245, 244, 240, 0.12)"
typography:
  display:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.7vw, 58px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Syne, system-ui, sans-serif"
    fontSize: "clamp(22px, 3.2vw, 38px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
    fontFeature: "'ss01', 'kern'"
  label:
    fontFamily: "DM Mono, ui-monospace, SF Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
  mono:
    fontFamily: "DM Mono, ui-monospace, SF Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.04em"
rounded:
  none: "0"
  sm: "2px"
  md: "6px"
  full: "50%"
spacing:
  gutter: "28px"
  rail: "164px"
  rail-gap: "48px"
  section-y: "132px"
components:
  status-tablet:
    backgroundColor: "transparent"
    textColor: "{colors.ember}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 9px"
  cta-link:
    backgroundColor: "transparent"
    textColor: "{colors.ember}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "0 0 3px 0"
  nav-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ash-mute}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "6px 9px"
---

# Design System: velkyss.dev

## Overview

**Creative North Star: "The Carved Specification"**

velkyss.dev reads like an engineering specification that has been carved into stone. Two disciplines are fused: the rigor of a technical document — a changelog rail down the left margin, monospace field labels, roman-numeral part markers, spec-stamp headers — and the permanence of sacred architecture — a rosette window, Byzantine gilt inscriptions, tessera dot-fields, Khmer corbel thresholds. The thesis of the portfolio ("judgment lives in what I decide *not* to build") is expressed materially: nothing is elevated or decorated for effect; every mark is *inscribed*, justified, load-bearing.

The system is dark by brand default (a warm near-black basalt), monumentally typeset in Syne, and annotated everywhere in DM Mono as if the page were its own margin notes. Density is deliberate and asymmetric: a fixed 164px margin-rail carries labels and a single Ember node, the content column sits to its right, and generous vertical section spacing (132px) gives each part room to be read as a discrete entry. Color is almost absent — the page is basalt and ash — so that the one warm color, Ember, lands as an event. It is the color of decision, and it appears only where a decision was made: the drawn underline under "criterio", the diamond nodes on the rail, active status tablets, and CTAs.

Motion is ritual, not decorative: a single cubic-bezier(0.16, 1, 0.3, 1) governs almost everything, content reveals once on scroll and then holds still, and the only self-emitting light in the entire system is the slow *ember-breathe* glow of the hearth óculo at the heart of the rosette. The explicit anti-reference is the generic SaaS portfolio: no filled pill buttons, no gradient hero, no card shadows, no rounded-everything, no stock imagery, no marketing gloss.

**Key Characteristics:**
- Spec-document scaffolding (margin rail, mono labels, roman numerals, field stamps) as the primary structure.
- Sacred-architecture ornament (rosette, gilt, tesserae, corbels) rendered in pure CSS, never as images.
- Flat by doctrine: depth is tonal and hairline, never shadow.
- Ember as a rationed event color — decision made visible.
- Warm neutrals (basalt/ash), never pure black or gray.
- Live corners (radius-0) on anything "carved"; small radii only on incidental controls.

## Colors

A near-monochrome warm palette — basalt and ash — punctuated by a single rationed accent and a non-interactive metal.

### Primary
- **Ember** (#C84A18): The color of decision. Reserved for moments where a choice is being asserted — the drawn underline beneath "criterio/judgment", the diamond rail nodes and hearth óculo, active status tablets, CTA links, `::selection`. It is never a surface fill.
- **Ember Bright** (#E5622E): The kindled state of Ember. Used for hover/active intensification (case-card name on hover, channel hover, `em` emphasis in the pull-quote) and the focus-visible outline. Reads as Ember "catching".

### Secondary
- **Byzantine Gilt** (#A9854D): The metal of inscriptions — muted Byzantine gold, never the metal of action. Carries margin-rail field labels, roman numerals, decision keys, and screenshot captions. Its job is to mark what is *catalogued and permanent*, in strict opposition to Ember's *decided and live*.

### Neutral
- **Ash** (#F5F4F0): Primary text and the light of the system — a warm off-white, not pure white. Used for statements, headings, and emphasized inline terms.
- **Ash Dim** (#BFBCB6): Body copy and ledes; the standard reading tone.
- **Ash Mute** (#807D78): Secondary/annotation text — nav links, summaries, mono meta.
- **Ash Faint** (#4A4744): Tertiary/quietest text and the hollow-diamond markers of the out-of-scope list.
- **Basalt** (#0E0D0D): The page ground — a warm near-black, the carved stone.
- **Basalt 1 / 2 / 3** (#111010 / #161514 / #1C1B19): Tonal surface steps for layering. Basalt 2 is the banded-section ground that also carries the tessera dot-field; Basalt 1 backs the mobile nav sheet.
- **Hairline** (rgba(245,244,240,0.07)) / **Hairline Strong** (rgba(245,244,240,0.12)): The 1px rules and borders that do all structural division. Ash at low alpha, so they read as incised lines in the stone rather than drawn boxes.

### Named Rules
**The Decision Rule.** Ember means a decision was made. It appears only on choices (the criterio underline, rail nodes, active status, CTAs) and never as a background fill or a large area. Its rarity is the argument.

**The Two Metals Rule.** Gilt inscribes, Ember decides. Gilt is *never* interactive and Ember is *never* a passive label. If an element catalogues (label, numeral, caption) it is Gilt; if it asserts a choice or an action it is Ember. They never trade jobs.

**The Warm-Neutral Rule.** No pure `#000`, `#fff`, or neutral gray. Every neutral carries warmth (basalt/ash); the stone is never cold.

## Typography

**Display Font:** Syne (with system-ui, sans-serif)
**Body Font:** DM Sans (with system-ui, sans-serif)
**Label/Mono Font:** DM Mono (with ui-monospace, SF Mono, monospace)

**Character:** Syne's geometric, slightly eccentric heavy weights give the monumental headings a carved, inscriptional authority; DM Sans at Light (300) keeps body copy quiet and editorial so the headings dominate; DM Mono runs throughout as the "spec annotation" voice — every label, meta line, status, caption, and CTA is monospace, which is what makes the page read as a technical document rather than a marketing site.

### Hierarchy
- **Display** (Syne 800, clamp(34px→112px), line-height 0.92–1.08, tracking −0.03 to −0.045em): The monumental statements — hero line, section titles, the Nullfast card name, the project title, contact title. Negative tracking tightens as size grows; `text-wrap: balance`.
- **Title** (Syne 700, 22–38px, line-height 1–1.15, tracking −0.02 to −0.03em): Mid-level headings — trajectory names, case-part `h3`, the pull-quote.
- **Body** (DM Sans 300, 16–17.5px, line-height 1.6): Ledes and paragraphs; `text-wrap: pretty`, measure capped ~54–62ch. Base weight 400 at 16px for default flow. Emphasized inline terms shift to Ash and weight 500.
- **Label** (DM Mono 400, 10.5–12px, letter-spacing 0.10–0.14em, UPPERCASE): The inscription voice — rail field names, decision keys, screenshot captions. Almost always Gilt.
- **Mono** (DM Mono 400, 11–14px, letter-spacing 0.04–0.06em, normal case): The annotation voice — nav links, meta lines, stack table, status tablets, CTA links, footer.

### Named Rules
**The Annotation Rule.** Anything that is metadata, a label, a status, a key, a caption, or a call-to-action is DM Mono. Prose and headings are never mono; annotations are never Syne or DM Sans. The mono/serif split *is* the spec metaphor.

**The Light-Body Rule.** Body copy is DM Sans Light (300). Weight is added only to pull a single term to Ash (500) — emphasis is by tone and weight together, never by italic or color alone.

## Layout

A single centered container (`max-width: 1120px`, `--gutter` 28px → 22px on mobile). The defining structure is the **spec rail**: a two-column grid, `grid-template-columns: 164px 1fr`, repeated by the hero (`.hero-grid`) and every section (`.sec-grid`). The left 164px column is the margin — it holds a Gilt field label and mono meta, a 1px vertical `border-right`, an Ember diamond node (`.sec-rail::after`) and a short horizontal capital rule (`.sec-rail::before`) that make it read as a changelog spine. Content sits in the right column, offset by a 48px `--rail-gap`.

Vertical rhythm is set by `--section-y` (132px desktop, 92px mobile). Banded sections (`.sec-band`) sit on Basalt 2 with a tessera dot-field (two offset radial-gradient grids at 26px) and hairline top/bottom borders, alternating with un-banded sections on Basalt to pace the scroll.

**Responsive:** one breakpoint at **900px**. The rail *folds* rather than disappears: the two-column grid collapses to one column, the vertical rule and capital are dropped, and the field label + meta reflow to a single inline row above the content (the `.msep` middot appears only in this folded state). Desktop nav links give way to a hamburger + mobile sheet; multi-column grids (case card, screenshots, contact channels, out-of-scope) collapse to one or two columns.

**The Rail Rule.** The 164px margin-rail is the signature. New sections use `.sec-grid` and put their identity (Gilt label + mono meta + Ember node) in the rail, never inline with the body.

## Elevation & Depth

**Flat by doctrine.** The system uses no drop shadows for elevation. Depth is created two ways only: **tonal layering** (basalt → basalt-1 → basalt-2 → basalt-3 as surfaces recede or band) and **hairline incision** (1px Hairline / Hairline-Strong borders that divide like lines cut into stone). Surfaces are co-planar; hierarchy comes from tone and rule-weight, not lift. The nav is the one translucent plane — a `backdrop-filter: blur(12px) saturate(140%)` over a color-mixed basalt, which reads as frosted glass laid on the stone, not as a floating shadowed bar.

### Shadow Vocabulary
There is exactly **one** shadow in the system, and it is light, not shade:
- **Hearth Glow** (`box-shadow: 0 0 20px 3px color-mix(in oklab, var(--accent) 55%, transparent)`, breathing to `0 0 10px 1px ... 28%`): The self-emitting glow of the Ember óculo at the center of the rosette, animated by `ember-breathe` (4.5s). It is the only emitted light in the system and belongs to the hearth alone.

### Named Rules
**The No-Shadow Rule.** UI elements cast no shadow. If something needs to feel distinct, change its tonal surface (basalt step) or add a hairline — never a drop shadow. The single glow is reserved for the Ember hearth.

## Shapes

The form language is **carved, not molded**. Anything that represents permanence or a decision has **live corners (radius 0)**: status tablets (`border-radius: 0` — explicitly "tablilla tallada, sin radio"), screenshot frames, cards, section bands. Small radii exist only on *incidental controls* that are not part of the inscription — the language/theme toggle and hamburger (6px), the focus ring (2px). Perfect circles (`50%`) are reserved for the ornament: the rosette window and the brand dot.

Recurring geometry: the **45°-rotated square (diamond)** is the system's glyph — it is the rail changelog node, the hearth óculo, and (as a hollow outline) the out-of-scope marker. Filled and Ember, it is a decision made; hollow and Ash-Faint, it is a decision declined. Ornament is built entirely from CSS gradients and masks (conic-gradient tracery for the rosette's two rings, repeating radial-gradients for tesserae), never from raster assets.

**The Carved-Corner Rule.** Content artifacts (tablets, cards, frames, bands) have radius 0. Only throwaway controls get a small radius. Radius signals "incidental UI"; its absence signals "part of the record".

## Components

For each component: character first, then shape, color, states, behavior.

### Buttons
There is **no filled button in the system** — this is a deliberate identity choice. Every action is a text-style link in the annotation voice.
- **CTA link** (`.result-link`, `.case-card-cta`): DM Mono 13px / 0.04em, Ember, with a trailing arrow SVG. `.result-link` carries a 1px Ember-at-40%-alpha bottom border (`padding-bottom: 3px`); on hover it brightens to Ember Bright and the border follows. On card CTAs the arrow translates `(3px, -3px)` on parent hover.
- **Nav toggle** (`.nav-toggle`, lang/theme): DM Mono 11px, Ash-Mute, transparent, 1px Hairline-Strong border, **6px** radius, `6px 9px` padding. Hover lifts text to Ash and border to Ash-Mute. This is the one place a soft corner is allowed.

### Status tablet (signature)
- **Style:** The inscribed status marker (`.ccm-status`, `.trajectory-status`). DM Mono 10.5–11px UPPERCASE, letter-spacing 0.08em, Ember text on a 1px Ember-at-35%-alpha border, **radius 0**, `4px 9px` padding. Transparent fill.
- **Behavior:** Non-interactive — it labels state ("Live on Play", "In development"), it is not a button. Its live corners and Ember stroke make it read as a carved plate.

### Cards / Containers
- **Corner Style:** Radius 0.
- **Background:** Transparent — cards are defined by rules, not fills. The Nullfast case card (`.case-card`) is a 1fr/210px grid divided by a Hairline-Strong bottom border and an internal Hairline left border on the meta column.
- **Shadow Strategy:** None (see Elevation).
- **Hover:** The bottom border shifts Hairline-Strong → Ash-Faint, the display name shifts Ash → Ember Bright, and the CTA arrow translates. Restraint: only tone moves, nothing lifts.

### Navigation
- **Style:** Sticky top bar, translucent blurred basalt, 1px Hairline bottom border. `62px` tall, compacting to `54px` with a stronger border once scrolled (`.scrolled`).
- **Links** (`.nav-link`): DM Mono 12px, Ash-Mute, with an Ember underline that wipes in left-to-right (`scaleX`) on hover as text lifts to Ash.
- **Brand:** Syne 800 wordmark + logo (rotates −8° on hover) + a 4px Ember dot.
- **Mobile:** Below 900px, links collapse to a hamburger whose bars animate into an X; the sheet (`.nav-mobile`) drops on Basalt 1 with hairline-divided mono rows.

### Contact channel
- **Style:** A two-column grid of `.channel` rows (DM Mono 14px, Ash) split by hairlines, each with a Gilt-mute uppercase key and a trailing arrow. Hover lifts the row to Ember Bright and translates + brightens the arrow to Ember.

### Signature ornament — the Rosette
The `.hero-rose`: a 110px CSS-only rose window. A hairline outer ring with a double-rim radial-gradient, a 16-spoke outer corona (conic-gradient masked to an annulus), an 8-spoke inner corona bordered in Gilt, and at the center the **hearth óculo** — a 9px Ember diamond with the breathing Hearth Glow. A 72px `.rose-minor` variant marks the project page ("the chapel to the home's cathedral"). It is decorative mass, not an object, and it is the emotional center of the identity.

## Do's and Don'ts

### Do:
- **Do** put every section's identity (Gilt label + mono meta + Ember diamond node) in the 164px `.sec-grid` rail; let it fold to an inline row below 900px.
- **Do** ration Ember to decisions and actions only — the criterio underline, rail nodes, status, CTAs, selection — and keep it well under ~10% of any screen.
- **Do** keep Gilt strictly to inscriptions (labels, numerals, keys, captions) and never make it clickable.
- **Do** render ornament (rosettes, tesserae, corbels) in pure CSS gradients/masks, never as images.
- **Do** use radius 0 for anything carved (tablets, cards, frames, bands); reserve 6px only for incidental controls (toggles, burger).
- **Do** convey depth with tonal basalt steps and 1px hairlines; keep the single cubic-bezier(0.16, 1, 0.3, 1) easing for motion.
- **Do** use tokens (`--accent`, `--gilt`, `--ink*`, `--fog*`), never raw hex, and keep both light and dark themes working through the variable remap.

### Don't:
- **Don't** introduce a filled/pill button, a gradient CTA, or a rounded-everything control — the portfolio's whole point is refusal of that pattern.
- **Don't** add drop shadows or card elevation; the only glow belongs to the Ember hearth.
- **Don't** use pure black, pure white, or neutral gray — every neutral is warm (basalt/ash).
- **Don't** set labels/status/CTAs in Syne or DM Sans, or set prose/headings in DM Mono — the mono/serif split is the spec metaphor.
- **Don't** let Ember and Gilt trade jobs (Gilt is never action, Ember is never a passive label).
- **Don't** inflate: present in-development apps (Triplo, HomeTogether) as in-development, and cite only real, dated metrics.
