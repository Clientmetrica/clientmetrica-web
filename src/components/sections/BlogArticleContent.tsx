import type { BlogArticle } from "@/types/article";

interface BlogArticleContentProps {
  article: BlogArticle;
}

export default function BlogArticleContent({ article }: BlogArticleContentProps) {
  // Split content on double newlines into paragraphs; **text** → bold
  const paragraphs = article.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg prose-slate max-w-none">
        {paragraphs.map((para, i) => {
          const isBold = para.startsWith("**") && para.includes("**", 2);
          if (isBold) {
            const text = para.replace(/\*\*(.*?)\*\*/g, "$1");
            return (
              <h3 key={i} className="font-heading text-lg font-bold text-brand-navy mt-8 mb-3">
                {text}
              </h3>
            );
          }
          return (
            <p key={i} className="text-base text-brand-navy/70 leading-relaxed mb-4">
              {para}
            </p>
          );
        })}
      </div>
    </div>
  );
}
