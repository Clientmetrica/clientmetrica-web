// src/data/products/juanito.en.ts
// TODO: Replace all placeholder copy with final Marketing copy.

import type { ProductPageContent } from "@/types/product";

export const juanitoEn: ProductPageContent = {
  slug: "juanito",

  heroTagline: "AI Agent",
  heroHeadline: "Juanito turns conversations into customers — without burning your team's time.",
  heroSubheadline:
    "Automate lead qualification, sales follow-ups, and customer onboarding from first contact.",
  heroPrimaryCta: "Book a demo",
  heroSecondaryCta: "See how it works",

  problemHeadline: "The hidden cost of manual follow-ups",
  problems: [
    {
      stat: "70%",
      label: "of leads without follow-up",
      description: "are lost because the team can't respond fast enough.",
    },
    {
      stat: "5x",
      label: "longer onboarding",
      description: "when the process is manual, the customer waits and the experience suffers.",
    },
    {
      stat: "0",
      label: "process consistency",
      description: "every rep follows a different process, and data stays fragmented.",
    },
  ],

  howItWorksHeadline: "Three steps to automate your commercial cycle",
  steps: [
    {
      number: 1,
      title: "Connect your CRM",
      description:
        "Juanito integrates with HubSpot, Salesforce, and your current sales stack. No migrations.",
    },
    {
      number: 2,
      title: "Define your sales process",
      description:
        "Configure the flows: qualification, follow-ups, alerts, and automated messages with real business logic.",
    },
    {
      number: 3,
      title: "Close more with less effort",
      description: "Juanito manages volume. Your team focuses on the conversations that matter.",
    },
  ],

  capabilitiesHeadline: "Built for sales teams that want to scale",
  capabilities: [
    {
      icon: "user-check",
      title: "Automatic qualification",
      description: "Evaluates leads in real time based on configurable business criteria.",
    },
    {
      icon: "message-circle",
      title: "Intelligent follow-up",
      description: "Sends personalised messages at the right moment. Never misses a lead.",
    },
    {
      icon: "git-merge",
      title: "CRM integration",
      description:
        "Updates HubSpot, Salesforce, and other systems automatically after each interaction.",
    },
    {
      icon: "bar-chart-2",
      title: "Pipeline reporting",
      description:
        "Full visibility into the commercial cycle: conversion, timelines, and drop-off points.",
    },
    {
      icon: "zap",
      title: "Automated onboarding",
      description: "Guides the new customer from signature to first value session.",
    },
    {
      icon: "users",
      title: "Team-agent collaboration",
      description: "The team sees everything Juanito does and can take over whenever needed.",
    },
  ],

  // TODO: Replace with real numbers from CEO — must be defensible before launch.
  roiHeadline: "Measurable results from the first month",
  metrics: [
    { value: "3x", label: "more qualified leads with the same team" },
    { value: "-50%", label: "onboarding time per customer" },
    { value: "90%", label: "follow-up completion rate" },
  ],
};
