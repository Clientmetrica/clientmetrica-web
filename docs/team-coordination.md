# Clientmetrica Web — Team Coordination Guide

This document explains how the four roles involved in building the Clientmetrica website work together, what each role owns, and how to coordinate without blocking each other. Written for a first-time website project.

---

## The Core Principle: Parallel Tracks

The website is built in two independent layers that only meet at the component level. This means multiple roles can work simultaneously without waiting for each other.

```
┌─────────────────────────────────────────────────────────┐
│  Layer 1 — STRUCTURE (Dev)                              │
│  Routes · API integrations · SEO · Data layer · i18n   │
├─────────────────────────────────────────────────────────┤
│  Merge point — Component files (.tsx)                   │
├─────────────────────────────────────────────────────────┤
│  Layer 2 — APPEARANCE (Design)                          │
│  Tailwind classes · Layout · Typography · Colors        │
└─────────────────────────────────────────────────────────┘

Content (Marketing/Legal) fills the data files at any time —
independent of both layers above.
```

**Key insight:** You do not need finished design to build routes. You do not need final copy to build pages. You do not need a live page to write copy. These tracks run in parallel.

---

## Roles & What Each One Owns

Derived from the architecture. Confirm assignments before P1 build begins.

### Dev (Benja)

**Full ownership:**

- All Next.js routes and page files (`src/app/[locale]/`)
- Component HTML structure (props interface, semantic markup, no styling)
- Data layer loaders (`src/data/`) and TypeScript types (`src/types/`)
- i18n wiring (`src/messages/`, `useTranslations()`, locale routing)
- SEO: `generateMetadata()`, `sitemap.ts`, `robots.ts`, `hreflang` alternates
- API integrations: HubSpot Forms, HubSpot Meetings embed, future CRMs
- Deployment pipeline: Vercel, environment variables, CI configuration
- Performance: image optimization (`next/image`), font loading, build output

**Placeholder responsibilities:**

- Write placeholder copy in data files (`"[Placeholder: Marketing fills this]"`)
- Stub component structure before design pass
- Create realistic-length dummy content so designer can size components correctly

**Does NOT own:**

- Tailwind visual classes (unless explicitly confirmed with designer)
- Final copy or brand messaging
- Legal document text

---

### Design

**Full ownership:**

- Visual specifications per component: Tailwind classes, spacing, layout, color usage
- Component-level design: what each section looks like (mockups in Figma or similar)
- Typography hierarchy per page type
- Responsive behavior: mobile, tablet, desktop breakpoints
- Icon selection (Lucide icon names per component)
- Photography and illustration direction

**Delivers to Dev:**

- Tailwind class annotations per component (can be inline in Figma or in a shared doc)
- Approved SVG assets: logo variants, integration logos (`public/logos/`), team photos (`public/images/team/`)
- Futura PT WOFF2 font files (purchased/licensed) → Dev places in `public/fonts/`

**Does NOT own:**

- Final copy (text content)
- Route or page structure decisions
- TypeScript or component logic

**Critical P1 deliverable:**

- Logo SVG and Futura PT WOFF2 files — these block the entire build. Deliver first.

---

### Marketing / Copy

**Full ownership:**

- All user-facing text: hero headlines, subheadlines, feature descriptions, CTAs
- Product positioning: what MATY, Juanito, Roboto say about themselves
- Blog articles: write, review, publish via `src/data/blog/`
- Use case content: industry-specific narrative in `src/data/use-cases/`
- AI Implementation Service copy: approach, package details, FAQ in `src/data/services/`
- Translation ownership: final ES copy is primary; EN is an adaptation (not a literal translation)

**Delivers to Dev:**

- Filled `src/data/products/*.ts` files (directly editable — TypeScript object files, not code)
- Filled `src/data/blog/*.ts` files per article
- Final nav link labels and button text for `src/messages/es.json` and `en.json`

**Does NOT own:**

- Legal text (CEO/COO)
- Technical decisions (routes, APIs, component structure)

**Does not block Dev:** Dev builds pages with placeholder copy. Marketing fills files when ready. No waiting required.

---

### CEO / COO

**Full ownership:**

- Legal pages: Privacy policy (`privacidad`) and Terms of service (`terminos`)
- Final approval on: product claims, ROI numbers, client testimonials, partner logos
- AI Implementation Service pricing and timeline ranges (if published)

