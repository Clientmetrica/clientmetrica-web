import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("about.hero");

  return (
    <section className="bg-brand-navy py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
          {t("tagline")}
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white max-w-2xl">
          {t("headline")}
        </h1>
        <p className="mt-4 text-white/60 text-lg max-w-xl leading-relaxed">{t("subheadline")}</p>
      </div>
    </section>
  );
}
