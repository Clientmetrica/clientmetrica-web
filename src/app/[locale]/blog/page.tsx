import type { Metadata } from "next";
import BlogHero from "@/components/sections/BlogHero";
import BlogListing from "@/components/sections/BlogListing";
import { getArticles } from "@/data/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "es" ? "Blog" : "Blog",
    description:
      locale === "es"
        ? "Recursos, tendencias y casos de uso sobre IA para empresas."
        : "Resources, trends, and AI use cases for enterprises.",
    alternates: { languages: { es: "/es/blog", en: "/en/blog" } },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const articles = getArticles(locale);

  return (
    <>
      <BlogHero />
      <BlogListing articles={articles} locale={locale} />
    </>
  );
}
