import Link from "next/link";
import type { ServiceContent } from "@/types/service";

interface ServiceHeroProps {
  service: ServiceContent;
  locale: string;
}

export default function ServiceHero({ service, locale }: ServiceHeroProps) {
  return (
    <section className="bg-brand-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-4">
            {service.heroTagline}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight">
            {service.heroHeadline}
          </h1>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
            {service.heroSubheadline}
          </p>
          <div className="mt-10">
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors text-sm"
            >
              {service.heroCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
