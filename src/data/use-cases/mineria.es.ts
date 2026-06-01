// TODO: Marketing to finalise copy and validate metrics with real client data.
import type { UseCase } from "@/types/useCase";

export const mineriaEs: UseCase = {
  slug: "mineria",
  industry: "mineria",
  industryLabel: "Minería",
  title: "Automatización de reportes operacionales en minería",
  excerpt:
    "Una empresa minera mediana eliminó 40 horas semanales de trabajo manual al automatizar la consolidación y distribución de reportes operacionales con Roboto.",
  challengeHeadline: "El desafío",
  challenge:
    "El equipo de operaciones dedicaba más de 40 horas semanales a consolidar datos de múltiples fuentes (sensores, ERP, hojas de cálculo) para generar reportes que llegaban a gerencia con 48 horas de retraso. Los errores de consolidación manual eran frecuentes y difíciles de auditar. La dirección tomaba decisiones operacionales con información desactualizada.",
  solutionHeadline: "La solución",
  solution:
    "Implementamos Roboto como agente de automatización de reporting. Roboto se integró con el ERP de la empresa, los sistemas de telemetría y las fuentes de datos operacionales. Configuramos dashboards en tiempo real para gerencia y reportes automáticos de turno y diarios distribuidos por correo y Teams. El equipo de operaciones pasó a revisar excepciones en lugar de consolidar datos.",
  resultsHeadline: "Resultados",
  results: [
    { metric: "-40h", label: "por semana en consolidación manual" },
    { metric: "Real-time", label: "dashboards de gerencia actualizados" },
    { metric: "0", label: "errores de consolidación" },
    { metric: "100%", label: "cobertura de KPIs críticos" },
  ],
  products: ["roboto"],
};
