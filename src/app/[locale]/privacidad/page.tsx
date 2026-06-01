import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalPage from "@/components/sections/LegalPage";
import { getLegalDocument } from "@/data/legal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Política de Privacidad" : "Privacy Policy",
    alternates: { languages: { es: "/es/privacidad", en: "/en/privacy" } },
  };
}

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const doc = getLegalDocument("privacidad", locale);
  if (!doc) notFound();
  return <LegalPage doc={doc} />;
}
