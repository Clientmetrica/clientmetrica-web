import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface CategoryCard {
  name: string;
  tagline: string;
  description: string;
  href: string;
  /** If true, renders as a dimmed placeholder card with no link */
  placeholder?: boolean;
}

interface ProductCategorySectionProps {
  title: string;
  subtitle: string;
  cards: CategoryCard[];
}

export default function ProductCategorySection({
  title,
  subtitle,
  cards,
}: ProductCategorySectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">{title}</h2>
          <p className="mt-2 text-brand-navy/60 max-w-xl leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) =>
            card.placeholder ? (
              <div
                key={card.name}
                className="p-6 rounded-xl border border-dashed border-gray-200 bg-gray-50 opacity-60"
              >
                <p className="text-xs font-semibold text-brand-navy/40 uppercase tracking-wider mb-2">
                  {card.tagline}
                </p>
                <h3 className="font-heading text-lg font-bold text-brand-navy/40 mb-2">
                  {card.name}
                </h3>
                <p className="text-sm text-brand-navy/40 leading-relaxed">{card.description}</p>
              </div>
            ) : (
              <Link
                key={card.name}
                href={card.href}
                className="group block p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-brand-orange/20 transition-all"
              >
                <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-wider mb-2">
                  {card.tagline}
                </p>
                <h3 className="font-heading text-lg font-bold text-brand-navy mb-2">{card.name}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed line-clamp-2">
                  {card.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-brand-orange text-sm font-semibold group-hover:gap-2 transition-all">
                  {card.href.includes("/contacto") || card.href.includes("/contact")
                    ? "Contactar"
                    : "Ver más"}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
