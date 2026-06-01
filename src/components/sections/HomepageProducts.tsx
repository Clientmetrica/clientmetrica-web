import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { getProductContent } from "@/data/products";
import type { ProductSlug } from "@/types/product";

const AGENTS: { slug: ProductSlug; accent: string }[] = [
  { slug: "maty", accent: "border-brand-orange" },
  { slug: "juanito", accent: "border-brand-sky" },
  { slug: "roboto", accent: "border-brand-duotone2" },
];

interface HomepageProductsProps {
  locale: string;
}

export default function HomepageProducts({ locale }: HomepageProductsProps) {
  const t = useTranslations("homepage.productsSection");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            {t("title")}
          </h2>
          <p className="mt-4 text-brand-navy/60 max-w-xl mx-auto text-base leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENTS.map(({ slug, accent }) => {
            const product = getProductContent(slug, locale);
            if (!product) return null;

            return (
              <Link
                key={slug}
                href={`/${locale}/productos/${slug}`}
                className={`group block p-6 rounded-xl border-t-4 ${accent} bg-white border border-gray-100 hover:shadow-md transition-shadow`}
              >
                <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-2">
                  {product.heroTagline}
                </p>
                <h3 className="font-heading text-xl font-bold text-brand-navy mb-3">
                  {slug === "maty" ? "MATY" : slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed line-clamp-3">
                  {product.heroSubheadline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  {locale === "es" ? "Conocer" : "Learn more"}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
