import type { Metadata } from "next";
import ProductCTA from "@/components/sections/ProductCTA";

export const metadata: Metadata = { title: "Carreras" };

export default async function CarrerasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === "es";
  return (
    <>
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            {isEs ? "Carreras" : "Careers"}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {isEs ? "Únete al equipo" : "Join the team"}
          </h1>
          <p className="mt-4 text-white/50 text-sm italic">
            {isEs
              ? "No tenemos posiciones abiertas en este momento. Vuelve pronto."
              : "No open positions at the moment. Check back soon."}
          </p>
        </div>
      </section>
      <ProductCTA />
    </>
  );
}
