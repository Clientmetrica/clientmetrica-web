import { CheckCircle2 } from "lucide-react";
import type { ServiceContent } from "@/types/service";

interface ServicePackageProps {
  service: ServiceContent;
}

export default function ServicePackage({ service }: ServicePackageProps) {
  return (
    <section className="py-16 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            {service.packageHeadline}
          </h2>
          <p className="mt-3 text-white/60 leading-relaxed">{service.packageSubheadline}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          {service.packageItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-brand-orange mt-0.5" />
              <span className="text-sm text-white/80 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
