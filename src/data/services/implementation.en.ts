// TODO: Marketing/Copy to review and finalise before launch.
import type { ServiceContent } from "@/types/service";

export const implementationEn: ServiceContent = {
  slug: "implementacion",

  heroTagline: "Service",
  heroHeadline: "We Implement AI in Your Business",
  heroSubheadline:
    "We guide you from diagnosis to agent in production — no in-house technical team required.",
  heroCta: "Book a consultation",

  problemHeadline: "The challenge of adopting AI without a technical team",
  problemSubheadline:
    "Mid-to-large companies want to automate with AI, but implementation is complex and the risk of failure is high without the right expertise.",
  problems: [
    {
      icon: "alert-triangle",
      title: "No in-house expertise",
      description: "Most companies don't have an AI team. Hiring takes months and costs a lot.",
    },
    {
      icon: "clock",
      title: "Projects that never ship",
      description: "AI projects drag on, consume budget, and rarely reach production.",
    },
    {
      icon: "git-merge",
      title: "Complex integrations",
      description:
        "Connecting AI agents to legacy systems (ERP, CRM, databases) requires specific expertise.",
    },
  ],

  approachHeadline: "Our implementation process",
  approachSubheadline:
    "A structured 5-stage process that takes your operation from diagnosis to agent in production.",
  steps: [
    {
      number: 1,
      title: "Diagnosis",
      description:
        "We analyse your current processes, identify the workflows with the highest automation potential, and define expected impact.",
      duration: "1 week",
    },
    {
      number: 2,
      title: "Solution design",
      description:
        "We design the agent architecture, workflows, and integrations needed with your current stack.",
      duration: "1–2 weeks",
    },
    {
      number: 3,
      title: "Implementation",
      description:
        "We build and integrate the agent into your environment. Parallel testing with real operations before launch.",
      duration: "2–4 weeks",
    },
    {
      number: 4,
      title: "Team training",
      description: "We train your team to operate, monitor, and scale the agent independently.",
      duration: "1 week",
    },
    {
      number: 5,
      title: "Support and optimisation",
      description:
        "Three months of post-launch support included. We monitor performance and continuously optimise.",
      duration: "3 months",
    },
  ],

  packageHeadline: "What's included?",
  packageSubheadline: "Everything you need to get the agent into production and running.",
  packageItems: [
    "Full process diagnosis (2-day workshop)",
    "Architecture design and integration mapping",
    "Agent implementation in your environment",
    "Integration with up to 3 external systems",
    "Testing and QA before launch",
    "Operational team training",
    "Technical documentation and operations manual",
    "3 months of post-launch support and optimisation",
  ],

  investmentHeadline: "Investment and timelines",
  typicalTimeline: "6–10 weeks from diagnosis to production",
  investmentNote:
    "Investment varies by process complexity and number of integrations. Book a free consultation to receive a tailored proposal.",

  faqHeadline: "Frequently asked questions",
  faqs: [
    {
      question: "Do I need an in-house technical team?",
      answer:
        "No. Our team handles the entire technical implementation. Your team only needs to understand the business process we're automating.",
    },
    {
      question: "How long until I see the first results?",
      answer:
        "The agent goes live within 6–10 weeks from project start. Measurable results appear within the first month of operation.",
    },
    {
      question: "What if the process changes after implementation?",
      answer:
        "The agent is configurable. During the 3-month support period included, we can adjust workflows at no extra cost for moderate changes.",
    },
    {
      question: "Which systems can it integrate with?",
      answer:
        "We integrate with most enterprise systems: SAP, Microsoft 365, Salesforce, HubSpot, Google Workspace, and any system with an API or database access.",
    },
    {
      question: "What happens after the 3-month support period?",
      answer:
        "We offer ongoing maintenance and optimisation plans. You can also operate the agent independently once your team is fully trained.",
    },
  ],

  ctaHeadline: "Ready to implement AI in your operation?",
  ctaSubheadline:
    "Book a free 45-minute consultation. We assess your case and present a proposal with no commitment.",
  ctaButton: "Book a consultation",
};
