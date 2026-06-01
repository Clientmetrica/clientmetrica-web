import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogArticle } from "@/types/article";

const CATEGORY_COLORS: Record<string, string> = {
  tendencias: "bg-brand-sky/10 text-brand-sky",
  tutorial: "bg-brand-duotone2/10 text-brand-duotone2",
  "caso-exito": "bg-brand-orange/10 text-brand-orange",
  producto: "bg-brand-navy/10 text-brand-navy",
};

interface BlogListingProps {
  articles: BlogArticle[];
  locale: string;
}

export default function BlogListing({ articles, locale }: BlogListingProps) {
  const t = useTranslations("blog");

  if (articles.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-navy/50">{t("empty")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const categoryColor = CATEGORY_COLORS[article.category] ?? "bg-gray-100 text-gray-600";
            const formattedDate = new Date(article.date).toLocaleDateString(
              locale === "es" ? "es-CL" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            );

            return (
              <Link
                key={article.slug}
                href={`/${locale}/blog/${article.slug}`}
                className="group block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Placeholder image area */}
                <div className="h-40 bg-gradient-to-br from-brand-navy to-brand-duotone2 flex items-center justify-center">
                  <span className="text-white/30 text-xs font-medium uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColor}`}
                    >
                      {t(`categories.${article.category}`)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-navy/40">
                      <Clock className="w-3 h-3" />
                      {article.readTime} min
                    </span>
                  </div>

                  <h2 className="font-heading text-base font-bold text-brand-navy leading-snug mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-brand-navy/60 leading-relaxed line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-navy/40">{formattedDate}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-brand-orange group-hover:gap-2 transition-all">
                      {t("readMore")}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