**Delivers to Dev:**

- Approved text for `src/data/legal/privacidad.es.ts` + `en.ts`
- Approved text for `src/data/legal/terminos.es.ts` + `en.ts`
- Approved ROI metrics for product data files
- Written approval before any testimonial or client logo is published

**Does not block Dev for P1:** Dev builds the legal pages with placeholder text. CEO/COO fills content before launch date.

---

## How Layers Merge — The Component Handoff

A component passes through three stages. Each stage is independent.

### Stage 1 — Dev builds the skeleton

```tsx
// ProductHero.tsx — Dev's version (structure only)
export function ProductHero({ content }: { content: ProductPageContent }) {
  return (
    <section>
      <h1>{content.headline}</h1>
      <p>{content.subheadline}</p>
      <a href="/contacto">{content.cta}</a>
    </section>
  );
}
```

The page route, SEO metadata, i18n wiring, and TypeScript types are complete. The component renders — it just looks unstyled.

### Stage 2 — Designer adds the visual layer

Designer reviews the skeleton in the browser (Vercel preview URL), applies Tailwind classes, and either opens a PR or annotates a shared doc. Dev merges:

```tsx
// ProductHero.tsx — after design pass
export function ProductHero({ content }: { content: ProductPageContent }) {
  return (
    <section className="bg-brand-navy py-24 px-8 lg:px-16">
      <h1 className="font-heading text-5xl text-white max-w-3xl">{content.headline}</h1>
      <p className="font-body text-brand-duotone1 mt-6 text-xl">{content.subheadline}</p>
      <a
        href="/contacto"
        className="mt-10 inline-block bg-brand-orange text-white px-8 py-4 font-heading"
      >
        {content.cta}
      </a>
    </section>
  );
}
```

### Stage 3 — Marketing fills the content

Marketing opens `src/data/products/maty.es.ts`, replaces placeholder strings with final copy, commits. No developer work needed.

```ts
// maty.es.ts — Marketing's version
headline: "MATY atiende a tus clientes 24/7 sin costo adicional",
subheadline: "El agente de IA que responde, califica y agenda — mientras tú duermes.",
cta: "Ver cómo funciona",
```

**All three stages are independent.** Stage 2 and 3 can happen in any order.

---

## Coordination Structure

### Weekly Sync (30 min) — all roles

**Agenda:**

1. What each role completed this week (2 min each)
2. What's blocked and why (flag immediately, not at end of week)
3. What's needed from other roles in the next 7 days
4. Vercel preview URLs to review together

**Frequency:** Weekly during P1 and P2. Monthly during P3.

### Async Communication

Use a shared channel (Slack, WhatsApp, or similar) with clear thread conventions:

| Prefix      | Meaning                                  |
| ----------- | ---------------------------------------- |
| `[BLOCK]`   | I cannot proceed without this from you   |
| `[REVIEW]`  | Preview URL ready — please check         |
| `[READY]`   | Content/asset ready for Dev to pull in   |
| `[APPROVE]` | Needs CEO/COO sign-off before publishing |

### GitHub as the Source of Truth

Every content change, design class addition, and route goes through a pull request. This gives everyone visibility into what changed and why.

