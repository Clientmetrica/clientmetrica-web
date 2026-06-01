import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HomepageHero from "@/components/sections/HomepageHero";
import HomepageProducts from "@/components/sections/HomepageProducts";
import HomepageWhy from "@/components/sections/HomepageWhy";
import HomepageSocialProof from "@/components/sections/HomepageSocialProof";
import HomepageCTA from "@/components/sections/HomepageCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "homepage.hero" });

  return {
    title: locale === "es" ? "Inicio" : "Home",
    description: t("subheadline"),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <HomepageHero locale={locale} />
      <HomepageProducts locale={locale} />
      <HomepageWhy locale={locale} />
      {/* quote prop is undefined until first client approves — component renders null */}
      <HomepageSocialProof />
      <HomepageCTA locale={locale} />
    </>
  );
}
