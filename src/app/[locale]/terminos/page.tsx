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
    title: locale === "es" ? "Términos y Condiciones" : "Terms and Conditions",
    alternates: { languages: { es: "/es/terminos", en: "/en/terms" } },
  };
}

export default async function TerminosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const doc = getLegalDocument("terminos", locale);
  if (!doc) notFound();
  return <LegalPage doc={doc} />;
}
