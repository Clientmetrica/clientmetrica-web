# Clientmetrica Web — Architecture

Next.js 16 App Router site. Bilingual (es/en), Spanish-first. Targets medium-to-large Chilean companies.

**Roadmap:** P1 (launch critical) → P2 (month 1–2) → P3 (reserve, build later).

---

## Route Map — Full Scope

```
/
├── [locale]/                                ← i18n locale segment
│   ├── layout.tsx                          ← Locale layout (nav, footer, fonts, lang attr, hreflang)
│   │
│   ├── P1 — LAUNCH CRITICAL
│   ├── page.tsx                            ← Homepage
│   ├── productos/
│   │   ├── page.tsx                        ← Products overview (AI Agents + Cybersecurity) [MISSING]
│   │   ├── [product]/                      ← AI Agent template (MATY · Juanito · Roboto)
│   │   └── ciberseguridad/                 ← Cybersecurity products section
│   │       └── [product]/                  ← Cybersecurity product template [FUTURE — pending definition]
│   ├── nosotros/                           ← About / team [MISSING]
│   ├── contacto/                           ← Contact funnel [MISSING]
│   │
│   ├── P2 — LAUNCH MONTH 1–2
│   ├── servicios/                          ← AI Implementation Services for SMBs
│   │   └── [service]/                      ← Service detail page (single service: implementation) [MISSING]
│   ├── blog/
│   │   ├── page.tsx                        ← Blog listing [MISSING]
│   │   └── [slug]/                         ← Blog article detail [MISSING]
│   ├── casos-de-uso/                       ← Industry use cases listing [MISSING]
│   │   └── [slug]/                         ← Use case detail [MISSING]
│   │
│   ├── P3 — RESERVE ROUTES (build later)
│   ├── clientes/                           ← Client showcase [MISSING]
│   ├── partners/                           ← Partner ecosystem [MISSING]
│   ├── carreras/                           ← Careers / hiring [MISSING]
│   ├── prensa/                             ← Press / media kit [MISSING]
│   │
│   ├── LEGAL / UTILITY
│   ├── privacidad/                         ← Privacy policy [MISSING]
│   ├── terminos/                           ← Terms of service [MISSING]
│   │
│   └── api/
│       └── contact/                        ← POST → HubSpot Forms API
│
├── /sitemap.xml                            ← SEO sitemap (auto-generated)
├── /robots.txt                             ← Search engine directives (auto-generated)
└── /favicon.ico, /opengraph-image.tsx, etc.
```

**Locale-aware slug conventions:**

| Spanish                                  | English                                | Notes                                              |
| ---------------------------------------- | -------------------------------------- | -------------------------------------------------- |
| `/es/`                                   | `/en/`                                 | Homepage and all routes                            |
| `/es/productos`                          | `/en/products`                         | Products overview (both AI Agents + Cybersecurity) |
| `/es/productos/maty`                     | `/en/products/maty`                    | AI Agent product detail                            |
| `/es/productos/ciberseguridad/[product]` | `/en/products/cybersecurity/[product]` | Cybersecurity product detail (pending definition)  |
| `/es/servicios/implementacion`           | `/en/services/implementation`          | AI implementation service for SMBs                 |
| `/es/nosotros`                           | `/en/about`                            | Company info                                       |
| `/es/contacto`                           | `/en/contact`                          | Contact form                                       |
| `/es/blog`                               | `/en/blog`                             | Blog listing (slug same; articles bilingual)       |
| `/es/blog/mi-articulo`                   | `/en/blog/my-article`                  | Blog detail — localized article slugs              |
| `/es/casos-de-uso`                       | `/en/use-cases`                        | Use case listing                                   |
| `/es/casos-de-uso/mineria`               | `/en/use-cases/mining`                 | Use case detail — localized slugs                  |
| `/es/clientes`                           | `/en/clients`                          | Client showcase                                    |
| `/es/partners`                           | `/en/partners`                         | Partners (same slug)                               |
| `/es/carreras`                           | `/en/careers`                          | Careers (same slug)                                |
| `/es/prensa`                             | `/en/press`                            | Press / media                                      |
| `/es/privacidad`                         | `/en/privacy`                          | Privacy policy                                     |
| `/es/terminos`                           | `/en/terms`                            | Terms of service                                   |

**Notes:**

- Root `/` redirects to `/es` (default locale)
- Product names (MATY, Juanito, Roboto) are identical in both locales
- Article/use-case slugs are localized (translated filenames)
- Legal pages have identical structure but different copy per locale

---

## Infrastructure

### `src/app/[locale]/layout.tsx` [MISSING — PRIORITY 1]

Renders the locale-aware root layout shared by all pages under `[locale]`. Required before building any page.

**Responsibilities:**

- Set `lang={locale}` on `<html>` tag (from async `params.locale`)
- Load brand fonts:
  - `Futura PT` via `next/font/local` (self-hosted, licensed)
  - `Inter` via `next/font/google` (free)
- Apply CSS variables to `<body>`: `font-heading` (Futura PT) and `font-body` (Inter)
- Render `<Nav>` and `<Footer>` layout components around `{children}`
- Add `hreflang` alternates meta (one for each supported locale)

**Async patterns required:**

