# Frontend Design Standards — Clientmetrica Web

## Brand Palette

Always use Tailwind brand tokens — never raw hex values.

| Token | Hex | Usage |
| ----- | --- | ----- |
| `brand-orange` | `#F75F23` | Primary — 70% of graphics, CTAs, highlights |
| `brand-navy` | `#12145F` | Secondary — backgrounds, headings |
| `brand-duotone1` | `#EB9776` | Tertiary — light orange accents |
| `brand-duotone2` | `#5C38CE` | Tertiary — purple accents |
| `brand-sky` | `#08A0DC` | Tertiary — blue accents |
| `brand-dark` | `#101820` | Tertiary — near black, body text on light |

**Color ratio:** brand-orange dominates at 70% of any graphic composition. Secondary/tertiary colors fill the remaining 30%.

## Typography

- **Headings/Titles/Subtitles:** `font-heading` → Futura PT (self-hosted)
- **Body text / paragraphs:** `font-body` → Inter
- Use font weight variants: Normal, Medium, Bold — heavier = more important
- Never use decorative fonts for body copy

```tsx
// ✅ Correct
<h1 className="font-heading font-bold text-brand-navy">Título</h1>
<p className="font-body text-brand-dark">Párrafo de texto.</p>
```

## Logo usage (from brandbook)

- Never rotate, skew, or add effects to the logo
- Never change logo colors outside the approved palette
- Always maintain the security spacing (clearspace = X on all sides)
- Use SVG format wherever possible
- Logo variants: full lockup (client + metrica) or isotipo alone (decorative role only)

## Photography style

- Clean backgrounds with bright accents
- Conveys innovation and modern professionals
- AI/tech imagery: network visualizations, data interfaces, futuristic portraits
- Avoid generic stock photos — prefer editorial, high-contrast, bold compositions

## Layout principles

- Generous whitespace — never crowded
- Strong typographic hierarchy: large bold headline → subtitle → body
- CTAs are always `brand-orange` — they must stand out
- Dark sections use `brand-navy` or `brand-dark` as background with white text
- Gradient usage: follow brandbook color mix patterns (orange→duotone1, navy→duotone2, etc.)

## Component design rules

- Buttons: primary = `bg-brand-orange text-white`, secondary = `border-brand-navy text-brand-navy`
- Cards: clean white or `brand-navy` background, subtle shadow or border
- Section padding: consistent vertical rhythm — use `py-16` or `py-24` for sections
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Responsive design

- Mobile-first always
- Test at: 375px (mobile), 768px (tablet), 1280px (desktop)
- Navigation collapses to hamburger on mobile

## Accessibility

- All images must have descriptive `alt` text
- Color contrast must meet WCAG AA minimum
- Interactive elements must have focus states
- Never rely on color alone to convey meaning
