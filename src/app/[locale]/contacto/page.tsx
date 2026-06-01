// src/app/[locale]/contacto/page.tsx
//
// 3-step contact funnel:
//   Step 1 – Product interest selection + optional company size
//   Step 2 – Contact details (4 fields max)
//   Step 3 – HubSpot Meetings embed (inline, no redirect)
//
// State machine lives in ContactFunnel (client component).
// This file is a thin server wrapper for metadata + layout.

import type { Metadata } from "next";
import ContactFunnel from "@/components/sections/ContactFunnel";

export const metadata: Metadata = {
  title: "Contacto | Clientmetrica",
  description: "Agenda una demo o solicita que te contactemos. Sin compromisos.",
  openGraph: {
    title: "Hablemos | Clientmetrica",
    description: "Agenda una demo con el equipo de Clientmetrica.",
  },
};

export default async function ContactoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-white">
      <ContactFunnel locale={locale} />
    </main>
  );
}
