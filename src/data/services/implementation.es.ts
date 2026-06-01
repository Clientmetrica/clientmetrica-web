// TODO: Marketing/Copy to review and finalise before launch.
import type { ServiceContent } from "@/types/service";

export const implementacionEs: ServiceContent = {
  slug: "implementacion",

  heroTagline: "Servicio",
  heroHeadline: "Implementamos IA en tu Negocio",
  heroSubheadline:
    "Te acompañamos desde el diagnóstico hasta el agente en producción. Sin necesidad de equipo técnico interno.",
  heroCta: "Agenda una consultoría",

  problemHeadline: "El desafío de adoptar IA sin equipo técnico",
  problemSubheadline:
    "Las empresas medianas y grandes quieren automatizar con IA, pero la implementación es compleja y el riesgo de fracasar es alto sin experiencia.",
  problems: [
    {
      icon: "alert-triangle",
      title: "Falta de experiencia interna",
      description:
        "La mayoría de las empresas no tienen un equipo de IA. Contratar toma meses y cuesta caro.",
    },
    {
      icon: "clock",
      title: "Proyectos que no terminan",
      description:
        "Los proyectos de IA se extienden, consumen presupuesto y rara vez llegan a producción.",
    },
    {
      icon: "git-merge",
      title: "Integración compleja",
      description:
        "Conectar agentes de IA con sistemas legacy (ERP, CRM, bases de datos) requiere experiencia específica.",
    },
  ],

  approachHeadline: "Nuestro proceso de implementación",
  approachSubheadline:
    "Un proceso estructurado de 5 etapas que lleva tu operación desde el diagnóstico hasta el agente en producción.",
  steps: [
    {
      number: 1,
      title: "Diagnóstico",
      description:
        "Analizamos tus procesos actuales, identificamos los flujos con mayor potencial de automatización y definimos el impacto esperado.",
      duration: "1 semana",
    },
    {
      number: 2,
      title: "Diseño de solución",
      description:
        "Diseñamos la arquitectura del agente, los flujos de trabajo y las integraciones necesarias con tu stack actual.",
      duration: "1–2 semanas",
    },
    {
      number: 3,
      title: "Implementación",
      description:
        "Desarrollamos e integramos el agente en tu entorno. Pruebas en paralelo con operaciones reales antes del lanzamiento.",
      duration: "2–4 semanas",
    },
    {
      number: 4,
      title: "Capacitación del equipo",
      description:
        "Formamos a tu equipo para operar, monitorear y escalar el agente de forma autónoma.",
      duration: "1 semana",
    },
    {
      number: 5,
      title: "Soporte y optimización",
      description:
        "Tres meses de soporte post-lanzamiento incluidos. Monitoreamos el rendimiento y optimizamos continuamente.",
      duration: "3 meses",
    },
  ],

  packageHeadline: "¿Qué incluye?",
  packageSubheadline: "Todo lo que necesitas para que el agente esté en producción y funcionando.",
  packageItems: [
    "Diagnóstico completo de procesos (taller de 2 días)",
    "Diseño de arquitectura y mapa de integraciones",
    "Implementación del agente en tu entorno",
    "Integración con hasta 3 sistemas externos",
    "Pruebas y QA antes del lanzamiento",
    "Capacitación del equipo operacional",
    "Documentación técnica y manual de operación",
    "3 meses de soporte y optimización post-lanzamiento",
  ],

  investmentHeadline: "Inversión y plazos",
  typicalTimeline: "6–10 semanas desde diagnóstico hasta producción",
  investmentNote:
    "La inversión varía según la complejidad del proceso y el número de integraciones. Agenda una consultoría gratuita para recibir una propuesta a medida.",

  faqHeadline: "Preguntas frecuentes",
  faqs: [
    {
      question: "¿Necesito tener un equipo técnico interno?",
      answer:
        "No. Nuestro equipo gestiona toda la implementación técnica. Tu equipo solo necesita conocer el proceso de negocio que queremos automatizar.",
    },
    {
      question: "¿Cuánto tiempo toma ver los primeros resultados?",
      answer:
        "El agente entra en producción entre 6 y 10 semanas desde el inicio del proyecto. Los primeros resultados medibles se obtienen durante el primer mes de operación.",
    },
    {
      question: "¿Qué pasa si el proceso cambia después de la implementación?",
      answer:
        "El agente es configurable. Durante los 3 meses de soporte incluido, podemos ajustar los flujos sin costo adicional por cambios moderados.",
    },
    {
      question: "¿Con qué sistemas se puede integrar?",
      answer:
        "Nos integramos con la mayoría de los sistemas enterprise: SAP, Microsoft 365, Salesforce, HubSpot, Google Workspace, y cualquier sistema con API o acceso a base de datos.",
    },
    {
      question: "¿Qué ocurre después del período de soporte de 3 meses?",
      answer:
        "Ofrecemos planes de mantención y optimización continua. También puedes optar por operar el agente de forma autónoma una vez que tu equipo esté capacitado.",
    },
  ],

  ctaHeadline: "¿Listo para implementar IA en tu operación?",
  ctaSubheadline:
    "Agenda una consultoría gratuita de 45 minutos. Evaluamos tu caso y te presentamos una propuesta sin compromiso.",
  ctaButton: "Agenda una consultoría",
};
