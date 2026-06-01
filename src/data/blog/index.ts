import type { BlogArticle, ArticleCategory } from "@/types/article";
import { aiAgentsIntroEs } from "./ai-agents-intro.es";
import { aiAgentsIntroEn } from "./ai-agents-intro.en";

// Slug map: ES slug → EN slug (and reverse for lookup)
const SLUG_MAP: Record<string, string> = {
  "que-son-los-agentes-de-ia": "what-are-ai-agents",
  "what-are-ai-agents": "que-son-los-agentes-de-ia",
};

const ARTICLES: Record<string, Record<string, BlogArticle>> = {
  "que-son-los-agentes-de-ia": { es: aiAgentsIntroEs, en: aiAgentsIntroEn },
  "what-are-ai-agents": { es: aiAgentsIntroEs, en: aiAgentsIntroEn },
};

export function getArticles(locale: string, category?: ArticleCategory): BlogArticle[] {
  const seen = new Set<string>();
  const all = Object.values(ARTICLES)
    .map((localeMap) => localeMap[locale] ?? localeMap["es"])
    .filter((a): a is BlogArticle => {
      if (!a || seen.has(a.slug)) return false;
      seen.add(a.slug);
      return !category || a.category === category;
    });
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(slug: string, locale: string): BlogArticle | null {
  const entry = ARTICLES[slug];
  if (!entry) return null;
  return entry[locale] ?? entry["es"] ?? null;
}

export function getArticleSlugs(): { slug: string; locale: string }[] {
  return [
    { slug: "que-son-los-agentes-de-ia", locale: "es" },
    { slug: "what-are-ai-agents", locale: "en" },
  ];
}

export { SLUG_MAP };
