# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (uses eslint CLI directly, not next lint)
```

No test runner is configured yet.

## Stack

- **Next.js 16.2.6** — App Router only. Read `node_modules/next/dist/docs/` before writing any Next.js code.
- **React 19.2** with React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **Tailwind CSS v4** with PostCSS
- **next-intl v4** for i18n
- **@anthropic-ai/sdk** — Anthropic SDK is a dependency

## Next.js 16 Breaking Changes to Know

**Async Request APIs** — `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are fully async. Synchronous access is removed. Always `await` them:

```tsx
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
}
```

Run `npx next typegen` to generate `PageProps`/`LayoutProps`/`RouteContext` type helpers.

**`middleware` → `proxy`** — The `middleware.ts` file convention is deprecated. Use `proxy.ts` with a named `proxy` export. The `edge` runtime is not supported in `proxy` (nodejs only); keep `middleware.ts` if you need edge runtime.

**`revalidateTag` requires a second argument** — Pass a `cacheLife` profile: `revalidateTag('posts', 'max')`. Single-argument form is deprecated.

**Turbopack is the default** — Both `next dev` and `next build` use Turbopack. Custom webpack config will break builds.

**Instant navigation** — For client-side navigations to be instant with `<Suspense>`, export `unstable_instant` from the route. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.

## i18n Architecture

Locale detection is handled in `src/i18n/request.ts` via `next-intl`. Messages live in `src/messages/{locale}.json` (currently `en` and `es`). The next-intl plugin wraps the Next.js config in `next.config.ts`.

## React Compiler

`reactCompiler: true` is active — components are automatically memoized. Do not manually add `useMemo`/`useCallback` unless there is a specific reason the compiler cannot handle the case. Expect slower compile times in dev and build.

## Project Skills (`.claude/skills/`)

Detailed standards live in `.claude/skills/`. Key rules to apply without being told:

### Coding standards

- Components under `src/components/` — `ui/`, `layout/`, `sections/` subdirs
- One component per file, PascalCase filename matching the component name
- Utility/hook filenames in camelCase; pages follow Next.js convention (`page.tsx`)
- Merge classes with `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- `interface` for props, `type` for unions/primitives; no `any`
- Import order: React/Next.js → third-party → internal components (`@/components/`) → utilities (`@/lib/`) → types

### Design & styling

- **Always use brand tokens** — never raw hex values (`bg-brand-orange`, not `bg-[#F75F23]`)
- Brand palette: `brand-orange` (#F75F23) · `brand-navy` (#12145F) · `brand-duotone1` · `brand-duotone2` · `brand-sky` · `brand-dark`
- Typography: `font-heading` (Futura PT) for headings, `font-body` (Inter) for body
- Buttons: primary = `bg-brand-orange text-white`, secondary = `border-brand-navy text-brand-navy`
- Section padding: `py-16` or `py-24`; max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### i18n

- **Primary locale is `es`** (Spanish); default fallback is `es`, not `en`
- Always update **both** `es.json` and `en.json` simultaneously
- All user-facing strings via `useTranslations()` — never hardcode copy
- New pages go at `src/app/[locale]/your-page/page.tsx`
- Product names (MATY, Juanito, Roboto) are proper nouns — same value in both locales

### SEO

- Use `generateMetadata()` — never `<Head>` from `next/head`
- Title format: `Page Name — Clientmetrica` (max 60 chars)
- One `<h1>` per page; never skip heading levels
- URL structure: `/es/nosotros`, `/en/about` (locale-appropriate slugs)
- Always add `hreflang` alternates for bilingual pages
- Use `next/image` always; never `<img>`; descriptive `alt` in page locale

### Content & copy

- Frame copy as business outcomes, not technology details
- Target: medium-to-large Chilean companies (primary), global (secondary)
- Product names: **MATY** (all caps), **Juanito**, **Roboto** — always "AI Agents", never "the bot"
- Spanish copy first; English is a natural adaptation, not a literal translation
