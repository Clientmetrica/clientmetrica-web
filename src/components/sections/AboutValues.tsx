import { useTranslations } from "next-intl";
import { Target, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";

// TODO: Marketing to review and finalise values copy.
const VALUES_ES = [
  {
    icon: Target,
    title: "Resultados sobre tecnología",
    description:
      "No nos importa qué tan impresionante es la tecnología si no mueve una métrica de negocio.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidad radical",
    description:
      "Si el cliente necesita un manual para usar el producto, fallamos. La potencia debe ser invisible.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza ganada",
    description:
      "Cumplimos lo que prometemos. Nada más, nada menos. La confianza se gana con consistencia.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento compartido",
    description:
      "Cuando nuestros clientes crecen, nosotros crecemos. Nuestros incentivos están alineados.",
  },
];

const VALUES_EN = [
  {
    icon: Target,
    title: "Results over technology",
    description:
      "We don't care how impressive the technology is if it doesn't move a business metric.",
  },
  {
    icon: Lightbulb,
    title: "Radical simplicity",
    description:
      "If the client needs a manual to use the product, we failed. Power should be invisible.",
  },
  {
    icon: ShieldCheck,
    title: "Trust is earned",
    description:
      "We deliver what we promise. Nothing more, nothing less. Trust is built through consistency.",
  },
  {
    icon: TrendingUp,
    title: "Shared growth",
    description: "When our clients grow, we grow. Our incentives are fully aligned.",
  },
];

interface AboutValuesProps {
  locale: string;
}

export default function AboutValues({ locale }: AboutValuesProps) {
  const t = useTranslations("about.values");
  const values = locale === "es" ? VALUES_ES : VALUES_EN;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">
            {t("title")}
          </h2>
          <p className="mt-3 text-brand-navy/60 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-brand-navy mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brand-navy/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
