import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ProductsOverviewHero from "@/components/sections/ProductsOverviewHero";
import ProductCategorySection from "@/components/sections/ProductCategorySection";
import ProductCTA from "@/components/sections/ProductCTA";
import { getProductContent } from "@/data/products";
import type { ProductSlug } from "@/types/product";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Soluciones" : "Solutions",
    description:
      locale === "es"
        ? "Agentes de IA y servicios para empresas que quieren crecer sin crecer en equipo."
        : "AI Agents and services for companies that want to grow without growing their team.",
  };
}

const AI_AGENT_SLUGS: ProductSlug[] = ["maty", "juanito", "roboto"];

export default async function ProductsOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products-overview" });

  const agentCards = AI_AGENT_SLUGS.map((slug) => {
    const product = getProductContent(slug, locale)!;
    return {
      name: slug === "maty" ? "MATY" : slug.charAt(0).toUpperCase() + slug.slice(1),
      tagline: product.heroTagline,
      description: product.heroSubheadline,
      href: `/${locale}/productos/${slug}`,
    };
  });

  const cybersecurityCards = [
    {
      name: locale === "es" ? "Ciberseguridad" : "Cybersecurity",
      tagline: locale === "es" ? "Próximamente" : "Coming soon",
      description: t("cybersecuritySection.placeholder"),
      href: "#",
      placeholder: true as const,
    },
  ];

  return (
    <>
      <ProductsOverviewHero />

      <ProductCategorySection
        title={t("agentsSection.title")}
        subtitle={t("agentsSection.subtitle")}
        cards={agentCards}
      />

      <ProductCategorySection
        title={t("cybersecuritySection.title")}
        subtitle={t("cybersecuritySection.subtitle")}
        cards={cybersecurityCards}
      />

      <ProductCTA />
    </>
  );
}
