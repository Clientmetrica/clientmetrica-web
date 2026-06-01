export interface LegalSection {
  heading: string;
  content: string;
}

export interface LegalDocument {
  title: string;
  lastUpdated: string; // ISO date
  intro: string;
  sections: LegalSection[];
}
