# Clientmetrica Web — Generated Templates

Generated for: `clientmetrica-web` (Next.js 14, TypeScript, Tailwind v4, next-intl)

---

## What's here

```
src/
├── types/
│   └── product.ts                    ← Shared TypeScript types for all product pages
│
├── data/products/
│   ├── index.ts                      ← Content loader (slug + locale → content)
│   ├── maty.es.ts                    ← MATY copy in Spanish (placeholder — fill in)
│   └── maty.en.ts                    ← MATY copy in English (placeholder — fill in)
│
├── app/
│   └── [locale]/
│       ├── productos/[product]/
│       │   └── page.tsx              ← Shared product page template
│       ├── contacto/
│       │   └── page.tsx              ← Contact page (server wrapper)
│       └── api/contact/
│           └── route.ts              ← HubSpot form submission API route
│
└── components/sections/
    ├── ProductHero.tsx               ← S1 Hero
    ├── ProductProblem.tsx            ← S2 Problem statement
    ├── ProductHowItWorks.tsx         ← S3 How it works
    ├── ProductCapabilities.tsx       ← S4 Capabilities
    ├── ProductROI.tsx                ← S5 ROI / metrics
    ├── ProductIntegrations.tsx       ← S6 Integrations (shared)
    ├── ProductSocialProof.tsx        ← S7 Social proof (optional)
    ├── ProductCTA.tsx                ← S8 Bottom CTA
    └── ContactFunnel.tsx             ← 3-step contact funnel (client component)
```

---

## How to drop these into the repo

1. **Copy the files** into your `clientmetrica-web` repo, preserving the path structure.

2. **Add Juanito and Roboto content files.** Duplicate `maty.es.ts` → `juanito.es.ts` etc.,
   then uncomment the imports in `src/data/products/index.ts`.

3. **Wire up HubSpot.** Add to `.env.local`:

   ```
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
   HUBSPOT_FORM_GUID=your_form_guid
   HUBSPOT_FORMS_API_KEY=your_private_app_token
   ```

   Then in `ContactFunnel.tsx`, replace the `data-src` URL with your actual HubSpot Meetings link
   and uncomment the `<Script>` tag (requires `import Script from "next/script"`).

4. **Replace icon placeholders.** In `ProductCapabilities.tsx`, swap the `<span>` icon
   placeholders with Lucide icons:

   ```tsx
   import { Zap, GitMerge, ShieldCheck } from "lucide-react";
   // then: <Zap className="w-5 h-5 text-brand-orange" />
   ```

5. **Add integration logos.** Drop SVG files into `public/logos/` and update
   `ProductIntegrations.tsx` to use `<img>` tags.

6. **Fill in real ROI numbers.** The metrics in `maty.es.ts` / `maty.en.ts` are placeholders.
   CEO/Marketing must approve before launch.

7. **Unlock social proof.** Uncomment the `quote` object in the product data files once
   a real testimonial is approved.

---

## Adding a new product page

The template is already generic. To add a new product:

1. Create `src/data/products/[slug].es.ts` and `[slug].en.ts`
2. Add the slug to the `PRODUCTS` record in `src/data/products/index.ts`
3. Add `{ product: "slug" }` to `generateStaticParams()` in the page template
4. The URL `/es/productos/[slug]` and `/en/productos/[slug]` will work automatically

---

## Open TODOs (flagged in code)

- `// TODO: Replace all placeholder strings with final copy from Marketing`
- `// TODO: Replace with real numbers from CEO — must be defensible before launch`
- `// TODO: swap <span> for <img> in ProductIntegrations`
- `// TODO: swap icon placeholders with lucide-react icons`
- `// TODO: add juanito/roboto content files once copy is ready`
- `// TODO: load HubSpot Meetings script via next/script`
- `// TODO: Add real testimonial when first client approves quote`
