import { useTranslations } from "next-intl";

// TODO: Marketing/CEO to provide final mission copy.
const MISSION_ES = [
  "Clientmetrica nació de una convicción simple: las empresas chilenas y latinoamericanas merecen acceso a automatización real, no solo a promesas de IA.",
  "Construimos agentes de IA que se integran a las operaciones existentes, entregan resultados medibles desde el primer mes y no requieren un equipo técnico interno para funcionar.",
  "Nuestro foco es la empresa mediana y grande que quiere escalar su operación sin escalar su headcount. No somos consultores — somos una empresa de productos.",
];

const MISSION_EN = [
  "Clientmetrica was born from a simple conviction: Chilean and Latin American companies deserve access to real automation — not just AI promises.",
  "We build AI agents that integrate into existing operations, deliver measurable results from month one, and don't require an internal technical team to run.",
  "Our focus is the mid-to-large enterprise that wants to scale operations without scaling headcount. We are not consultants — we are a product company.",
];

interface AboutMissionProps {
  locale: string;
}

export default function AboutMission({ locale }: AboutMissionProps) {
  const t = useTranslations("about.mission");
  const paragraphs = locale === "es" ? MISSION_ES : MISSION_EN;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            {t("title")}
          </h2>
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base text-brand-navy/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
