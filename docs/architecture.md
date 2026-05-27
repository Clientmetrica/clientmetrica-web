# Clientmetrica Web — Architecture

Next.js 16 App Router site. Bilingual (es/en), Spanish-first. Targets medium-to-large Chilean companies.

---

## Route Map

```
/
├── [locale]/
│   ├── productos/
│   │   └── [product]/          ← MATY · Juanito · Roboto
│   ├── contacto/               ← 3-step contact funnel
│   └── api/
│       └── contact/            ← POST → HubSpot Forms API
```

> Locale-aware slugs: `/es/contacto`, `/en/contact` (locale-appropriate). Root `/` redirects to default locale (`es`).

---

## Page Inventory

### Product pages — `src/app/[locale]/productos/[product]/page.tsx`

Shared template rendered for all three AI Agents. Content is injected via `getProductContent(slug, locale)` from `src/data/products/`.

**Section order:**

| #   | Section                 | Component             |
| --- | ----------------------- | --------------------- |
| S1  | Hero                    | `ProductHero`         |
| S2  | Problem statement       | `ProductProblem`      |
| S3  | How it works            | `ProductHowItWorks`   |
| S4  | Capabilities            | `ProductCapabilities` |
| S5  | ROI metrics             | `ProductROI`          |
| S6  | Integrations            | `ProductIntegrations` |
| S7  | Social proof (optional) | `ProductSocialProof`  |
| S8  | Bottom CTA              | `ProductCTA`          |

`generateStaticParams` pre-renders `maty`, `juanito`, `roboto` at build time. Unknown slugs → `notFound()`.

### Contact page — `src/app/[locale]/contacto/page.tsx`

Thin server wrapper (`generateMetadata` + layout). Delegates all state to `ContactFunnel` (client component).

**Funnel steps:**

1. Product interest selection (multi-select: MATY · Juanito · Roboto)
2. Contact details (name, email, company, role)
3. HubSpot Meetings embed **or** async "contact me" path

On step 2 submit → `POST /api/contact` → HubSpot Forms API.

### Contact API — `src/app/[locale]/api/contact/route.ts`

Server-only route. Maps `ContactPayload` to HubSpot field names and submits to the HubSpot Forms v3 endpoint. Returns `{ ok: true }` in all cases — HubSpot errors are logged but not surfaced to the user.

**Required env vars:**

| Variable                        | Purpose                                  |
| ------------------------------- | ---------------------------------------- |
| `HUBSPOT_FORMS_API_KEY`         | Private app token (server-only)          |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Portal ID (also used for Meetings embed) |
| `HUBSPOT_FORM_GUID`             | Target form GUID                         |

---

## Data Layer — Product Content

```
src/
├── types/product.ts          ← ProductPageContent, ProductSlug, sub-types
├── data/products/
│   ├── index.ts              ← getProductContent(slug, locale)
│   ├── maty.es.ts
│   ├── maty.en.ts
│   ├── juanito.*.ts          ← TODO: pending copy
│   └── roboto.*.ts           ← TODO: pending copy (currently falls back to MATY)
```

`getProductContent` falls back to `es` if the requested locale has no entry, and returns `null` for unknown slugs.

Adding a new product: create `{slug}.es.ts` + `{slug}.en.ts`, register them in `index.ts`, add the slug to `ProductSlug` union in `types/product.ts`.

---

## Component Structure

```
src/components/
├── sections/
│   ├── ContactFunnel.tsx
│   ├── ProductHero.tsx
│   ├── ProductProblem.tsx
│   ├── ProductHowItWorks.tsx
│   ├── ProductCapabilities.tsx
│   ├── ProductROI.tsx
│   ├── ProductIntegrations.tsx
│   ├── ProductSocialProof.tsx
│   └── ProductCTA.tsx
├── ui/                       ← reusable primitives (buttons, cards…)
└── layout/                   ← nav, footer, wrappers
```

All `sections/` components accept a `content: ProductPageContent` prop (except `ProductIntegrations` and `ProductCTA`, which are content-agnostic). `ContactFunnel` is a `"use client"` component; product sections are server components.

---

## i18n

- `next-intl v4`, locale detection in `src/i18n/request.ts`
- Messages: `src/messages/es.json` (primary) and `src/messages/en.json`
- Product page copy lives in per-locale data files, **not** in `messages/` — `ContactFunnel` has inline copy pending migration to `messages/`
- Default locale: `es`

---

## Open TODOs

- Replace all placeholder strings with final copy from Marketing
- Replace ROI numbers with real data from CEO — must be defensible before launch
- Add `juanito` and `roboto` content files once copy is ready; uncomment imports in `index.ts`
- Wire HubSpot Meetings embed: replace `data-src` placeholder in `ContactFunnel.tsx` with the real Meetings URL and uncomment the `<Script>` tag (`import Script from "next/script"`)
- Swap `<span>` icon placeholders with Lucide icons in `ProductCapabilities.tsx`
- Drop integration SVG logos into `public/logos/` and update `ProductIntegrations.tsx`
- Add `{ product: "juanito" }` and `{ product: "roboto" }` to `generateStaticParams()` once real content is ready (currently falls back to MATY data)
- Unlock `quote` field in product data files once first client approves a testimonial
- Migrate `ContactFunnel` inline copy to `es.json` / `en.json`

---

## Supporting Docs

| File                                            | Contents                                   |
| ----------------------------------------------- | ------------------------------------------ |
| `docs/clientmetrica_page_architecture.svg`      | Visual sitemap                             |
| `docs/clientmetrica_contact_funnel.svg`         | Contact funnel flow diagram                |
| `docs/clientmetrica_product_page_template.html` | Design reference for product page sections |
| `.claude/skills/cm-brand-guidelines.md`         | Full brand token and style reference       |
| `.claude/skills/front-coding-standards.md`      | Coding conventions                         |
