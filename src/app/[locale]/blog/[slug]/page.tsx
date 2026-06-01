import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleHeader from "@/components/sections/BlogArticleHeader";
import BlogArticleContent from "@/components/sections/BlogArticleContent";
import ProductCTA from "@/components/sections/ProductCTA";
import { getArticle, getArticleSlugs } from "@/data/blog";

export async function generateStaticParams() {
  return getArticleSlugs().map(({ slug, locale }) => ({ slug, locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug, locale);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticle(slug, locale);
  if (!article) notFound();

  return (
    <>
      <BlogArticleHeader article={article} locale={locale} />
      <BlogArticleContent article={article} />
      <ProductCTA />
    </>
  );
}
