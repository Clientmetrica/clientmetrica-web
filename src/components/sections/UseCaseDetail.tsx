import Link from "next/link";
import type { UseCase } from "@/types/useCase";

interface UseCaseDetailProps {
  useCase: UseCase;
  locale: string;
}

export default function UseCaseDetail({ useCase, locale }: UseCaseDetailProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Challenge */}
      <section>
        <h2 className="font-heading text-xl font-bold text-brand-navy mb-4">
          {useCase.challengeHeadline}
        </h2>
        <p className="text-base text-brand-navy/70 leading-relaxed">{useCase.challenge}</p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="font-heading text-xl font-bold text-brand-navy mb-4">
          {useCase.solutionHeadline}
        </h2>
        <p className="text-base text-brand-navy/70 leading-relaxed">{useCase.solution}</p>
      </section>

      {/* Results */}
      <section>
        <h2 className="font-heading text-xl font-bold text-brand-navy mb-6">
          {useCase.resultsHeadline}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {useCase.results.map((result) => (
            <div key={result.label} className="bg-gray-50 rounded-xl p-4 text-center">
              <p className="font-heading text-2xl font-bold text-brand-orange">{result.metric}</p>
              <p className="text-xs text-brand-navy/60 mt-1 leading-tight">{result.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products used */}
      <section>
        <h2 className="font-heading text-base font-bold text-brand-navy mb-3">
          {locale === "es" ? "Agentes utilizados" : "Agents used"}
        </h2>
        <div className="flex gap-2">
          {useCase.products.map((slug) => (
            <Link
              key={slug}
              href={`/${locale}/productos/${slug}`}
              className="text-sm font-semibold bg-brand-navy text-white px-3 py-1.5 rounded-lg hover:bg-brand-navy/80 transition-colors"
            >
              {slug === "maty" ? "MATY" : slug.charAt(0).toUpperCase() + slug.slice(1)}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
