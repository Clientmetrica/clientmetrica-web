// src/data/products/roboto.es.ts
// TODO: Replace all placeholder copy with final Marketing copy.

import type { ProductPageContent } from "@/types/product";

export const robotoEs: ProductPageContent = {
  slug: "roboto",

  heroTagline: "Agente de IA",
  heroHeadline: "Roboto transforma datos dispersos en decisiones claras para tu gerencia.",
  heroSubheadline:
    "Recopila, procesa y presenta datos de múltiples fuentes de forma automática. Tu equipo decide; Roboto reporta.",
  heroPrimaryCta: "Agenda una demo",
  heroSecondaryCta: "Ver cómo funciona",

  problemHeadline: "El costo oculto de los reportes manuales",
  problems: [
    {
      stat: "8h",
      label: "por semana en reportes",
      description: "los analistas gastan su tiempo consolidando datos en lugar de analizarlos.",
    },
    {
      stat: "48h",
      label: "de lag en información",
      description: "cuando los reportes son semanales, las decisiones llegan tarde.",
    },
    {
      stat: "30%",
      label: "de errores en datos",
      description:
        "los procesos manuales de consolidación generan inconsistencias que nadie detecta a tiempo.",
    },
  ],

  howItWorksHeadline: "Tres pasos para automatizar tu inteligencia de negocio",
  steps: [
    {
      number: 1,
      title: "Conecta tus fuentes",
      description:
        "Roboto se integra con ERP, CRM, bases de datos y APIs. Sin necesidad de un equipo de datos dedicado.",
    },
    {
      number: 2,
      title: "Define tus métricas clave",
      description:
        "Configura los KPIs que importan a tu gerencia. Roboto los calcula y distribuye automáticamente.",
    },
    {
      number: 3,
      title: "Decide con datos frescos",
      description:
        "Dashboards actualizados en tiempo real, reportes automatizados y alertas cuando algo se desvía.",
    },
  ],

  capabilitiesHeadline: "Diseñado para operaciones que necesitan visibilidad total",
  capabilities: [
    {
      icon: "database",
      title: "Consolidación multi-fuente",
      description: "Conecta ERP, CRM, APIs y hojas de cálculo en una sola vista unificada.",
    },
    {
      icon: "bar-chart-2",
      title: "Dashboards en tiempo real",
      description: "Métricas actualizadas al instante. Sin esperar el reporte del lunes.",
    },
    {
      icon: "bell",
      title: "Alertas inteligentes",
      description: "Notifica a las personas correctas cuando un KPI se desvía del umbral definido.",
    },
    {
      icon: "file-text",
      title: "Reportes automáticos",
      description: "Genera y distribuye reportes ejecutivos con la frecuencia que definas.",
    },
    {
      icon: "shield-check",
      title: "Calidad de datos",
      description: "Detecta inconsistencias y datos faltantes antes de que lleguen al reporte.",
    },
    {
      icon: "git-merge",
      title: "Integración nativa",
      description:
        "Compatible con Microsoft 365, Google Workspace, SAP y los sistemas que ya usas.",
    },
  ],

  // TODO: Replace with real numbers from CEO — must be defensible before launch.
  roiHeadline: "Resultados medibles desde el primer mes",
  metrics: [
    { value: "-80%", label: "tiempo dedicado a reportes manuales" },
    { value: "Real-time", label: "datos disponibles para decisiones" },
    { value: "100%", label: "visibilidad de KPIs críticos del negocio" },
  ],
};
