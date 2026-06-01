// Renders nothing until a testimonial is approved and added.
// To activate: pass a quote prop with text, author, role, company.

export interface HomepageQuote {
  text: string;
  author: string;
  role: string;
  company: string;
}

interface HomepageSocialProofProps {
  quote?: HomepageQuote;
}

export default function HomepageSocialProof({ quote }: HomepageSocialProofProps) {
  if (!quote) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote>
          <p className="font-heading text-xl sm:text-2xl font-bold text-brand-navy leading-snug mb-6">
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className="text-sm text-brand-navy/50">
            <span className="font-semibold text-brand-navy">{quote.author}</span>
            {" · "}
            {quote.role}, {quote.company}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
