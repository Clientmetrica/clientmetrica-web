import type { LegalDocument } from "@/types/legal";
import { privacidadEs } from "./privacidad.es";
import { privacidadEn } from "./privacidad.en";
import { terminosEs } from "./terminos.es";
import { terminosEn } from "./terminos.en";

type LegalSlug = "privacidad" | "terminos";
type LocaleMap = Record<string, LegalDocument>;

const LEGAL: Record<LegalSlug, LocaleMap> = {
  privacidad: { es: privacidadEs, en: privacidadEn },
  terminos: { es: terminosEs, en: terminosEn },
};

export function getLegalDocument(slug: LegalSlug, locale: string): LegalDocument | null {
  const doc = LEGAL[slug];
  if (!doc) return null;
  return doc[locale] ?? doc["es"] ?? null;
}