- `const { locale } = await params` (Next.js 16 async params)
- Fetch both locales' message files to inject into nav and footer

### `src/components/layout/Nav.tsx` [MISSING]

Top navigation bar. Rendered in `[locale]/layout.tsx`.

**Features:**

- Logo (linked to `/[locale]`)
- Locale-aware links via `useTranslations('nav')`:
  - Home → `/[locale]`
  - Products → dropdown with three sections:
    - **AI Agents:** MATY, Juanito, Roboto
    - **Cybersecurity:** [Product name — TBD] (placeholder until product defined)
    - **Services:** AI Implementation for SMBs → `/servicios/implementacion`
  - About → `/[locale]/nosotros` (es) / `/[locale]/about` (en)
  - Contact → `/[locale]/contacto` (es) / `/[locale]/contact` (en)
- Mobile hamburger menu (collapsible)
- Locale switcher (es ↔ en) — uses `usePathname` to preserve current page slug

**Note:** Products dropdown can be simplified until cybersecurity product is defined; show only AI Agents + Services initially.

### `src/components/layout/Footer.tsx` [MISSING]

Bottom footer. Rendered in `[locale]/layout.tsx`.

**Contents:**

- Logo
- Navigation links (same structure as Nav)
- Legal links: Privacy, Terms of Service (both in locale-appropriate paths)
- Social media links
- Copyright line: "© [year] Clientmetrica. All rights reserved." (year via `new Date().getFullYear()` after hydration or hardcoded in build)

### Font setup — `public/fonts/` [MISSING]

Futura PT is a **paid, licensed font** — not available on Google Fonts.

**Steps:**

1. Purchase Futura PT (e.g., from Adobe Fonts, MyFonts, or Hoefler & Co.)
2. Download WOFF2 files (regular + bold recommended)
3. Place in `public/fonts/`
4. Reference in `[locale]/layout.tsx` via `next/font/local`:
   ```tsx
   const futuraPT = localFont({
     src: [
       { path: "../../../public/fonts/FuturaPT-Regular.woff2", weight: "400" },
       { path: "../../../public/fonts/FuturaPT-Bold.woff2", weight: "700" },
     ],
     variable: "--font-heading",
   });
   ```
5. Apply to `globals.css` (already has `--font-heading` and `--font-body` CSS variables)

---

## Page Inventory

### Homepage — `src/app/[locale]/page.tsx` [MISSING]

Locale-aware homepage. Renders all sections server-side. Requires `[locale]/layout.tsx` first.

**Section order:**

| #   | Section           | Component             | Notes                                                                           |
| --- | ----------------- | --------------------- | ------------------------------------------------------------------------------- |
| H1  | Hero              | `HomepageHero`        | Main headline, value proposition, primary CTA → `/[locale]/contacto`            |
| H2  | Products overview | `HomepageProducts`    | Three cards for MATY, Juanito, Roboto with short pitch + link to product page   |
| H3  | Why Clientmetrica | `HomepageWhy`         | 3–4 differentiators framed as business outcomes, not tech features              |
| H4  | Social proof      | `HomepageSocialProof` | Client testimonial(s) — same conditional render pattern as `ProductSocialProof` |
| H5  | Bottom CTA        | `HomepageCTA`         | Call to action (identical to or variant of `ProductCTA`)                        |

**Implementation:**

- `generateMetadata()` with locale-aware title and description (format: "Page Name — Clientmetrica")
- All user-facing copy via `useTranslations('homepage')` — add keys to both `es.json` and `en.json`
- Reference `getProductContent(slug, 'maty', locale)` for product card pitch if shared with product pages

### About page — `src/app/[locale]/nosotros/page.tsx` [MISSING]

Company mission and values page. Bilingual with locale-appropriate slugs: `/es/nosotros` · `/en/about`.

**Section order:**

| #   | Section         | Component      | Notes                                                                  |
| --- | --------------- | -------------- | ---------------------------------------------------------------------- |
| A1  | Hero            | `AboutHero`    | Mission statement headline and subheading                              |
| A2  | Mission / Story | `AboutMission` | 2–3 paragraphs: who we are, why Clientmetrica exists, what we solve    |
| A3  | Team            | `AboutTeam`    | Optional — founders/leadership with photos and bios (if showing faces) |
| A4  | Values          | `AboutValues`  | 3–4 brand values with icons (from Lucide) and short description each   |
| A5  | Bottom CTA      | `ProductCTA`   | Reuse existing CTA component                                           |

**Implementation:**

- `generateMetadata()` with locale-aware title and description
- All copy via `useTranslations('about')` — add keys to both `es.json` and `en.json`
- Team photos go in `public/images/team/` (optional, for launch v2)

### Products overview — `src/app/[locale]/productos/page.tsx` [MISSING — P1]

Landing page for all product and service categories (AI Agents + Cybersecurity + Services). Bridges homepage → individual product/service pages.

**Section order:**

