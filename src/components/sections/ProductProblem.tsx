// src/components/sections/ProductProblem.tsx
// S2 – Problem statement. White bg, 3-column stat cards.

import type { ProductPageContent } from "@/types/product";

interface Props {
  content: ProductPageContent;
}

export default function ProductProblem({ content }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-brand-navy text-3xl lg:text-4xl mb-16 text-center">
          {content.problemHeadline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.problems.map((p, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-8 hover:border-brand-orange/30 transition-colors"
            >
              <p className="font-heading font-bold text-brand-orange text-5xl mb-2">{p.stat}</p>
              <p className="font-heading font-bold text-brand-navy text-lg mb-3">{p.label}</p>
              <p className="font-body text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
