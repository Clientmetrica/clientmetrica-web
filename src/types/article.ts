export type ArticleCategory = "tendencias" | "tutorial" | "caso-exito" | "producto";

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string; // ISO date "2026-05-01"
  category: ArticleCategory;
  readTime: number; // minutes
  /** Plain text body — double newline separates paragraphs */
  content: string;
  featured?: boolean;
}