| #   | Section               | Component                | Notes                                                                               |
| --- | --------------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| PO1 | Hero                  | `ProductsOverviewHero`   | Headline: "Nuestras Soluciones" (Our Solutions) — umbrella for all offering types   |
| PO2 | AI Agents section     | `ProductCategorySection` | Subheading + 3-card grid: MATY, Juanito, Roboto with icon, description, link        |
| PO3 | Cybersecurity section | `ProductCategorySection` | Subheading + 1-card grid: Cybersecurity product (pending definition)                |
| PO4 | Services section      | `ProductCategorySection` | Subheading + card: AI Implementation Service for SMBs → `/servicios/implementacion` |
| PO5 | Comparison            | `ProductsComparison`     | Optional: comparison matrix (can compare across categories or within AI Agents)     |
| PO6 | Bottom CTA            | `ProductCTA`             | Reuse existing component                                                            |

**Implementation:**

- `generateMetadata()` with locale-aware title/description (e.g., "Soluciones — Clientmetrica")
- All copy via `useTranslations('products-overview')`
- AI products via `getProductContent()`, Cybersecurity via `getCybersecurityProduct()`, Services via `getService()`
- `ProductCategorySection` is a reusable component that renders all three category grids
- **Note:** Cybersecurity product details pending definition — placeholder card OK until definition is finalized
- **Note:** AI Implementation Service is P2 — can show placeholder card on P1 launch, populate content in P2

### AI Implementation Service — `src/app/[locale]/servicios/[service]/page.tsx` [MISSING — P2]

Dedicated page for AI implementation consulting service targeting SMBs. Single service: "implementacion" (implementation).

**Page concept:** Service-oriented (vs. product-oriented). Emphasizes the transformation journey, not features.

**Section order:**

| #    | Section               | Component           | Notes                                                                                        |
| ---- | --------------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| SVC1 | Hero                  | `ServiceHero`       | Headline: "Implementamos IA en tu Negocio" (We Implement AI in Your Business)                |
| SVC2 | The problem           | `ServiceProblem`    | SMBs want AI but lack in-house expertise; implementation is complex and risky                |
| SVC3 | Our approach          | `ServiceApproach`   | Step-by-step: assessment → design → implementation → training → support                      |
| SVC4 | What's included       | `ServicePackage`    | Checklist: consultation, custom solution design, agent setup, team training, 3-month support |
| SVC5 | Case study            | `ServiceCaseStudy`  | Real SMB implementation example (customer, challenge, results)                               |
| SVC6 | Timeline & investment | `ServiceInvestment` | Typical project timeline (weeks), investment range (ballpark), ROI projections               |
| SVC7 | FAQ                   | `ServiceFAQ`        | Common questions about process, timeline, cost, post-implementation support                  |
| SVC8 | CTA                   | `ServiceCTA`        | "Schedule consultation" → contact form or calendar link                                      |

**Implementation:**

- `generateMetadata()` with locale-aware title/description (e.g., "Implementación de IA — Clientmetrica")
- Route: `/es/servicios/implementacion` · `/en/services/implementation`
- All copy via `useTranslations('service')` namespace
- Service data in `src/data/services/` — single file: `implementation.es.ts`, `implementation.en.ts`
- Define `ServiceContent` type in `src/types/service.ts`

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

### Cybersecurity product pages — `src/app/[locale]/productos/ciberseguridad/[product]/page.tsx` [MISSING — FUTURE]

Template for cybersecurity products. Structure mirrors AI Agent product pages but with cybersecurity-specific sections.

**Status:** Pending product definition. Placeholder route reserved.

**Planned section order (TBD with product definition):**

| #   | Section      | Component                 | Notes                                                         |
| --- | ------------ | ------------------------- | ------------------------------------------------------------- |
| CS1 | Hero         | `CybersecurityHero`       | Product headline, key differentiator                          |
| CS2 | Problem      | `CybersecurityProblem`    | Security challenge in target industry                         |
| CS3 | Solution     | `CybersecuritySolution`   | How product solves the security challenge                     |
| CS4 | Features     | `CybersecurityFeatures`   | Key features + architecture overview                          |
| CS5 | Compliance   | `CybersecurityCompliance` | Certifications, compliance standards (SOC 2, ISO 27001, etc.) |
| CS6 | Integrations | `ProductIntegrations`     | Reuse existing component                                      |
| CS7 | Case study   | `CybersecurityCaseStudy`  | Optional — real-world deployment example                      |
| CS8 | CTA          | `ProductCTA`              | Reuse existing component                                      |

**Implementation (once product is defined):**

- Create `src/data/cybersecurity/` parallel to `src/data/products/`
- Define `CybersecurityProductContent` type (similar to `ProductPageContent`)
- Create per-locale content files: `[product].es.ts`, `[product].en.ts`
- Wire into `generateStaticParams()` for static pre-rendering

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

## P2 Pages — Launch Month 1–2

### Blog — `src/app/[locale]/blog/page.tsx` [MISSING — P2]

Blog listing page. Articles sorted by date (newest first) with pagination or load-more.

**Section order:**

| #   | Section         | Component     | Notes                                                                    |
| --- | --------------- | ------------- | ------------------------------------------------------------------------ |
| B1  | Hero            | `BlogHero`    | Headline: "Recursos & Aprendizaje" (Resources & Learning)                |
| B2  | Search / Filter | `BlogFilter`  | Category tags (optional), search box                                     |
| B3  | Article grid    | `BlogListing` | Grid of article cards (image, category, title, excerpt, date, read-time) |
| B4  | Pagination      | `Pagination`  | Next/prev or load-more button                                            |

