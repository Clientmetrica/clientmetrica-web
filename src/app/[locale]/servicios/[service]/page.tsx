import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/sections/ServiceHero";
import ServiceProblem from "@/components/sections/ServiceProblem";
import ServiceApproach from "@/components/sections/ServiceApproach";
import ServicePackage from "@/components/sections/ServicePackage";
import ServiceInvestment from "@/components/sections/ServiceInvestment";
import ServiceFAQ from "@/components/sections/ServiceFAQ";
import ProductCTA from "@/components/sections/ProductCTA";
import { getService, SERVICE_SLUGS } from "@/data/services";
import type { ServiceSlug } from "@/types/service";

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  const content = getService(service as ServiceSlug, locale);
  if (!content) return {};
  return {
    title: content.heroHeadline,
    description: content.heroSubheadline,
    alternates: {
      languages: {
        es: `/es/servicios/${service}`,
        en: `/en/services/${service}`,
      },
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  const content = getService(service as ServiceSlug, locale);
  if (!content) notFound();

  return (
    <>
      <ServiceHero service={content} locale={locale} />
      <ServiceProblem service={content} />
      <ServiceApproach service={content} />
      <ServicePackage service={content} />
      <ServiceInvestment service={content} />
      <ServiceFAQ service={content} />
      <ProductCTA />
    </>
  );
}
