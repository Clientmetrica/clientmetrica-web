import type { UseCase, Industry } from "@/types/useCase";
import { mineriaEs } from "./mineria.es";
import { mineriaEn } from "./mineria.en";

// ES slug → EN slug mapping for locale-switching
const SLUG_MAP: Record<string, string> = {
  mineria: "mining",
  mining: "mineria",
};

const USE_CASES: Record<string, Record<string, UseCase>> = {
  mineria: { es: mineriaEs, en: mineriaEn },
  mining: { es: mineriaEs, en: mineriaEn },
};

export function getUseCases(locale: string, industry?: Industry): UseCase[] {
  const seen = new Set<string>();
  const all = Object.values(USE_CASES)
    .map((localeMap) => localeMap[locale] ?? localeMap["es"])
    .filter((uc): uc is UseCase => {
      if (!uc || seen.has(uc.slug)) return false;
      seen.add(uc.slug);
      return !industry || uc.industry === industry;
    });
  return all;
}

export function getUseCase(slug: string, locale: string): UseCase | null {
  const entry = USE_CASES[slug];
  if (!entry) return null;
  return entry[locale] ?? entry["es"] ?? null;
}

export function getUseCaseSlugs(): { slug: string; locale: string }[] {
  return [
    { slug: "mineria", locale: "es" },
    { slug: "mining", locale: "en" },
  ];
}

export { SLUG_MAP };