**Implementation:**

- Articles stored in `src/data/blog/` (per-locale files: `article-slug.es.ts`, `article-slug.en.ts`)
- `getArticles(locale)` returns sorted array
- Category taxonomy (e.g., "Tendencias", "Tutorial", "Caso de Éxito")
- All copy via `useTranslations('blog')`

### Blog article detail — `src/app/[locale]/blog/[slug]/page.tsx` [MISSING — P2]

Individual article page. Rendered with MDX or structured data.

**Section order:**

| #   | Section          | Component            | Notes                                           |
| --- | ---------------- | -------------------- | ----------------------------------------------- |
| BA1 | Header           | `BlogArticleHeader`  | Title, author, date, read time, featured image  |
| BA2 | Content          | `BlogArticleContent` | Markdown / rich text body                       |
| BA3 | Author bio       | `BlogAuthorBio`      | Author name, role, bio, social links (optional) |
| BA4 | Related articles | `BlogRelated`        | 3 related articles (by category or tags)        |
| BA5 | CTA              | `BlogCTA`            | Bottom CTA — contact or product link            |

**Implementation:**

- `generateStaticParams` from `src/data/blog/` files
- `generateMetadata()` pulls title, description, featured image for Open Graph
- Articles bilingual — each slug exists in both locales with translated content
- Localized slugs: `/es/blog/mi-articulo` · `/en/blog/my-article`

### Industry use cases — `src/app/[locale]/casos-de-uso/page.tsx` [MISSING — P2]

Vertical-specific solutions (minería, retail, salud, etc.). Similar structure to blog.

**Section order:**

| #   | Section    | Component        | Notes                                                       |
| --- | ---------- | ---------------- | ----------------------------------------------------------- |
| UC1 | Hero       | `UseCaseHero`    | Headline: "Casos de Uso" (Use Cases)                        |
| UC2 | Filter     | `UseCaseFilter`  | Industry tags: Minería, Retail, Salud, Manufactura, etc.    |
| UC3 | Grid       | `UseCaseListing` | Cards per industry: industry icon, title, description, link |
| UC4 | Bottom CTA | `ProductCTA`     | Reuse existing component                                    |

**Implementation:**

- Stored in `src/data/use-cases/` (per-locale files)
- `getUseCases(locale)` with industry grouping/filtering
- All copy via `useTranslations('use-cases')`

### Use case detail — `src/app/[locale]/casos-de-uso/[slug]/page.tsx` [MISSING — P2]

Individual use case page. Presents industry challenge + Clientmetrica solution + ROI/metrics.

**Section order:**

| #    | Section          | Component          | Notes                                          |
| ---- | ---------------- | ------------------ | ---------------------------------------------- |
| UCD1 | Hero             | `UseCaseHero`      | Industry name, challenge headline              |
| UCD2 | Challenge        | `UseCaseChallenge` | Problem statement, context                     |
| UCD3 | Solution         | `UseCaseSolution`  | How the AI agents solve it                     |
| UCD4 | Results          | `UseCaseResults`   | Metrics, improvements, testimonial             |
| UCD5 | Related products | `UseCaseProducts`  | Which product(s) used: MATY / Juanito / Roboto |
| UCD6 | CTA              | `ProductCTA`       | Schedule demo or contact                       |

**Implementation:**

- `generateStaticParams` from `src/data/use-cases/` files
- Localized slugs: `/es/casos-de-uso/mineria` · `/en/use-cases/mining`
- Each use case tagged with one or more products

---

## P3 Pages — Reserve Routes (build later)

Create placeholder pages now; defer content/design to later phase.

### Client showcase — `src/app/[locale]/clientes/page.tsx` [MISSING — P3]

Social proof showcase — logos, testimonials, metrics ("500+ companies trust Clientmetrica").

**Planned sections:** Hero, Client grid, Case study links, CTA.

### Partners — `src/app/[locale]/partners/page.tsx` [MISSING — P3]

Partner ecosystem and integrations (CRM, ERP, workflow tools).

**Planned sections:** Hero, Partner grid, Integration details, Partner program info, CTA.

### Careers — `src/app/[locale]/carreras/page.tsx` [MISSING — P3]

Job postings and hiring info.

**Planned sections:** Hero, Open positions (list from internal DB or Workable), Culture/values, Apply CTA.

### Press / Media — `src/app/[locale]/prensa/page.tsx` [MISSING — P3]

Press kit, news, media assets.

**Planned sections:** Hero, Latest news, Press kit (media, logo, brand guidelines), Media inquiries CTA.

---

## Legal / Utility Pages

### Privacy Policy — `src/app/[locale]/privacidad/page.tsx` [MISSING]

Legal page. Minimal components needed — mostly static text.

**Implementation:**

- `generateMetadata()` with locale-aware title
- Store as MDX or plain HTML in `src/data/legal/privacidad.es.ts` + `en.ts`
- Ownership: CEO/COO
- All copy via legal team (non-dev)

### Terms of Service — `src/app/[locale]/terminos/page.tsx` [MISSING]

Legal page. Same structure as Privacy.

**Implementation:**

