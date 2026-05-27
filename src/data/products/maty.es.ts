// src/data/products/maty.es.ts
// Spanish copy for MATY product page.
// TODO: Replace all placeholder strings with final copy from Marketing.

import type { ProductPageContent } from "@/types/product";

export const matyEs: ProductPageContent = {
  slug: "maty",

  // S1 – Hero
  heroTagline: "Agente de IA",
  heroHeadline: "MATY automatiza lo repetitivo para que tu equipo escale sin crecer en headcount.",
  heroSubheadline:
    "Integra MATY en tus flujos actuales y empieza a ver resultados desde el primer día.",
  heroPrimaryCta: "Agenda una demo",
  heroSecondaryCta: "Ver cómo funciona",

  // S2 – Problem
  problemHeadline: "El costo oculto de los procesos manuales",
  problems: [
    {
      stat: "60%",
      label: "del tiempo operacional",
      description: "se pierde en tareas repetitivas que no generan valor estratégico.",
    },
    {
      stat: "3x",
      label: "mayor costo por error",
      description: "cuando la revisión manual falla, el reproceso es inevitable.",
    },
    {
      stat: "0",
      label: "escalabilidad real",
      description: "escalar operaciones hoy significa contratar más personas.",
    },
  ],

  // S3 – How it works
  howItWorksHeadline: "Tres pasos para automatizar tu operación",
  steps: [
    {
      number: 1,
      title: "Conecta tus sistemas",
      description:
        "MATY se integra con tu stack actual — sin migraciones ni cambios de plataforma.",
    },
    {
      number: 2,
      title: "Define los flujos",
      description:
        "Configura los procesos que MATY ejecutará de forma autónoma con lógica de negocio real.",
    },
    {
      number: 3,
      title: "Opera y aprende",
      description:
        "MATY ejecuta, reporta y mejora continuamente. Tu equipo revisa excepciones, no volumen.",
    },
  ],

  // S4 – Capabilities
  capabilitiesHeadline: "Diseñado para escalar operaciones, no complejidad",
  capabilities: [
    {
      icon: "zap",
      title: "Ejecución autónoma",
      description: "Procesa volumen alto sin supervisión constante. Funciona 24/7.",
    },
    {
      icon: "git-merge",
      title: "Integración nativa",
      description: "Compatible con Microsoft 365, Azure, HubSpot y los sistemas que ya usas.",
    },
    {
      icon: "shield-check",
      title: "Validación inteligente",
      description: "Detecta anomalías y escala excepciones al equipo humano cuando corresponde.",
    },
    {
      icon: "bar-chart-2",
      title: "Trazabilidad total",
      description: "Cada acción queda registrada. Auditoría y reporting listos para gerencia.",
    },
    {
      icon: "refresh-cw",
      title: "Mejora continua",
      description: "Aprende de cada ciclo. Los flujos se optimizan automáticamente con el tiempo.",
    },
    {
      icon: "users",
      title: "Colaboración humano-agente",
      description: "Tu equipo se concentra en decisiones estratégicas. MATY maneja el volumen.",
    },
  ],

  // S5 – ROI
  // TODO: Replace with real numbers from CEO — must be defensible before launch.
  roiHeadline: "Resultados medibles desde el primer mes",
  metrics: [
    { value: "40%", label: "reducción en tiempo de procesamiento" },
    { value: "3x", label: "más volumen con el mismo equipo" },
    { value: "-60%", label: "errores operacionales en flujos automatizados" },
  ],

  // S7 – Social proof
  // TODO: Add real testimonial when first client approves quote.
  // quote: {
  //   text: "...",
  //   author: "...",
  //   role: "...",
  //   company: "...",
  // },
};
