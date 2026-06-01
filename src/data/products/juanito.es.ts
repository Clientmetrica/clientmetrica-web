// src/data/products/juanito.es.ts
// TODO: Replace all placeholder copy with final Marketing copy.

import type { ProductPageContent } from "@/types/product";

export const juanitoEs: ProductPageContent = {
  slug: "juanito",

  heroTagline: "Agente de IA",
  heroHeadline: "Juanito convierte conversaciones en clientes, sin que tu equipo pierda tiempo.",
  heroSubheadline:
    "Automatiza la calificación de leads, el seguimiento comercial y el onboarding de clientes desde el primer contacto.",
  heroPrimaryCta: "Agenda una demo",
  heroSecondaryCta: "Ver cómo funciona",

  problemHeadline: "El costo oculto de los seguimientos manuales",
  problems: [
    {
      stat: "70%",
      label: "de leads sin seguimiento",
      description: "se pierden porque el equipo no tiene capacidad de responder a tiempo.",
    },
    {
      stat: "5x",
      label: "más tiempo en onboarding",
      description: "cuando el proceso es manual, el cliente espera y la experiencia sufre.",
    },
    {
      stat: "0",
      label: "consistencia en el proceso",
      description: "cada vendedor sigue un proceso distinto, y los datos quedan fragmentados.",
    },
  ],

  howItWorksHeadline: "Tres pasos para automatizar tu ciclo comercial",
  steps: [
    {
      number: 1,
      title: "Conecta tu CRM",
      description:
        "Juanito se integra con HubSpot, Salesforce y tu stack comercial actual. Sin migraciones.",
    },
    {
      number: 2,
      title: "Define el proceso de ventas",
      description:
        "Configura los flujos: calificación, seguimiento, alertas y mensajes automáticos con lógica real.",
    },
    {
      number: 3,
      title: "Cierra más con menos esfuerzo",
      description:
        "Juanito gestiona el volumen. Tu equipo se concentra en las conversaciones que importan.",
    },
  ],

  capabilitiesHeadline: "Diseñado para equipos comerciales que quieren escalar",
  capabilities: [
    {
      icon: "user-check",
      title: "Calificación automática",
      description: "Evalúa leads en tiempo real según criterios de negocio configurables.",
    },
    {
      icon: "message-circle",
      title: "Seguimiento inteligente",
      description: "Envía mensajes personalizados en el momento correcto. Nunca pierde un lead.",
    },
    {
      icon: "git-merge",
      title: "Integración con CRM",
      description:
        "Actualiza HubSpot, Salesforce y otros sistemas automáticamente tras cada interacción.",
    },
    {
      icon: "bar-chart-2",
      title: "Reportes de pipeline",
      description:
        "Visibilidad total del ciclo comercial: conversión, tiempos y puntos de quiebre.",
    },
    {
      icon: "zap",
      title: "Onboarding automatizado",
      description: "Guía al cliente nuevo desde la firma hasta la primera sesión de valor.",
    },
    {
      icon: "users",
      title: "Colaboración equipo-agente",
      description:
        "El equipo ve todo lo que hace Juanito y puede tomar el control cuando necesita.",
    },
  ],

  // TODO: Replace with real numbers from CEO — must be defensible before launch.
  roiHeadline: "Resultados medibles desde el primer mes",
  metrics: [
    { value: "3x", label: "más leads calificados con el mismo equipo" },
    { value: "-50%", label: "tiempo de onboarding por cliente" },
    { value: "90%", label: "tasa de seguimiento completado" },
  ],
};
