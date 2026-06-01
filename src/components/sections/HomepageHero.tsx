import Link from "next/link";
import { useTranslations } from "next-intl";

interface HomepageHeroProps {
  locale: string;
}

export default function HomepageHero({ locale }: HomepageHeroProps) {
  const t = useTranslations("homepage.hero");

  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Background gradient accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 50%, #F75F23 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-4">
            {t("tagline")}
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t("headline")}
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">{t("subheadline")}</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors text-sm"
            >
              {t("primaryCta")}
            </Link>
            <Link
              href={`/${locale}/productos`}
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
