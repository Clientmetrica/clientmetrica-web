// src/components/sections/ProductCapabilities.tsx
// S4 – Capabilities. White bg, 2×3 card grid.
// Icons: using text emoji as stand-ins until lucide-react icons are wired up.
// TODO: replace icon strings with <LucideIcon> components from lucide-react.

import type { ProductPageContent } from "@/types/product";

interface Props {
  content: ProductPageContent;
}

export default function ProductCapabilities({ content }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-brand-navy text-3xl lg:text-4xl mb-16 text-center">
          {content.capabilitiesHeadline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-8 border border-transparent hover:border-brand-orange/20 transition-colors"
            >
              {/* Icon placeholder — swap with <Icon name={cap.icon} /> */}
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-5">
                <span className="text-brand-orange text-sm font-mono">{cap.icon}</span>
              </div>
              <h3 className="font-heading font-bold text-brand-navy text-lg mb-2">{cap.title}</h3>
              <p className="font-body text-gray-600 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