- Stored in `src/data/legal/terminos.es.ts` + `en.ts`
- Ownership: CEO/COO

---

## Data Layer — Content Architecture

All structured content (products, articles, use cases, legal) lives in `src/data/` with per-locale files and a central loader.

```
src/
├── types/
│   ├── product.ts            ← ProductPageContent, ProductSlug, sub-types
│   ├── cybersecurity.ts      ← CybersecurityProductContent, CybersecuritySlug [NEW — FUTURE]
│   ├── service.ts            ← ServiceContent, ServiceSlug [NEW — P2]
│   ├── article.ts            ← BlogArticle, ArticleCategory [NEW]
│   ├── useCase.ts            ← UseCase, Industry [NEW]
│   └── legal.ts              ← LegalDocument [NEW]
│
├── data/
│   ├── products/             ← AI Agent products (MATY, Juanito, Roboto)
│   │   ├── index.ts          ← getProductContent(slug, locale)
│   │   ├── maty.es.ts
│   │   ├── maty.en.ts
│   │   ├── juanito.es.ts     ← [MISSING]
│   │   ├── juanito.en.ts     ← [MISSING]
│   │   ├── roboto.es.ts      ← [MISSING]
│   │   └── roboto.en.ts      ← [MISSING]
│   │
│   ├── cybersecurity/        ← Cybersecurity products [FUTURE — pending definition]
│   │   ├── index.ts          ← getCybersecurityProduct(slug, locale)
│   │   ├── [product].es.ts   ← TBD (e.g., sentinel.es.ts)
│   │   └── [product].en.ts   ← TBD
│   │
│   ├── services/             ← AI Implementation Service [P2]
│   │   ├── index.ts          ← getService(slug, locale)
│   │   ├── implementation.es.ts
│   │   └── implementation.en.ts
│   │
│   ├── blog/                 ← Blog articles [NEW]
│   │   ├── index.ts          ← getArticles(locale), getArticle(slug, locale)
│   │   ├── article-slug.es.ts
│   │   ├── article-slug.en.ts
│   │   ├── another-article.es.ts
│   │   └── another-article.en.ts
│   │
│   ├── use-cases/            ← Industry use cases [NEW]
│   │   ├── index.ts          ← getUseCases(locale), getUseCase(slug, locale)
│   │   ├── mineria.es.ts
│   │   ├── mineria.en.ts
│   │   ├── retail.es.ts
│   │   └── retail.en.ts
│   │
│   └── legal/                ← Legal documents [NEW]
│       ├── privacidad.es.ts
│       ├── privacidad.en.ts
│       ├── terminos.es.ts
│       └── terminos.en.ts
```

**Loader pattern:**

- Each category (`products/`, `blog/`, etc.) has an `index.ts` with loaders
- Loaders fallback to `es` if requested locale has no file
- Unknown slugs return `null` — pages then call `notFound()`
- Loaders support filtering (e.g., articles by category)

**Adding new content:**

- Product: create `{slug}.es.ts` + `{slug}.en.ts`, update `ProductSlug` type and `index.ts`
- Article: create `{slug}.es.ts` + `{slug}.en.ts`, register in blog `index.ts`
- Use case: create `{slug}.es.ts` + `{slug}.en.ts`, register in use-cases `index.ts`

---

## Team Ownership & Responsibilities

Derived from the project diagram. Team members should review and confirm.

| Role                 | Owns                                                                                               | Needs from others                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Dev (Benja)**      | All routes, i18n setup, SEO (`sitemap.ts`, `robots.txt`), API integrations                         | Copy/final content; design specs; legal pages; CEO/COO approval on sensitive content |
| **Copy / Marketing** | All user-facing text: hero copy, product descriptions, blog articles, use cases, about section     | Final route list & component specs from dev; design references                       |
| **Design**           | Visual component specs, layout mocks per page, icon treatments, design system                      | Route list from dev; final copy from marketing (to size text)                        |
| **CEO / COO**        | Legal pages (`privacidad`, `terminos`), sensitive content, product claims, partner/client approval | Dev to build pages; design specs for legal pages                                     |

**Cross-functional kickoff items:**

1. Finalize team assignments for P1, P2, P3 pages
2. Set deadlines per phase (P1 = launch date, P2 = +4 weeks, P3 = TBD)
3. Establish review/approval loops (design → dev, copy → dev, legal → site)
4. Decide on P3 placeholders now vs. building full skeletons

---

## i18n

- `next-intl v4`, locale detection in `src/i18n/request.ts`
- Messages: `src/messages/es.json` (primary) and `src/messages/en.json`
- Product page copy lives in per-locale data files (`src/data/products/`), **not** in `messages/`
- Default locale: `es`

### Message Namespaces

To prevent key sprawl and keep translation files organized, messages are grouped by namespace. **Always add new keys to both `es.json` and `en.json` simultaneously.**

