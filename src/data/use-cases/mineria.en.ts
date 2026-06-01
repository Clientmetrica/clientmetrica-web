// TODO: Marketing to finalise copy and validate metrics with real client data.
import type { UseCase } from "@/types/useCase";

export const mineriaEn: UseCase = {
  slug: "mining",
  industry: "mineria",
  industryLabel: "Mining",
  title: "Operational reporting automation in mining",
  excerpt:
    "A mid-sized mining company eliminated 40 hours of weekly manual work by automating report consolidation and distribution with Roboto.",
  challengeHeadline: "The challenge",
  challenge:
    "The operations team spent over 40 hours per week consolidating data from multiple sources (sensors, ERP, spreadsheets) to generate reports that reached management 48 hours late. Manual consolidation errors were frequent and hard to audit. Leadership made operational decisions based on outdated information.",
  solutionHeadline: "The solution",
  solution:
    "We implemented Roboto as a reporting automation agent. Roboto integrated with the company's ERP, telemetry systems, and operational data sources. We configured real-time dashboards for management and automatic shift and daily reports distributed by email and Teams. The operations team moved from consolidating data to reviewing exceptions.",
  resultsHeadline: "Results",
  results: [
    { metric: "-40h", label: "per week in manual consolidation" },
    { metric: "Real-time", label: "management dashboards updated" },
    { metric: "0", label: "consolidation errors" },
    { metric: "100%", label: "coverage of critical KPIs" },
  ],
  products: ["roboto"],
};
