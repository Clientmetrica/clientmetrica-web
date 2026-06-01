// src/components/sections/ProductHero.tsx
// S1 – Hero section. Brand: navy bg, orange headline, two CTAs.

import Link from "next/link";
import { useLocale } from "next-intl";
import type { ProductPageContent } from "@/types/product";

interface Props {
  content: ProductPageContent;
}

export default function ProductHero({ content }: Props) {
  const locale = useLocale();

  return (
    <section className="bg-brand-navy min-h-135 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          {/* Category pill */}
          <span className="inline-block text-brand-orange text-sm font-body font-medium uppercase tracking-widest mb-6">
            {content.heroTagline}
          </span>

          {/* Product name as eyebrow — always ALL CAPS per brand guidelines */}
          <p className="text-brand-orange font-heading font-bold text-5xl lg:text-7xl mb-4 tracking-tight">
            {content.slug.toUpperCase()}
          </p>

          {/* Main headline */}
          <h1 className="font-heading font-bold text-white text-2xl lg:text-3xl leading-snug mb-6">
            {content.heroHeadline}
          </h1>

          {/* Subheadline */}
          <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
            {content.heroSubheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contacto`}
              className="bg-brand-orange text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              {content.heroPrimaryCta}
            </Link>
            <a
              href="#how-it-works"
              className="border border-white/30 text-white font-body px-8 py-4 rounded-lg hover:border-white/60 transition-colors"
            >
              {content.heroSecondaryCta}
            </a>
          </div>
        </div>

        {/* Right — brand robot illustration placeholder */}
        {/* TODO: replace with actual brand robot SVG/image once design delivers it */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-72 h-72 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
            <span className="text-brand-orange/40 font-heading text-sm text-center px-8">
              Brand robot illustration
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