| Namespace           | Purpose                                                  | Used in                                                                      | Owned by         |
| ------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------- |
| `nav`               | Navigation links and labels                              | `Nav`, `Footer` components                                                   | Marketing / Copy |
| `homepage`          | Homepage sections (hero, CTA text)                       | `HomepageHero`, `HomepageProducts`, `HomepageWhy`, etc.                      | Marketing        |
| `products-overview` | Products overview page sections                          | `ProductsOverviewHero`, `ProductCategorySection` (AI Agents + Cybersecurity) | Marketing        |
| `about`             | About page sections                                      | `AboutHero`, `AboutMission`, `AboutValues`                                   | Marketing        |
| `contact`           | Contact funnel labels and messages                       | `ContactFunnel` (migrate from inline copy)                                   | Marketing        |
| `blog`              | Blog listing page labels (filter tags, pagination)       | `BlogFilter`, `BlogListing`                                                  | Marketing        |
| `use-cases`         | Use case listing page labels (industry tags)             | `UseCaseFilter`                                                              | Marketing        |
| `service`           | AI Implementation service page sections                  | `ServiceHero`, `ServiceProblem`, `ServiceApproach`, `ServiceFAQ`, etc.       | Marketing        |
| `products.*`        | Product names only (proper nouns: MATY, Juanito, Roboto) | Product cards, menus — same value in both locales                            | Marketing        |
| `cybersecurity.*`   | Cybersecurity category name + future product names       | Product cards, menus — TBD with product definition                           | Marketing        |

**Design principle:**

- **Page scaffolding, navigation, form labels** → `messages/*.json` (translations managed with `useTranslations()`)
- **Content-rich sections** (product descriptions, article text, use case details) → per-locale data files (`src/data/products/*.ts`, `src/data/blog/*.ts`, etc.) — easier for non-devs to maintain
- **Legal documents** → per-locale data files; not in `messages/`

This separation prevents `messages/` from becoming bloated and keeps marketing copy alongside its context in the data layer.

---

## Open TODOs

