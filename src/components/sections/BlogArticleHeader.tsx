import { Clock, Calendar } from "lucide-react";
import type { BlogArticle } from "@/types/article";

interface BlogArticleHeaderProps {
  article: BlogArticle;
  locale: string;
}

export default function BlogArticleHeader({ article, locale }: BlogArticleHeaderProps) {
  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "es" ? "es-CL" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <header className="bg-brand-navy py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4">
          {article.category.replace("-", " ")}
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-snug">
          {article.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-white/50 text-sm">
          <span>
            {article.author} · {article.authorRole}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime} min
          </span>
        </div>
      </div>
    </header>
  );
}
