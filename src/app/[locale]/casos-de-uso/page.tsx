import type { Metadata } from "next";
import UseCaseHero from "@/components/sections/UseCaseHero";
import UseCaseListing from "@/components/sections/UseCaseListing";
import ProductCTA from "@/components/sections/ProductCTA";
import { getUseCases } from "@/data/use-cases";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Casos de Uso" : "Use Cases",
    description:
      locale === "es"
        ? "Cómo empresas de distintas industrias automatizan operaciones con Agentes de IA."
        : "How companies across industries automate operations with AI Agents.",
    alternates: { languages: { es: "/es/casos-de-uso", en: "/en/use-cases" } },
  };
}

export default async function CasosDeUsoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const useCases = getUseCases(locale);

  return (
    <>
      <UseCaseHero />
      <UseCaseListing useCases={useCases} locale={locale} />
      <ProductCTA />
    </>
  );
}
