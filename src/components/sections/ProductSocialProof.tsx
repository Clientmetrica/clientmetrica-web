// src/components/sections/ProductSocialProof.tsx
// S7 – Social proof. Brand-dark bg, single large quote.
// Only rendered when content.quote is defined. CORFO badge can sub in the meantime.

import type { ProductPageContent } from "@/types/product";

interface Props {
  content: ProductPageContent;
}

export default function ProductSocialProof({ content }: Props) {
  if (!content.quote) return null;

  const { text, author, role, company } = content.quote;

  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-heading font-bold text-white text-2xl lg:text-3xl leading-relaxed mb-10">
          &ldquo;{text}&rdquo;
        </p>
        <div>
          <p className="font-body font-medium text-white">{author}</p>
          <p className="font-body text-white/50 text-sm mt-1">
            {role} · {company}
          </p>
        </div>
      </div>
    </section>
  );
}
