// src/components/sections/ProductROI.tsx
// S5 – ROI / metrics. Orange bg, 3 large stat blocks.
// Numbers must come from CEO/Marketing and be defensible before launch.

import type { ProductPageContent } from "@/types/product";

interface Props {
  content: ProductPageContent;
}

export default function ProductROI({ content }: Props) {
  return (
    <section className="bg-brand-orange py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-16 text-center">
          {content.roiHeadline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p className="font-heading font-bold text-white text-6xl lg:text-7xl mb-3">
                {m.value}
              </p>
              <p className="font-body text-white/80 text-lg">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
