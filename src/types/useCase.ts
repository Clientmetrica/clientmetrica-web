import type { ProductSlug } from "./product";

export type Industry = "mineria" | "retail" | "salud" | "manufactura" | "servicios" | "logistica";

export interface UseCaseResult {
  metric: string;
  label: string;
}

export interface UseCase {
  slug: string;
  industry: Industry;
  industryLabel: string;
  title: string;
  excerpt: string;
  challengeHeadline: string;
  challenge: string;
  solutionHeadline: string;
  solution: string;
  resultsHeadline: string;
  results: UseCaseResult[];
  products: ProductSlug[];
}
