// src/data/products/roboto.en.ts
// TODO: Replace all placeholder copy with final Marketing copy.

import type { ProductPageContent } from "@/types/product";

export const robotoEn: ProductPageContent = {
  slug: "roboto",

  heroTagline: "AI Agent",
  heroHeadline: "Roboto turns scattered data into clear decisions for your leadership team.",
  heroSubheadline:
    "Automatically collects, processes, and presents data from multiple sources. Your team decides; Roboto reports.",
  heroPrimaryCta: "Book a demo",
  heroSecondaryCta: "See how it works",

  problemHeadline: "The hidden cost of manual reporting",
  problems: [
    {
      stat: "8h",
      label: "per week on reports",
      description: "analysts spend their time consolidating data instead of analysing it.",
    },
    {
      stat: "48h",
      label: "information lag",
      description: "when reports are weekly, decisions arrive too late.",
    },
    {
      stat: "30%",
      label: "data errors",
      description: "manual consolidation generates inconsistencies that nobody catches in time.",
    },
  ],

  howItWorksHeadline: "Three steps to automate your business intelligence",
  steps: [
    {
      number: 1,
      title: "Connect your sources",
      description:
        "Roboto integrates with ERP, CRM, databases, and APIs. No dedicated data team required.",
    },
    {
      number: 2,
      title: "Define your key metrics",
      description:
        "Configure the KPIs that matter to leadership. Roboto calculates and distributes them automatically.",
    },
    {
      number: 3,
      title: "Decide with fresh data",
      description:
        "Real-time dashboards, automated reports, and alerts when something drifts off target.",
    },
  ],

  capabilitiesHeadline: "Built for operations that need full visibility",
  capabilities: [
    {
      icon: "database",
      title: "Multi-source consolidation",
      description: "Connects ERP, CRM, APIs, and spreadsheets into a single unified view.",
    },
    {
      icon: "bar-chart-2",
      title: "Real-time dashboards",
      description: "Metrics updated instantly. No waiting for Monday's report.",
    },
    {
      icon: "bell",
      title: "Intelligent alerts",
      description: "Notifies the right people when a KPI drifts from a defined threshold.",
    },
    {
      icon: "file-text",
      title: "Automated reports",
      description: "Generates and distributes executive reports at whatever frequency you define.",
    },
    {
      icon: "shield-check",
      title: "Data quality",
      description: "Detects inconsistencies and missing data before they reach the report.",
    },
    {
      icon: "git-merge",
      title: "Native integrations",
      description:
        "Works with Microsoft 365, Google Workspace, SAP, and the systems you already use.",
    },
  ],

  // TODO: Replace with real numbers from CEO — must be defensible before launch.
  roiHeadline: "Measurable results from the first month",
  metrics: [
    { value: "-80%", label: "time spent on manual reporting" },
    { value: "Real-time", label: "data available for decisions" },
    { value: "100%", label: "visibility of critical business KPIs" },
  ],
};
