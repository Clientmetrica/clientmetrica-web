# SEO Standards — Clientmetrica Web

## Next.js metadata setup

Use the App Router `generateMetadata` pattern — never use the `<Head>` tag from next/head.

```typescript
// src/app/[locale]/page.tsx
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isEs = params.locale === "es";
  return {
    title: isEs
      ? "Clientmetrica — Agentes de IA para empresas"
      : "Clientmetrica — AI Agents for enterprise",
    description: isEs
      ? "Automatización e inteligencia artificial para empresas medianas y grandes."
      : "AI agents and automation for medium and large enterprises.",
    openGraph: {
      title: "Clientmetrica",
      description: "...",
      url: "https://clientmetrica.com",
      siteName: "Clientmetrica",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
      locale: params.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Clientmetrica",
      description: "...",
      images: ["/og-image.jpg"],
    },
  };
}
```

## Title tag rules

- Format: `Page Name — Clientmetrica`
- Max 60 characters
- Include primary keyword naturally
- Each page must have a unique title

## Meta description rules

- Max 155 characters
- Lead with the benefit, end with a soft CTA
- Unique per page — never duplicate

## Heading hierarchy

- One `<h1>` per page — matches the page's primary topic
- `<h2>` for major sections
- `<h3>` for subsections within `<h2>`
- Never skip levels (no h1 → h3)
- Headings should contain natural keywords, not be stuffed

## URL structure

```text
clientmetrica.com/es/              ← Homepage (Spanish)
clientmetrica.com/en/              ← Homepage (English)
clientmetrica.com/es/productos/maty
clientmetrica.com/es/productos/juanito
clientmetrica.com/es/productos/roboto
clientmetrica.com/es/nosotros
clientmetrica.com/es/contacto
```

- URLs in Spanish for `/es/` routes (e.g. `nosotros`, not `about`)
- URLs in English for `/en/` routes (e.g. `about`, not `nosotros`)
- Lowercase, hyphen-separated, no special characters

## Sitemap

Generate automatically using `next-sitemap`:

```bash
npm install next-sitemap
```

Configure in `next-sitemap.config.js` to include both locales and exclude draft/private routes.

## Robots.txt

```text
User-agent: *
Allow: /
Sitemap: https://clientmetrica.com/sitemap.xml
```

## Image SEO

- All `<Image>` components must have descriptive `alt` text in the page's locale
- Use Next.js `<Image>` — never `<img>` — for automatic optimization
- OG image: 1200×630px, saved at `public/og-image.jpg`

## hreflang (bilingual)

Add hreflang tags to signal language alternates to search engines:

```typescript
alternates: {
  canonical: `https://clientmetrica.com/${params.locale}`,
  languages: {
    "es": "https://clientmetrica.com/es",
    "en": "https://clientmetrica.com/en",
  },
},
```

## Core Web Vitals targets

- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms
- Use `next/image` and `next/font` to hit these automatically
