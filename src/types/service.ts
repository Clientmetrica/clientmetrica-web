export type ServiceSlug = "implementacion";

export interface ServiceApproachStep {
  number: number;
  title: string;
  description: string;
  duration: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: ServiceSlug;

  heroTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;

  problemHeadline: string;
  problemSubheadline: string;
  problems: { icon: string; title: string; description: string }[];

  approachHeadline: string;
  approachSubheadline: string;
  steps: ServiceApproachStep[];

  packageHeadline: string;
  packageSubheadline: string;
  packageItems: string[];

  investmentHeadline: string;
  typicalTimeline: string;
  investmentNote: string;

  faqHeadline: string;
  faqs: ServiceFAQItem[];

  ctaHeadline: string;
  ctaSubheadline: string;
  ctaButton: string;
}
