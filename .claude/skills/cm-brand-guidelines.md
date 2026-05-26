---
name: cm-brand-guidelines
description: >
  Clientmetrica brand identity reference for all design, copy, and frontend work.
  Use this skill whenever working on anything visual or written for Clientmetrica:
  website components, social media posts, presentations, email templates, marketing
  copy, UI design, or any output that will be seen externally. Triggers on requests
  involving colors, typography, logo usage, tone of voice, layout, photography
  direction, or any "does this match the brand?" question. Also use when generating
  or reviewing copy, naming components, or building any page in the clientmetrica-web
  repo. If the user mentions "brand", "on-brand", "Clientmetrica style", or refers
  to any design token — always consult this skill first.
---

# Clientmetrica Brand Guidelines

> Source of truth for all visual and communication decisions. When in doubt, consult this skill.

---

## 1. Brand Identity

**Positioning:** Full AI Agents company. Not a consultancy — a product company building AI agents for medium-large enterprises.

**Tone of voice:** Professional + Innovative. Formal but approachable. Always in results/ROI terms, not tech jargon.

**Language:** Spanish primary (LATAM + Spain). English for global outbound. Never mix languages in a single piece.

**Avoid:** Excessive tech jargon, unsubstantiated promises, generic "AI" language, informal slang.

---

## 2. Color Palette

### Primary (70% of all graphics)

| Token          | Hex       | RGB           | Usage                             |
| -------------- | --------- | ------------- | --------------------------------- |
| `brand-orange` | `#F75F23` | 247 / 95 / 35 | Main CTAs, headlines, key accents |

### Secondary + Tertiary (30% combined)

| Token            | Hex       | RGB             | Usage                                 |
| ---------------- | --------- | --------------- | ------------------------------------- |
| `brand-navy`     | `#12145F` | 18 / 20 / 95    | Backgrounds, text on light, authority |
| `brand-duotone1` | `#EB9776` | 235 / 151 / 118 | Soft accents, gradients with orange   |
| `brand-duotone2` | `#5C38CE` | 92 / 56 / 206   | Dynamic accents, gradient pairings    |
| `brand-sky`      | `#08A0DC` | 8 / 160 / 220   | Highlights, links, data viz           |
| `brand-dark`     | `#101820` | 16 / 24 / 32    | Near-black backgrounds, footers       |

### Approved Gradient Pairings

```text
White → Orange         #FFFFFF → #F75F23
Orange → Light Orange  #F75F23 → #EB9776
Orange → Navy          #F75F23 → #12145F
Sky → Purple           #08A0DC → #5C38CE
Purple → Navy          #5C38CE → #12145F
Sky → Navy             #08A0DC → #12145F
Navy → Dark            #12145F → #101820
```

> Use gradients for backgrounds, section dividers, hero overlays, and illustration fills. Never apply gradients to the logo itself.

### Tailwind CSS v4 Tokens (globals.css)

```css
--color-brand-orange: #f75f23;
--color-brand-navy: #12145f;
--color-brand-duotone1: #eb9776;
--color-brand-duotone2: #5c38ce;
--color-brand-sky: #08a0dc;
--color-brand-dark: #101820;
```

Usage: `bg-brand-orange`, `text-brand-navy`, `border-brand-sky`, etc.

---

## 3. Typography

### Typefaces

| Role              | Font          | Weights                   | Usage                          |
| ----------------- | ------------- | ------------------------- | ------------------------------ |
| Headings / Titles | **Futura PT** | Book, Medium, Bold, Heavy | H1–H4, display text, nav items |
| Body / Paragraphs | **Inter**     | Regular, Medium, Bold     | Body copy, captions, UI labels |

### Tailwind Tokens

```css
--font-heading: "Futura PT", sans-serif;
--font-body: "Inter", sans-serif;
```

Usage: `font-heading`, `font-body`

### Futura PT Notes

- **Paid font** — purchase via Adobe Fonts or MyFonts. Self-host via `next/font/local`.
- Files go in `public/fonts/`. Reference with `@font-face` in globals.css.
- Inter is free via `next/font/google`.

### Hierarchy Pattern

```text
H1 — Futura PT Heavy or Bold, large, orange or navy
H2 — Futura PT Bold, medium-large, navy or white
H3 — Futura PT Medium, medium
Body — Inter Regular, comfortable line-height (1.6–1.75)
Caption/Label — Inter Medium or Bold, small, muted
```

---

## 4. Logo Usage

### Logotype Construction

- Wordmark: "client" (navy) + "metrica" (orange) — stacked, lowercase
- Isotipo: upward trending line-chart arrow (innovation + growth concept)
- The isotipo is **decorative** — it should never overpower the wordmark

