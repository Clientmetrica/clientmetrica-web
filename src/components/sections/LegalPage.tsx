import type { LegalDocument } from "@/types/legal";

interface LegalPageProps {
  doc: LegalDocument;
}

export default function LegalPage({ doc }: LegalPageProps) {
  const updated = new Date(doc.lastUpdated).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-brand-navy">{doc.title}</h1>
        <p className="mt-2 text-sm text-brand-navy/50">Última actualización: {updated}</p>
        <p className="mt-6 text-base text-brand-navy/70 leading-relaxed">{doc.intro}</p>
      </header>

      <div className="space-y-8">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-heading text-lg font-bold text-brand-navy mb-2">
              {section.heading}
            </h2>
            <p className="text-base text-brand-navy/70 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