| Branch type             | Created by                                    | Example                |
| ----------------------- | --------------------------------------------- | ---------------------- |
| `feat/page-name`        | Dev                                           | `feat/homepage-es`     |
| `design/component-name` | Design (or Dev after designer annotates)      | `design/product-hero`  |
| `content/product-name`  | Marketing (or Dev if Marketing can't use Git) | `content/maty-es-copy` |
| `legal/document-name`   | Dev on behalf of CEO/COO                      | `legal/privacy-policy` |

---

## Decision-Making Authority

Clear ownership prevents debates that stall work.

| Decision                           | Owner     | Others consulted                       |
| ---------------------------------- | --------- | -------------------------------------- |
| Which routes to build              | Dev       | All (aligned in architecture.md)       |
| Component HTML structure           | Dev       | Design (to ensure designability)       |
| Visual layout and Tailwind classes | Design    | Dev (feasibility check)                |
| Font and color usage               | Design    | Brand guidelines (already documented)  |
| Copy and messaging                 | Marketing | CEO/COO (claims, product names)        |
| Product claims and ROI numbers     | CEO/COO   | Marketing (phrasing)                   |
| Legal text                         | CEO/COO   | (no consultation required)             |
| API integrations                   | Dev       | CEO/COO (credentials)                  |
| When a page is ready to publish    | Dev       | All roles confirm their layer is ready |

**If there is a conflict** (e.g., design wants a layout that breaks the data structure, or marketing wants text that's technically impossible), Dev has final technical call; CEO/COO has final business call.

---

## What Blocks What — Dependency Map

```
Futura PT font files (Design) ──────────────► Layout can render brand fonts
Logo SVG (Design) ──────────────────────────► Nav and Footer can be built

[These are the only true P1 blockers from Design]

Final product copy (Marketing) ─────────────► Placeholder → Final swap
ROI numbers (CEO/COO) ──────────────────────► Placeholder → Real data
Legal text (CEO/COO) ────────────────────────► Page exists; content pending
Testimonial approval (CEO/COO) ──────────────► `quote` field unlocked per product

[None of these block Dev from building; they only block going live]
```

Everything else in the architecture can be built with placeholders and swapped when ready.

---

## Content Delivery Protocol

Marketing and Legal do not need to know Git to deliver content. Two options:

### Option A — Direct file edit (preferred if comfortable)

Marketing opens `src/data/products/maty.es.ts` in VS Code or the GitHub web editor, edits the text values (only the strings — never the TypeScript structure), commits to a content branch, opens a PR.

### Option B — Document handoff

Marketing fills a Google Doc or Notion page with the copy per field. Dev pastes it into the data files. Add a 24h turnaround SLA so this doesn't create a bottleneck.

**Field map template for Marketing (per product):**

```
Product: MATY
Language: Spanish

hero.headline:       [text here, max 60 chars]
hero.subheadline:    [text here, max 120 chars]
hero.cta:            [button text, max 25 chars]
problem.title:       [text here]
problem.description: [text here, 2–3 sentences]
problem.stats[0]:    value: [e.g. 73%]  label: [e.g. de consultas son repetitivas]
...
```

This gives Marketing a form-like structure without touching code.

---

## Phase Kickoff Checklist

Before starting each priority tier, confirm these inputs are ready:

### Before P1 Build Begins

**From Dev:**

- [ ] Architecture reviewed and agreed by all roles
- [ ] GitHub repo access granted to all contributors
- [ ] Vercel deployment configured (preview URLs working)
- [ ] `.env.example` shared (team fills their `.env.local` copies)

**From Design:**

- [ ] Logo SVG in all variants (horizontal, icon-only, white version)
- [ ] Futura PT WOFF2 files (licensed and delivered)
- [ ] Component design for Nav and Footer (unblocks layout build)

**From Marketing:**

- [ ] Approved headlines for Homepage Hero (ES + EN) — needed to judge page proportion
- [ ] MATY product copy started (EN not needed yet; ES primary)

**From CEO/COO:**

- [ ] HubSpot portal ID and form GUID (needed for contact API)
- [ ] HubSpot Meetings URL (for ContactFunnel embed)
- [ ] ROI data target date confirmed (can be a placeholder at launch if clearly marked)

---

### Before P2 Build Begins

**From Marketing:**

- [ ] All P1 product copy finalized (MATY, Juanito, Roboto — ES + EN)
- [ ] AI Implementation Service copy outline ready
- [ ] At least 3 blog article topics confirmed

**From CEO/COO:**

- [ ] Legal pages content delivered (Privacy + Terms)
- [ ] At least 1 testimonial approved for publication
- [ ] Cybersecurity product definition started (name, positioning)

**From Design:**

- [ ] All P1 component design passes complete
- [ ] Service page component designs ready

---

## Realistic Timeline — First Launch

This assumes Dev starts week 1. All other roles start in parallel.

| Week  | Dev (Benja)                                                                            | Design                                                           | Marketing / Legal                                    |
| ----- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------- |
| **1** | Infrastructure: `[locale]/layout.tsx`, Nav skeleton, Footer skeleton, font placeholder | Designs Nav + Footer, delivers logo SVG                          | Writes MATY hero copy (ES)                           |
| **2** | Homepage skeleton (5 sections), Products overview skeleton                             | Delivers Futura PT files, designs homepage sections              | Writes MATY full copy (ES), starts Juanito           |
| **3** | MATY, Juanito, Roboto product pages (structure + placeholder copy)                     | Applies homepage Tailwind classes, designs product page template | Finishes Juanito + Roboto copy (ES)                  |
| **4** | About, Contact page, SEO baseline (`sitemap.ts`, `robots.ts`, `hreflang`)              | Applies product page Tailwind classes, designs About + Contact   | Writes About copy (ES), Legal drafts                 |
| **5** | Content swap (real copy replaces placeholders), HubSpot wiring                         | Final visual polish, OG image design                             | EN copy pass (MATY + Juanito + Roboto), Legal review |
| **6** | QA pass, performance check, final build                                                | Final approval on all pages                                      | CEO/COO approves ROI numbers, testimonials, Legal    |
| **7** | **Launch**                                                                             |                                                                  |                                                      |

**Note:** Week estimates assume part-time work. Adjust based on each role's availability.

---

## Definition of "Done" Per Page

A page is not done until all three layers are complete. Use this checklist before marking any page as launch-ready:

**Dev layer:**

- [ ] Route exists and renders without errors
- [ ] `generateMetadata()` returns locale-aware title + description
- [ ] `hreflang` alternates present in metadata
- [ ] Open Graph image configured
- [ ] All data props wired (no hardcoded strings in components)
- [ ] Both ES and EN versions render correctly

**Design layer:**

- [ ] All Tailwind classes applied per component
- [ ] Mobile, tablet, desktop layouts tested
- [ ] Brand tokens used (no raw hex values, no hardcoded fonts)
- [ ] Passed visual QA on Vercel preview URL

**Content layer:**

- [ ] All placeholder copy replaced with approved final text (ES + EN)
- [ ] All images in `next/image` with descriptive `alt` text in page locale
- [ ] ROI numbers and claims approved by CEO/COO
- [ ] Testimonials approved (or `quote` field empty and section hidden)

---

## Quality Gates Before Launch

Three checks that must pass before any page goes to production:

### 1. Technical gate (Dev)

```bash
npm run build    # must succeed with zero errors
npm run lint     # zero ESLint errors
npx tsc --noEmit # zero TypeScript errors
```

### 2. SEO gate (Dev + Marketing)

- Google Rich Results Test passes for all pages
- All `<h1>` tags present and unique per page
- No missing `alt` attributes
- `sitemap.xml` lists all public routes
- `robots.txt` does not block crawlers for public pages

### 3. Content gate (Marketing + CEO/COO)

- Zero placeholder strings (`[Placeholder]`, `lorem ipsum`, etc.) in production
- All ROI numbers signed off by CEO/COO in writing
- Legal pages approved and live
- All links tested (no 404s in nav or CTAs)

---

## Handling Changes After Launch

Once the site is live, changes follow this flow:

| Change type                    | Who initiates | Who builds                   | Review needed                        |
| ------------------------------ | ------------- | ---------------------------- | ------------------------------------ |
| Copy correction                | Marketing     | Marketing (data file) or Dev | Dev review (1 day SLA)               |
| New blog article               | Marketing     | Marketing (data file)        | Dev review only if new fields needed |
| New product/service            | CEO/COO       | Dev (full build)             | Design + Marketing + CEO/COO         |
| Route change / redirect        | Dev           | Dev                          | CEO/COO (SEO impact)                 |
| Legal update                   | CEO/COO       | CEO/COO (data file) or Dev   | CEO/COO final approval               |
| Visual update (color, spacing) | Design        | Design → Dev merge           | Dev review                           |
| API credential rotation        | CEO/COO       | Dev                          | Dev only                             |

**Rule:** No one edits the production branch directly. All changes go through a PR — even a one-line copy fix. This creates an audit trail and prevents broken deploys.

---

## Supporting References

| Document                                                                 | What it's for                                                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [architecture.md](./architecture.md)                                     | Full route map, page sections, data layer, component directory, priority-tiered TODOs |
| [SETUP.md](../SETUP.md)                                                  | How to install, configure, and run the project locally                                |
| [cm-brand-guidelines.md](../.claude/skills/cm-brand-guidelines.md)       | Brand colors, typography, logo rules — reference for Design and Dev                   |
| [front-coding-standards.md](../.claude/skills/front-coding-standards.md) | TypeScript/React conventions — reference for Dev                                      |
