import type { Metadata } from "next";
import ProductCTA from "@/components/sections/ProductCTA";

export const metadata: Metadata = { title: "Partners" };

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";
  return (
    <>
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Partners
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {isEs ? "Ecosistema de Partners" : "Partner Ecosystem"}
          </h1>
          <p className="mt-4 text-white/50 text-sm italic">
            {isEs ? "Contenido disponible próximamente." : "Content coming soon."}
          </p>
        </div>
      </section>
      <ProductCTA />
    </>
  );
}
