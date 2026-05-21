# Coding Standards — Clientmetrica Web

## Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 — tokens defined in `src/app/globals.css`
- **i18n:** next-intl — all user-facing strings via `useTranslations()`
- **Icons:** lucide-react
- **Class merging:** clsx + tailwind-merge via `src/lib/utils.ts`

## TypeScript

- Always type component props explicitly — no `any`
- Use `interface` for props, `type` for unions/primitives
- Export prop types when they may be reused

```typescript
// ✅ Good
interface HeroProps {
  locale: string;
}

// ❌ Bad
const Hero = (props: any) => { ... }
```

## Components

- One component per file
- File name matches component name in PascalCase: `ProductCard.tsx`
- All components go under `src/components/`
  - `ui/` — base primitives (Button, Card, Badge)
  - `layout/` — Nav, Footer, Section wrappers
  - `sections/` — page-specific sections (Hero, ProductGrid)
- Keep components small — extract if a component exceeds ~100 lines

## Styling

- **Always use brand tokens** — never raw hex values in className
  - ✅ `bg-brand-orange` / `text-brand-navy`
  - ❌ `bg-[#F75F23]`
- Use `cn()` helper from `src/lib/utils.ts` to merge classes conditionally
- Mobile-first breakpoints: `sm`, `md`, `lg`, `xl`
- No inline `style` props unless absolutely necessary (e.g. dynamic values)

## File naming

- Components: `PascalCase.tsx`
- Utilities/hooks: `camelCase.ts`
- Pages: `page.tsx` (Next.js convention)
- Keep filenames in English regardless of content language

## Imports order

1. React / Next.js
2. Third-party libraries
3. Internal components (`@/components/...`)
4. Internal utilities (`@/lib/...`)
5. Types

## Comments

- Inline comments should be concise and explain *why*, not *what*
- Use TODO comments for known gaps: `// TODO: add mobile nav`
- No commented-out code in commits

## General rules

- No `console.log` in committed code
- Always handle loading and error states in data-fetching components
- Prefer `const` over `let`; never use `var`