Organized by priority tier (P1 / P2 / P3) and category. See [team ownership](#team-ownership--responsibilities) section above for role assignments.

### P1 — LAUNCH CRITICAL

**Prerequisites (blocks all pages)**

- [x] **Build `[locale]/layout.tsx`** — Inter via `next/font/google`, `NextIntlClientProvider`, `hreflang` alternates; `generateMetadata` title template set
- [x] **Build `Nav` component** (`src/components/layout/Nav.tsx`) — sticky header, Products dropdown (AI Agents + Cybersecurity placeholder), mobile hamburger, locale switcher with path translation
- [x] **Build `Footer` component** (`src/components/layout/Footer.tsx`) — brand-dark bg, product links, company links (privacy/terms), LinkedIn, copyright
- [ ] **Font setup** — purchase/license Futura PT, self-host in `public/fonts/` ⚠️ BLOCKED — needs font files
  - Download WOFF2 from Adobe Fonts / MyFonts / Hoefler
  - Place in `public/fonts/FuturaPT-*.woff2`
  - Uncomment `localFont` block in `[locale]/layout.tsx` (code is already written, just stubbed)
- [x] **Fix root `src/app/layout.tsx`** — stripped Geist fonts; uses `getLocale()` for `lang` attr; `src/app/page.tsx` redirects `/` → `/es`; `src/i18n/request.ts` defaults to `es`; dynamic import replaced with static imports for Turbopack compatibility
- [x] **Fix async params** — `contacto/page.tsx` and `productos/[product]/page.tsx` updated to `await params` (Next.js 16)

**Pages**

- [x] **Build Homepage** (`[locale]/page.tsx`) — HomepageHero (navy bg + orange gradient), HomepageProducts (3-card grid pulling from product data), HomepageWhy (4 differentiators), HomepageCTA; HomepageSocialProof deferred until first client testimonial
- [x] **Build Products overview** (`[locale]/productos/page.tsx`) — ProductsOverviewHero, ProductCategorySection (reusable for AI Agents + Cybersecurity; cybersecurity shows placeholder card), ProductCTA
- [x] **Build About page** (`[locale]/nosotros/page.tsx`) — AboutHero, AboutMission, AboutValues (4 values with Lucide icons), ProductCTA reused; AboutTeam deferred to v2
- [x] **Add `juanito` and `roboto` product data files** — all 4 locale files created with distinct positioning (Juanito=sales/CRM, Roboto=data/reporting); `products/index.ts` updated with real imports; all marked TODO for Marketing finalisation

**i18n & Copy**

- [x] **Add translation keys** to `src/messages/es.json` and `en.json` — `homepage.*`, `products-overview.*`, `about.*`, `contact.*` namespaces all added
- [ ] **Replace placeholder copy** in product data files (`src/data/products/*.ts`) with final Marketing copy
- [ ] **Replace ROI numbers** with real data from CEO — must be defensible before launch

**Content & Assets**

- [ ] **Swap icon placeholders** in `ProductCapabilities.tsx` with Lucide icons
- [ ] **Drop integration SVG logos** into `public/logos/` and update `ProductIntegrations.tsx`
- [ ] **Wire HubSpot Meetings embed** — replace `data-src` in `ContactFunnel.tsx` with real URL; uncomment `<Script>` tag
- [ ] **Add testimonial quotes** — unlock `quote` field in product data once first client approves

**SEO & Metadata**

- [x] **Add `sitemap.ts`** — all P1 routes included with hreflang alternates and priority weights
- [x] **Add `robots.ts`** — allows all, disallows `/api/`, points to sitemap
- [ ] **Add Open Graph images** — per-page `opengraph-image.tsx` (follows Next.js convention)
- [x] **Verify `hreflang` alternates** — set in `[locale]/layout.tsx` generateMetadata; also per-page where applicable (e.g. nosotros/about)

---

## CYBERSECURITY PRODUCTS — DEFINITION & PLANNING [FUTURE]

**Status:** Product pending definition. Reserve route structure; defer implementation until product is finalized.

**Research & Definition (blocking further work):**

- [ ] **Define cybersecurity product(s)** — scope, positioning, target ICP
  - What does the cybersecurity offering do? (e.g., vulnerability scanning, threat detection, compliance automation, etc.)
  - Single product or multi-product suite?
  - Name(s) and positioning vs. AI Agents
  - Key differentiators in market
- [ ] **Define product sections & messaging** — what content does the cybersecurity product page need?
  - Adapt `CybersecurityHero`, `CybersecurityProblem`, `CybersecuritySolution`, etc. once scope is clear
  - Identify if any sections from AI Agent template can be reused vs. custom-built
  - Define unique sections (e.g., Compliance certifications section)

**Data layer (once product is defined):**

- [ ] **Create `src/types/cybersecurity.ts`** — `CybersecurityProductContent` and related types
- [ ] **Create `src/data/cybersecurity/` directory** — loaders and per-locale content files
  - Create `index.ts` with `getCybersecurityProduct(slug, locale)` loader
  - Create `[product].es.ts` and `[product].en.ts` files once product name(s) finalized

**Pages & Components (once product is defined):**

- [ ] **Add cybersecurity components** — `CybersecurityHero`, `CybersecurityFeatures`, `CybersecurityCompliance`, etc.
- [ ] **Build cybersecurity product page template** — `src/app/[locale]/productos/ciberseguridad/[product]/page.tsx`
  - Use `generateStaticParams()` to pre-render all cybersecurity products
- [ ] **Add cybersecurity keys** to `src/messages/` — `cybersecurity.*` namespace

---

### P2 — LAUNCH MONTH 1-2

**Data structure setup**

- [ ] **Create services data layer** — `src/data/services/` and loaders
  - `src/data/services/index.ts` with `getService(slug, locale)` loader
  - Create `implementation.es.ts` and `implementation.en.ts` (AI Implementation Service)
  - Define `ServiceContent` type in `src/types/service.ts`
- [ ] **Create blog data layer** — `src/data/blog/` and loaders
  - `src/data/blog/index.ts` with `getArticles()`, `getArticle(slug, locale)`
  - Create first batch of article files (e.g., `first-article.es.ts`, `first-article.en.ts`)
  - Define `BlogArticle` type in `src/types/article.ts`
- [ ] **Create use-cases data layer** — `src/data/use-cases/` and loaders
  - `src/data/use-cases/index.ts` with `getUseCases()`, `getUseCase(slug, locale)`
  - Create use case files (mineria, retail, salud, etc.)
  - Define `UseCase` type in `src/types/useCase.ts`

**Pages**

- [x] **Build AI Implementation Service page** — 6 sections (ServiceHero, ServiceProblem, ServiceApproach, ServicePackage, ServiceInvestment, ServiceFAQ) + ProductCTA; `generateStaticParams` pre-renders `implementacion`; `/en/services/[service]` redirects to `/es/servicios/[service]`
- [x] **Build Blog listing** — BlogHero, BlogListing (card grid with category badge + read-time); 1 seed article in both locales
- [x] **Build Blog article detail** — BlogArticleHeader (navy hero), BlogArticleContent (paragraph renderer); `/en/blog/[slug]` uses locale-mapped slug
- [x] **Build Use cases listing** — UseCaseHero, UseCaseListing (card grid with industry colour coding)
- [x] **Build Use case detail** — UseCaseDetail (challenge/solution/results/products); 1 seed case (Minería/Mining) in both locales

**i18n & Copy**

- [x] **Add service keys** to `messages/` — `service.*`
- [x] **Add blog keys** to `messages/` — `blog.*` (hero, categories, readMore, empty)
- [x] **Add use-cases keys** to `messages/` — `use-cases.*` (hero, industries)
- [ ] **Finalise service copy** (Marketing/Copy) — `src/data/services/implementation.*.ts` scaffolded, marked TODO
- [ ] **Write and publish articles** (Marketing/Copy) — 1 seed article scaffolded; add more to `src/data/blog/`
- [ ] **Write and publish use cases** (Marketing/Copy) — 1 seed case scaffolded; add more to `src/data/use-cases/`

---

### P3 — RESERVE ROUTES (build later)

Create placeholder routes now; defer full implementation to post-launch.

- [x] **Clients showcase** (`[locale]/clientes/page.tsx`) — placeholder hero with "coming soon"
- [x] **Partners** (`[locale]/partners/page.tsx`) — placeholder hero with "coming soon"
- [x] **Careers** (`[locale]/carreras/page.tsx`) — placeholder with "no open positions" message
- [x] **Press / Media** (`[locale]/prensa/page.tsx`) — placeholder hero with "coming soon"

---

### Utility / Legal

- [x] **Create legal data layer** — `src/types/legal.ts`, `src/data/legal/` with all 4 locale files (privacidad + terminos × es/en); `getLegalDocument(slug, locale)` loader
- [x] **Build Privacy policy** (`[locale]/privacidad/page.tsx`) + `/en/privacy` redirect — placeholder copy, marked TODO for CEO/COO
- [x] **Build Terms of service** (`[locale]/terminos/page.tsx`) + `/en/terms` redirect — placeholder copy, marked TODO for CEO/COO
- [x] **Auto-generate `sitemap.xml`** — all P1, P2, legal routes with hreflang and priority weights
- [x] **Auto-generate `robots.txt`** — allow all, disallow /api/

---

## Component Directory

Current and planned component structure. **Subdirs `ui/` and `layout/` do not exist yet** — create them in Phase 1.

```
src/components/
├── sections/                                ← Page-specific, complex sections
│
│   ✓ BUILT
│   ├── ContactFunnel.tsx
│   ├── ProductHero.tsx
│   ├── ProductProblem.tsx
│   ├── ProductHowItWorks.tsx
│   ├── ProductCapabilities.tsx
│   ├── ProductROI.tsx
│   ├── ProductIntegrations.tsx
│   ├── ProductSocialProof.tsx
│   ├── ProductCTA.tsx
│
│   P1 — LAUNCH CRITICAL [MISSING]
│   ├── HomepageHero.tsx
│   ├── HomepageProducts.tsx
│   ├── HomepageWhy.tsx
│   ├── HomepageSocialProof.tsx
│   ├── HomepageCTA.tsx
│   ├── ProductsOverviewHero.tsx
│   ├── ProductCategorySection.tsx (reusable: displays product grid for any category)
│   ├── ProductsComparison.tsx (optional)
│   ├── AboutHero.tsx
│   ├── AboutMission.tsx
│   ├── AboutTeam.tsx (optional for v1)
│   ├── AboutValues.tsx
│
│   P2 — MONTH 1-2 [MISSING]
│   ├── ServiceHero.tsx
│   ├── ServiceProblem.tsx
│   ├── ServiceApproach.tsx
│   ├── ServicePackage.tsx
│   ├── ServiceCaseStudy.tsx
│   ├── ServiceInvestment.tsx
│   ├── ServiceFAQ.tsx
│   ├── ServiceCTA.tsx
│   ├── BlogHero.tsx
│   ├── BlogFilter.tsx
│   ├── BlogListing.tsx
│   ├── BlogArticleHeader.tsx
│   ├── BlogArticleContent.tsx
│   ├── BlogAuthorBio.tsx
│   ├── BlogRelated.tsx
│   ├── BlogCTA.tsx
│   ├── UseCaseHero.tsx
│   ├── UseCaseFilter.tsx
│   ├── UseCaseListing.tsx
│   ├── UseCaseChallenge.tsx
│   ├── UseCaseSolution.tsx
│   ├── UseCaseResults.tsx
│   └── UseCaseProducts.tsx
│
│   FUTURE — CYBERSECURITY PRODUCTS [MISSING — pending product definition]
│   ├── CybersecurityHero.tsx
│   ├── CybersecurityProblem.tsx
│   ├── CybersecuritySolution.tsx
│   ├── CybersecurityFeatures.tsx
│   ├── CybersecurityCompliance.tsx
│   └── CybersecurityCaseStudy.tsx
│
│   P3 — RESERVE [MISSING]
│   ├── ClientShowcaseHero.tsx
│   ├── ClientGrid.tsx
│   ├── PartnerHero.tsx
│   ├── PartnerGrid.tsx
│   ├── CareersHero.tsx
│   ├── JobListing.tsx
│   ├── PressHero.tsx
│   └── NewsGrid.tsx
│
├── layout/                                  ← [MISSING — CREATE IN PHASE 1]
│   ├── Nav.tsx                              ← Top navigation
│   └── Footer.tsx                           ← Footer
│
└── ui/                                      ← [MISSING — CREATE WHEN NEEDED]
    ├── Button.tsx
    ├── Card.tsx
    ├── Badge.tsx
    ├── Pagination.tsx
    └── ...
```

**Naming conventions:**

- One component per file, PascalCase
- `sections/` components can be large and page-specific
- `layout/` components are shared navigation/wrapper elements
- `ui/` components are small, reusable primitives (use `cn()` from `src/lib/utils.ts` for Tailwind merging)

**Reusable components across pages:**

- `ProductCTA` — used in product pages, about page, blog, use cases, P3 pages
- `ProductSocialProof` — used in product pages and homepage (same pattern)

---

## Supporting Docs

| File                                            | Contents                                                    |
| ----------------------------------------------- | ----------------------------------------------------------- |
| `docs/team-coordination.md`                     | Role ownership, handoff protocols, timelines, quality gates |
| `docs/clientmetrica_page_architecture.svg`      | Visual sitemap                                              |
| `docs/clientmetrica_contact_funnel.svg`         | Contact funnel flow diagram                                 |
| `docs/clientmetrica_product_page_template.html` | Design reference for product page sections                  |
| `.claude/skills/cm-brand-guidelines.md`         | Full brand token and style reference                        |
| `.claude/skills/front-coding-standards.md`      | Coding conventions                                          |
