import Link from "next/link";
import { useTranslations } from "next-intl";

interface HomepageCTAProps {
  locale: string;
}

export default function HomepageCTA({ locale }: HomepageCTAProps) {
  const t = useTranslations("homepage.cta");

  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
          {t("headline")}
        </h2>
        <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          {t("subheadline")}
        </p>

        <Link
          href={`/${locale}/contacto`}
          className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors text-sm"
        >
          {t("button")}
        </Link>

        <p className="mt-4 text-white/30 text-xs">{t("note")}</p>
      </div>
    </section>
  );
}
