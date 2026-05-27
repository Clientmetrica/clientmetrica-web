// src/data/products/index.ts
//
// Central loader for product page content.
// Each product has its own file per locale (es / en).
// When you have real copy, fill in the per-product files.

import type { ProductPageContent, ProductSlug } from "@/types/product";
import { matyEs } from "./maty.es";
import { matyEn } from "./maty.en";
// TODO: add juanito.es, juanito.en, roboto.es, roboto.en once copy is ready

type LocaleMap = Record<string, ProductPageContent>;

const PRODUCTS: Record<ProductSlug, LocaleMap> = {
  maty: { es: matyEs, en: matyEn },
  // juanito: { es: juanitoEs, en: juanitoEn },
  // roboto:  { es: robotoEs,  en: robotoEn  },

  // Temporary fallbacks so the route doesn't 404 during dev
  juanito: { es: matyEs, en: matyEn },
  roboto: { es: matyEs, en: matyEn },
};

/**
 * Returns the product content for a given slug + locale.
 * Falls back to "es" if the requested locale isn't available.
 * Returns null if the slug itself doesn't exist → triggers notFound().
 */
export function getProductContent(slug: ProductSlug, locale: string): ProductPageContent | null {
  const product = PRODUCTS[slug];
  if (!product) return null;
  return product[locale] ?? product["es"] ?? null;
}
