// src/app/[locale]/productos/[product]/page.tsx
//
// Shared template for MATY, Juanito, and Roboto.
// Each product passes its own `ProductPageContent` via the data files
// in src/data/products/. Layout and components are shared.
//
// Sections rendered:
//   S1 Hero → S2 Problem → S3 How it works → S4 Capabilities
//   → S5 ROI metrics → S6 Integrations → S7 Social proof → S8 CTA

import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProductHero from "@/components/sections/ProductHero";
import ProductProblem from "@/components/sections/ProductProblem";
import ProductHowItWorks from "@/components/sections/ProductHowItWorks";
import ProductCapabilities from "@/components/sections/ProductCapabilities";
import ProductROI from "@/components/sections/ProductROI";
import ProductIntegrations from "@/components/sections/ProductIntegrations";
import ProductSocialProof from "@/components/sections/ProductSocialProof";
import ProductCTA from "@/components/sections/ProductCTA";

import { getProductContent } from "@/data/products";
import type { ProductSlug } from "@/types/product";

// ─── Static params ──────────────────────────────────────────────────────────
// Tell Next.js which [product] slugs to pre-render at build time.
export async function generateStaticParams() {
  return [{ product: "maty" }, { product: "juanito" }, { product: "roboto" }];
}

// ─── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { locale: string; product: string };
}): Promise<Metadata> {
  const content = getProductContent(params.product as ProductSlug, params.locale);
  if (!content) return {};

  return {
    title: `${content.slug.toUpperCase()} | Clientmetrica`,
    description: content.heroSubheadline,
    openGraph: {
      title: `${content.slug.toUpperCase()} — ${content.heroHeadline}`,
      description: content.heroSubheadline,
    },
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function ProductPage({ params }: { params: { locale: string; product: string } }) {
  const content = getProductContent(params.product as ProductSlug, params.locale);

  // 404 for unknown slugs (e.g. typos, crawlers)
  if (!content) notFound();

  return (
    <main>
      {/* S1 – Hero */}
      <ProductHero content={content} />

      {/* S2 – Problem statement */}
      <ProductProblem content={content} />

      {/* S3 – How it works (anchor target from Hero secondary CTA) */}
      <section id="how-it-works">
        <ProductHowItWorks content={content} />
      </section>

      {/* S4 – Capabilities */}
      <ProductCapabilities content={content} />

      {/* S5 – ROI / metrics */}
      <ProductROI content={content} />

      {/* S6 – Integrations (shared across all products) */}
      <ProductIntegrations />

      {/* S7 – Social proof (renders nothing if no quote provided) */}
      {content.quote && <ProductSocialProof content={content} />}

      {/* S8 – Bottom CTA */}
      <ProductCTA />
    </main>
  );
}
