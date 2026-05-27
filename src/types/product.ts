// Shared types for all product pages (MATY, Juanito, Roboto)
// Extend this as each product gets more customised content.

export type ProductSlug = "maty" | "juanito" | "roboto";

export interface ProductStep {
  number: number;
  title: string;
  description: string;
}

export interface ProductCapability {
  icon: string; // Lucide icon name, e.g. "zap"
  title: string;
  description: string;
}

export interface ProductMetric {
  value: string; // e.g. "40%"
  label: string; // e.g. "reducción en tiempo de respuesta"
}

export interface ProductIntegration {
  name: string;
  logoUrl: string; // path relative to /public
}

export interface ProductPageContent {
  slug: ProductSlug;
  // S1 – Hero
  heroTagline: string; // Short category label above headline
  heroHeadline: string; // Main H1
  heroSubheadline: string; // Supporting sentence
  heroPrimaryCta: string; // Button label
  heroSecondaryCta: string; // Anchor link label

  // S2 – Problem
  problemHeadline: string;
  problems: { stat: string; label: string; description: string }[];

  // S3 – How it works
  howItWorksHeadline: string;
  steps: ProductStep[];

  // S4 – Capabilities
  capabilitiesHeadline: string;
  capabilities: ProductCapability[];

  // S5 – ROI
  roiHeadline: string;
  metrics: ProductMetric[];

  // S7 – Social proof (optional until you have clients)
  quote?: { text: string; author: string; role: string; company: string };
}
