// TODO: CEO/COO to review and finalise legal content before launch.
import type { LegalDocument } from "@/types/legal";

export const privacidadEn: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "2026-06-01",
  intro:
    "At Clientmetrica SPA we are committed to protecting your personal data. This policy describes how we collect, use, and protect the information you provide when using our services and website.",
  sections: [
    {
      heading: "1. Data controller",
      content:
        "Clientmetrica SPA, a company incorporated in Chile, is the controller of your personal data. For privacy inquiries, you can contact us at privacy@clientmetrica.com.",
    },
    {
      heading: "2. Data we collect",
      content:
        "We collect information you provide directly (name, email, company, role) when completing contact forms or booking meetings. We also collect anonymous website usage data (pages visited, browsing time) through analytics tools.",
    },
    {
      heading: "3. Purpose of processing",
      content:
        "We use your data to: (a) respond to your inquiries and schedule commercial meetings; (b) send you information about our products and services when you authorise it; (c) improve our website and user experience; (d) comply with applicable legal obligations.",
    },
    {
      heading: "4. Legal basis",
      content:
        "Processing of your data is based on your express consent when completing our forms, or on Clientmetrica's legitimate interest in managing commercial relationships.",
    },
    {
      heading: "5. Data sharing",
      content:
        "We do not sell or transfer your personal data to third parties. We may share it with service providers supporting us (CRM, scheduling tools) under confidentiality agreements guaranteeing the same level of protection.",
    },
    {
      heading: "6. Your rights",
      content:
        "You have the right to access, rectify, cancel, and object to the processing of your personal data, in accordance with Chilean Law No. 19,628 on Protection of Private Life. To exercise these rights, write to us at privacy@clientmetrica.com.",
    },
    {
      heading: "7. Data retention",
      content:
        "We retain your personal data while an active commercial relationship exists or until you request deletion, unless the law requires a longer retention period.",
    },
    {
      heading: "8. Security",
      content:
        "We apply appropriate technical and organisational measures to protect your data against unauthorised access, alteration, disclosure, or destruction.",
    },
    {
      heading: "9. Changes to this policy",
      content:
        "We may update this policy periodically. We will notify you of significant changes by email or via a notice on our website.",
    },
    {
      heading: "10. Contact",
      content:
        "For any questions about this privacy policy, contact us at privacy@clientmetrica.com.",
    },
  ],
};
