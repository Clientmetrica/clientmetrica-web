// src/data/products/maty.en.ts
// English copy for MATY product page.
// TODO: Replace all placeholder strings with final copy from Marketing.

import type { ProductPageContent } from "@/types/product";

export const matyEn: ProductPageContent = {
  slug: "maty",

  // S1 – Hero
  heroTagline: "AI Agent",
  heroHeadline: "MATY automates repetitive work so your team scales without growing headcount.",
  heroSubheadline: "Integrate MATY into your existing workflows and see results from day one.",
  heroPrimaryCta: "Book a demo",
  heroSecondaryCta: "See how it works",

  // S2 – Problem
  problemHeadline: "The hidden cost of manual processes",
  problems: [
    {
      stat: "60%",
      label: "of operational time",
      description: "is spent on repetitive tasks that generate no strategic value.",
    },
    {
      stat: "3x",
      label: "higher cost per error",
      description: "when manual review fails, rework is inevitable.",
    },
    {
      stat: "0",
      label: "real scalability",
      description: "scaling operations today means hiring more people.",
    },
  ],

  // S3 – How it works
  howItWorksHeadline: "Three steps to automate your operation",
  steps: [
    {
      number: 1,
      title: "Connect your systems",
      description: "MATY integrates with your current stack — no migrations, no platform changes.",
    },
    {
      number: 2,
      title: "Define your workflows",
      description: "Configure the processes MATY will run autonomously with real business logic.",
    },
    {
      number: 3,
      title: "Operate and improve",
      description:
        "MATY executes, reports, and continuously improves. Your team reviews exceptions, not volume.",
    },
  ],

  // S4 – Capabilities
  capabilitiesHeadline: "Built to scale operations, not complexity",
  capabilities: [
    {
      icon: "zap",
      title: "Autonomous execution",
      description: "Handles high volume without constant supervision. Runs 24/7.",
    },
    {
      icon: "git-merge",
      title: "Native integrations",
      description: "Works with Microsoft 365, Azure, HubSpot, and the systems you already use.",
    },
    {
      icon: "shield-check",
      title: "Intelligent validation",
      description: "Detects anomalies and escalates exceptions to your team when needed.",
    },
    {
      icon: "bar-chart-2",
      title: "Full traceability",
      description: "Every action is logged. Audit trails and reporting ready for management.",
    },
    {
      icon: "refresh-cw",
      title: "Continuous improvement",
      description: "Learns from every cycle. Workflows optimise automatically over time.",
    },
    {
      icon: "users",
      title: "Human-agent collaboration",
      description: "Your team focuses on strategic decisions. MATY handles the volume.",
    },
  ],

  // S5 – ROI
  // TODO: Replace with real numbers from CEO — must be defensible before launch.
  roiHeadline: "Measurable results from the first month",
  metrics: [
    { value: "40%", label: "reduction in processing time" },
    { value: "3x", label: "more volume with the same team" },
    { value: "-60%", label: "operational errors in automated workflows" },
  ],
};
