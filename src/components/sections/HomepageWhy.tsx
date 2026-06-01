import { useTranslations } from "next-intl";
import { Zap, BarChart2, ShieldCheck, Users } from "lucide-react";

// TODO: Marketing to review and finalise these differentiators.
const WHY_ITEMS_ES = [
  {
    icon: Zap,
    title: "Implementación en días",
    description: "Conectamos con tu stack actual. Sin migraciones ni proyectos de 6 meses.",
  },
  {
    icon: BarChart2,
    title: "ROI medible desde el mes uno",
    description: "Cada agente entrega métricas de impacto desde el primer ciclo de operación.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad enterprise",
    description: "Cumplimiento de estándares para empresas medianas y grandes en Chile.",
  },
  {
    icon: Users,
    title: "Soporte continuo",
    description: "No te dejamos solo después del lanzamiento. Te acompañamos en el crecimiento.",
  },
];

const WHY_ITEMS_EN = [
  {
    icon: Zap,
    title: "Up and running in days",
    description: "We connect to your current stack. No migrations, no 6-month projects.",
  },
  {
    icon: BarChart2,
    title: "Measurable ROI from month one",
    description: "Each agent delivers impact metrics from the first operational cycle.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description: "Compliance standards for mid-to-large companies.",
  },
  {
    icon: Users,
    title: "Ongoing support",
    description: "We don't leave you alone after launch. We grow with you.",
  },
];

interface HomepageWhyProps {
  locale: string;
}

export default function HomepageWhy({ locale }: HomepageWhyProps) {
  const t = useTranslations("homepage.why");
  const items = locale === "es" ? WHY_ITEMS_ES : WHY_ITEMS_EN;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">
            {t("title")}
          </h2>
          <p className="mt-4 text-brand-navy/60 max-w-xl mx-auto text-base leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <h3 className="font-heading text-base font-bold text-brand-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
