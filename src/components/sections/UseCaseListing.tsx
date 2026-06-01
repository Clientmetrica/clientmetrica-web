import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { UseCase } from "@/types/useCase";

const INDUSTRY_COLORS: Record<string, string> = {
  mineria: "border-brand-orange",
  retail: "border-brand-sky",
  salud: "border-brand-duotone2",
  manufactura: "border-brand-duotone1",
  servicios: "border-brand-navy",
  logistica: "border-brand-sky",
};

interface UseCaseListingProps {
  useCases: UseCase[];
  locale: string;
}

export default function UseCaseListing({ useCases, locale }: UseCaseListingProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc) => {
            const borderColor = INDUSTRY_COLORS[uc.industry] ?? "border-brand-orange";
            return (
              <Link
                key={uc.slug}
                href={`/${locale}/casos-de-uso/${uc.slug}`}
                className={`group block p-6 rounded-xl border-l-4 ${borderColor} bg-white border border-gray-100 hover:shadow-md transition-shadow`}
              >
                <span className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wider">
                  {uc.industryLabel}
                </span>
                <h2 className="font-heading text-lg font-bold text-brand-navy mt-2 mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                  {uc.title}
                </h2>
                <p className="text-sm text-brand-navy/60 leading-relaxed line-clamp-2 mb-4">
                  {uc.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {uc.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium bg-brand-navy/5 text-brand-navy px-2 py-0.5 rounded-full"
                      >
                        {p === "maty" ? "MATY" : p.charAt(0).toUpperCase() + p.slice(1)}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:gap-2 transition-all">
                    {locale === "es" ? "Ver caso" : "View case"}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
