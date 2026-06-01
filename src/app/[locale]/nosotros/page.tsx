import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutHero from "@/components/sections/AboutHero";
import AboutMission from "@/components/sections/AboutMission";
import AboutValues from "@/components/sections/AboutValues";
import ProductCTA from "@/components/sections/ProductCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.hero" });

  return {
    title: locale === "es" ? "Nosotros" : "About",
    description: t("subheadline"),
    alternates: {
      languages: {
        es: "/es/nosotros",
        en: "/en/about",
      },
    },
  };
}

export default async function NosotrosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <AboutHero />
      <AboutMission locale={locale} />
      {/* AboutTeam — deferred to v2 once team photos are ready */}
      <AboutValues locale={locale} />
      <ProductCTA />
    </>
  );
}
