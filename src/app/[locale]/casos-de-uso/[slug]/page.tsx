import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import UseCaseDetail from "@/components/sections/UseCaseDetail";
import ProductCTA from "@/components/sections/ProductCTA";
import { getUseCase, getUseCaseSlugs } from "@/data/use-cases";

export async function generateStaticParams() {
  return getUseCaseSlugs().map(({ slug, locale }) => ({ slug, locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const uc = getUseCase(slug, locale);
  if (!uc) return {};
  return {
    title: uc.title,
    description: uc.excerpt,
  };
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const uc = getUseCase(slug, locale);
  if (!uc) notFound();

  return (
    <>
      <header className="bg-brand-navy py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/casos-de-uso`}
            className="inline-flex items-center gap-1 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === "es" ? "Todos los casos" : "All cases"}
          </Link>
          <span className="block text-brand-orange text-xs font-semibold uppercase tracking-widest mb-2">
            {uc.industryLabel}
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-snug">
            {uc.title}
          </h1>
          <p className="mt-4 text-white/60 leading-relaxed">{uc.excerpt}</p>
        </div>
      </header>
      <UseCaseDetail useCase={uc} locale={locale} />
      <ProductCTA />
    </>
  );
}
