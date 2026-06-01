import type { ServiceContent } from "@/types/service";

interface ServiceFAQProps {
  service: ServiceContent;
}

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy mb-10">
          {service.faqHeadline}
        </h2>

        <div className="space-y-6">
          {service.faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h3 className="font-heading text-base font-bold text-brand-navy mb-2">
                {faq.question}
              </h3>
              <p className="text-sm text-brand-navy/70 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
