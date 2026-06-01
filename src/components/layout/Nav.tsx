"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Translates known path segments when switching locales.
// Slugs not in this map are kept as-is (e.g. product names, blog slugs).
const SEGMENT_MAP: Record<string, Record<string, string>> = {
  nosotros: { en: "about" },
  about: { es: "nosotros" },
  contacto: { en: "contact" },
  contact: { es: "contacto" },
  productos: { en: "products" },
  products: { es: "productos" },
  servicios: { en: "services" },
  services: { es: "servicios" },
  "casos-de-uso": { en: "use-cases" },
  "use-cases": { es: "casos-de-uso" },
};

function switchLocalePath(pathname: string, targetLocale: string): string {
  const segments = pathname.split("/");
  return segments
    .map((seg, i) => (i === 1 ? targetLocale : (SEGMENT_MAP[seg]?.[targetLocale] ?? seg)))
    .join("/");
}

// Builds a locale-prefixed path with optional locale-specific slug translation.
function loc(locale: string, esPath: string, enPath?: string): string {
  return `/${locale}${locale === "es" ? esPath : (enPath ?? esPath)}`;
}

const AI_AGENTS = [
  { slug: "maty", name: "MATY" },
  { slug: "juanito", name: "Juanito" },
  { slug: "roboto", name: "Roboto" },
];

interface NavProps {
  locale: string;
}

export default function Nav({ locale }: NavProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const otherLocale = locale === "es" ? "en" : "es";
  const switchPath = switchLocalePath(pathname, otherLocale);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="font-heading text-lg font-bold text-brand-navy tracking-tight"
          >
            <span className="text-brand-orange">C</span>lientmetrica
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors"
            >
              {t("home")}
            </Link>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors py-2"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                {t("products")}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50">
                  <p className="px-3 pt-1 pb-1.5 text-[11px] font-semibold text-brand-navy/50 uppercase tracking-wider">
                    {t("agentsSection")}
                  </p>
                  {AI_AGENTS.map(({ slug, name }) => (
                    <Link
                      key={slug}
                      href={loc(locale, `/productos/${slug}`, `/products/${slug}`)}
                      className="block px-3 py-1.5 text-sm text-brand-navy hover:bg-brand-orange/5 hover:text-brand-orange transition-colors"
                    >
                      {name}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-gray-100" />

                  <p className="px-3 pt-1 pb-1.5 text-[11px] font-semibold text-brand-navy/50 uppercase tracking-wider">
                    {t("cybersecuritySection")}
                  </p>
                  <span className="block px-3 py-1.5 text-sm text-brand-navy/40 italic select-none">
                    {t("comingSoon")}
                  </span>
                </div>
              )}
            </div>

            <Link
              href={loc(locale, "/nosotros", "/about")}
              className="text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors"
            >
              {t("about")}
            </Link>

            <Link
              href={loc(locale, "/contacto", "/contact")}
              className="text-sm font-medium bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Locale switcher + mobile trigger */}
          <div className="flex items-center gap-2">
            <Link
              href={switchPath}
              className="text-xs font-medium text-brand-navy/50 hover:text-brand-navy border border-brand-navy/20 hover:border-brand-navy/40 rounded px-2 py-1 transition-colors uppercase tracking-wide"
              aria-label={`Switch to ${otherLocale === "es" ? "Español" : "English"}`}
            >
              {otherLocale}
            </Link>

            <button
              className="md:hidden p-1.5 text-brand-navy hover:text-brand-orange transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            <Link
              href={`/${locale}`}
              className="px-2 py-2 text-sm font-medium text-brand-navy hover:text-brand-orange rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              {t("home")}
            </Link>

            <div className="py-1">
              <p className="px-2 pb-1 text-[11px] font-semibold text-brand-navy/50 uppercase tracking-wider">
                {t("agentsSection")}
              </p>
              {AI_AGENTS.map(({ slug, name }) => (
                <Link
                  key={slug}
                  href={loc(locale, `/productos/${slug}`, `/products/${slug}`)}
                  className="block px-4 py-1.5 text-sm text-brand-navy hover:text-brand-orange"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>

            <Link
              href={loc(locale, "/nosotros", "/about")}
              className="px-2 py-2 text-sm font-medium text-brand-navy hover:text-brand-orange rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              {t("about")}
            </Link>

            <Link
              href={loc(locale, "/contacto", "/contact")}
              className="mx-2 mt-1 text-center text-sm font-medium bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange/90 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {t("contact")}
            </Link>

            <div className="px-2 pt-2 border-t border-gray-100 mt-1">
              <Link
                href={switchPath}
                className="text-xs text-brand-navy/50 hover:text-brand-navy"
                onClick={() => setMenuOpen(false)}
              >
                {otherLocale === "es" ? "Ver en Español" : "View in English"}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
