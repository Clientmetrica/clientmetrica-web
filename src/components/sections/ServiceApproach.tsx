import type { ServiceContent } from "@/types/service";

interface ServiceApproachProps {
  service: ServiceContent;
}

export default function ServiceApproach({ service }: ServiceApproachProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
            {service.approachHeadline}
          </h2>
          <p className="mt-3 text-brand-navy/60 leading-relaxed">{service.approachSubheadline}</p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-5 top-8 bottom-8 w-px bg-brand-orange/20 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {service.steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-heading font-bold text-sm z-10">
                  {step.number}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-base font-bold text-brand-navy">
                      {step.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-brand-navy/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
