// src/components/sections/ProductCTA.tsx
// S8 – Bottom CTA. Brand-navy bg, full-width, single CTA button.
// Headline and CTA label are hardcoded here since they're the same on every
// product page. Move to i18n JSON if you ever need per-product variation.
//
// TODO: drive headline/cta text from i18n once translation files are populated.

import Link from "next/link";
import { useLocale } from "next-intl";

export default function ProductCTA() {
  const locale = useLocale();

  const copy = {
    es: {
      headline: "¿Listo para escalar sin escalar tu equipo?",
      cta: "Hablemos",
    },
    en: {
      headline: "Ready to scale without growing your team?",
      cta: "Let's talk",
    },
  } as const;

  const t = locale === "en" ? copy.en : copy.es;

  return (
    <section className="bg-brand-navy py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading font-bold text-white text-3xl lg:text-4xl mb-10">
          {t.headline}
        </h2>
        <Link
          href={`/${locale}/contacto`}
          className="inline-block bg-brand-orange text-white font-heading font-bold px-10 py-5 rounded-lg text-lg hover:bg-orange-600 transition-colors"
        >
          {t.cta}
        </Link>
      </div>
    </section>
  );
}