### Permitted Uses

- Any solid background where contrast is maintained
- Over photography with sufficient overlay contrast
- Multiple color variants exist (see brandbook p.11–12): orange/navy, white, reversed

### Prohibited Uses

- Do not rotate or tilt
- Do not stretch or distort
- Do not swap the two-color split (navy/orange is fixed)
- Do not apply effects (shadows, blurs, glows)
- Do not use off-brand colors
- Do not enlarge the isotipo disproportionately
- Do not place on backgrounds that reduce legibility

### Clear Space

Maintain minimum clear space of **1× the isotipo height** on all four sides.

---

## 5. Photography Style

**Direction:** Modern, clean, high-contrast. Bright accents against clean backgrounds. Conveys innovation + human accessibility.

**Subject matter:**

- Technology interfaces, data, networks (abstract-modern)
- Professional humans with tech overlays (faces with data projections, scanning effects)
- Workspace shots — clean, modern offices
- Robot/AI character illustrations (brand mascot — friendly, intelligent aesthetic)

**Color treatment:** Photos often have a **duotone blue/purple cast** (`#08A0DC` / `#5C38CE` / `#12145F`). Orange accents can appear as overlaid graphic elements, not in the photo itself.

**Avoid:** Generic stock photography, overly staged corporate shots, low contrast, warm-toned casual settings.

---

## 6. Brand Robot / Mascot

- A friendly, intelligent robot illustration — represents accessible, transformative technology
- Use for: product illustrations, empty states, onboarding, social content
- Style: clean vector, consistent with brand colors
- Not yet fully defined — when using, keep to orange/navy/sky palette and simple geometric forms

---

## 7. Layout System (Social / Web)

### Social Media (Instagram) — 1080 × 1350 px

Three approved layout patterns:

1. **Photo + overlay text** — image background, title in Futura PT Bold (white), logo bottom-right
2. **Solid color card** — navy or gradient background, white text, logo bottom-right
3. **Split layout** — photo left + navy right panel with text
4. **Hashtag post** — minimal, single hashtag as hero element on navy

All posts: logo always present, consistent corner placement (bottom-right preferred).

### Web Component Guidelines

- Section backgrounds: white, `brand-dark`, `brand-navy`, or gradient pairs
- Cards: white with `brand-orange` accent border or icon; or navy background with white text
- CTAs: `brand-orange` fill, white text, Futura PT Bold
- Dividers/accents: orange horizontal rule (as seen in brandbook section headers)

---

## 8. Copy Voice (quick reference)

| Do                                                  | Don't                                  |
| --------------------------------------------------- | -------------------------------------- |
| "Reduce operational costs by 40%"                   | "Leverage cutting-edge AI"             |
| "Your team handles exceptions; MATY handles volume" | "Powered by advanced machine learning" |
| "Measurable ROI from day one"                       | "Transform your digital journey"       |
| Specific outcomes, timeframes, metrics              | Vague transformation promises          |
| Formal but direct — like a senior consultant        | Startup hype or tech-bro casual        |

For full copy guidelines → see `contexto-corporativo-clientmetrica.md`.

---

## 9. Products (brand context)

| Product | Identifier | Notes                 |
| ------- | ---------- | --------------------- |
| MATY    | All-caps   | Name always uppercase |
| Juanito | Title case |                       |
| Roboto  | Title case |                       |

Each product should have consistent visual treatment: own accent color (from tertiary palette), consistent icon/illustration style.

---

## 10. Quick Checklist

Before shipping any asset, verify:

- [ ] Orange is dominant (≈70% of graphic weight)
- [ ] Fonts are Futura PT (headings) + Inter (body) — no substitutes
- [ ] Logo follows usage rules (not rotated, legible, correct colors)
- [ ] Copy leads with outcomes, not technology
- [ ] Bilingual parity — Spanish and English versions both complete
- [ ] Color usage matches approved palette only

---

## 11. Web Implementation

### Component classes (Tailwind)

- Buttons: primary = `bg-brand-orange text-white`, secondary = `border-brand-navy text-brand-navy`
- Cards: white or `brand-navy` background, subtle shadow or border
- Section padding: `py-16` or `py-24`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Responsive breakpoints

Test at: 375px (mobile), 768px (tablet), 1280px (desktop). Mobile-first always. Navigation collapses to hamburger on mobile.

### Accessibility

- All images must have descriptive `alt` text in the page's locale
- Color contrast must meet WCAG AA minimum
- Interactive elements must have visible focus states
- Never rely on color alone to convey meaning

---

_Based on Clientmetrica Brand Book v1.0 — update when brandbook updates._
