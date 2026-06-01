import Link from "next/link";
import { useTranslations } from "next-intl";

function loc(locale: string, esPath: string, enPath?: string): string {
  return `/${locale}${locale === "es" ? esPath : (enPath ?? esPath)}`;
}

const AI_AGENTS = [
  { slug: "maty", name: "MATY" },
  { slug: "juanito", name: "Juanito" },
  { slug: "roboto", name: "Roboto" },
];

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("nav");
  const isEs = locale === "es";

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link
              href={`/${locale}`}
              className="font-heading text-lg font-bold text-white tracking-tight"
            >
              <span className="text-brand-orange">C</span>lientmetrica
            </Link>
            <p className="mt-3 text-sm text-white/60 max-w-xs leading-relaxed">
              {isEs
                ? "Agentes de IA para empresas que quieren crecer."
                : "AI Agents for companies built to grow."}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t("products")}
            </h3>
            <ul className="space-y-2.5">
              {AI_AGENTS.map(({ slug, name }) => (
                <li key={slug}>
                  <Link
                    href={loc(locale, `/productos/${slug}`, `/products/${slug}`)}
                    className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              {isEs ? "Empresa" : "Company"}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href={loc(locale, "/nosotros", "/about")}
                  className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href={loc(locale, "/contacto", "/contact")}
                  className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  href={loc(locale, "/privacidad", "/privacy")}
                  className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                >
                  {isEs ? "Privacidad" : "Privacy"}
                </Link>
              </li>
              <li>
                <Link
                  href={loc(locale, "/terminos", "/terms")}
                  className="text-sm text-white/60 hover:text-brand-orange transition-colors"
                >
                  {isEs ? "Términos" : "Terms"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            © 2026 Clientmetrica. {isEs ? "Todos los derechos reservados." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/clientmetrica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-brand-orange transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
