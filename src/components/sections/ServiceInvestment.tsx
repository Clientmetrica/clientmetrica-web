import { Clock, TrendingUp } from "lucide-react";
import type { ServiceContent } from "@/types/service";

interface ServiceInvestmentProps {
  service: ServiceContent;
}

export default function ServiceInvestment({ service }: ServiceInvestmentProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
          {service.investmentHeadline}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <div className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wide mb-1">
                Plazo típico
              </p>
              <p className="font-heading text-base font-bold text-brand-navy">
                {service.typicalTimeline}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wide mb-1">
                Inversión
              </p>
              <p className="text-sm text-brand-navy/70 leading-relaxed">{service.investmentNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
