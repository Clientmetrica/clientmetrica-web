// src/components/sections/ProductHowItWorks.tsx
// S3 – How it works. Dark bg, numbered steps horizontal stepper.

import type { ProductPageContent } from "@/types/product";

interface Props {
  content: ProductPageContent;
}

export default function ProductHowItWorks({ content }: Props) {
  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-20 text-center">
          {content.howItWorksHeadline}
        </h2>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-px bg-brand-orange/30" />

          {content.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Step number circle */}
              <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center mb-6 relative z-10">
                <span className="font-heading font-bold text-white text-lg">{step.number}</span>
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">{step.title}</h3>
              <p className="font-body text-white/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
