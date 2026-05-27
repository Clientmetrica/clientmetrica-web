// src/components/sections/ContactFunnel.tsx
"use client";
//
// 3-step contact funnel (client component — uses useState).
//
// Step 1: product interest selection
// Step 2: contact details form
// Step 3: HubSpot Meetings embed (inline)
//
// HubSpot wiring:
//   - Form submissions go to HubSpot Forms API (server route /api/contact)
//   - Meeting embed uses data-hs-meetings-embed with pre-fill params
//   - Set NEXT_PUBLIC_HUBSPOT_PORTAL_ID in .env.local

import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Product = "maty" | "juanito" | "roboto";
type Step = 1 | 2 | 3;

interface ContactDetails {
  name: string;
  email: string;
  company: string;
  role: string;
}

interface Props {
  locale: string;
}

// ─── Copy (inline to avoid extra i18n wiring at this stage) ──────────────────
// TODO: move to es.json / en.json once translation workflow is established.

const COPY = {
  es: {
    headline: "Hablemos.",
    subheadline:
      "Sin compromisos. Cuéntanos en qué producto tienes interés y te agendamos una llamada.",
    step1Title: "¿Qué producto te interesa?",
    step1Sub: "Puedes seleccionar más de uno.",
    step2Title: "Tus datos de contacto",
    step2Sub: "Solo lo esencial. Sin spam.",
    name: "Nombre",
    email: "Email corporativo",
    company: "Empresa",
    role: "Cargo",
    bookCta: "Agendar una llamada →",
    asyncCta: "Prefiero que me contacten",
    step3Title: "Elige un horario",
    step3Sub: "La llamada dura 30 minutos. Te confirmaremos por email.",
    back: "← Volver",
    privacyNote: "Tus datos son tratados conforme a nuestra",
    privacyLink: "política de privacidad",
    thankYouTitle: "¡Listo!",
    thankYouBody: "Recibimos tu solicitud. Te contactaremos en menos de 24 horas hábiles.",
  },
  en: {
    headline: "Let's talk.",
    subheadline:
      "No commitments. Tell us which product you're interested in and we'll schedule a call.",
    step1Title: "Which product are you interested in?",
    step1Sub: "You can select more than one.",
    step2Title: "Your contact details",
    step2Sub: "Only the essentials. No spam.",
    name: "Name",
    email: "Work email",
    company: "Company",
    role: "Role / title",
    bookCta: "Schedule a call →",
    asyncCta: "I'd prefer to be contacted",
    step3Title: "Pick a time",
    step3Sub: "The call is 30 minutes. We'll confirm by email.",
    back: "← Back",
    privacyNote: "Your data is handled according to our",
    privacyLink: "privacy policy",
    thankYouTitle: "You're all set!",
    thankYouBody: "We received your request and will be in touch within 24 business hours.",
  },
} as const;

const PRODUCTS: { slug: Product; label: string; color: string }[] = [
  { slug: "maty", label: "MATY", color: "border-brand-sky    text-brand-sky    bg-brand-sky/10" },
  {
    slug: "juanito",
    label: "Juanito",
    color: "border-brand-duotone2 text-brand-duotone2 bg-brand-duotone2/10",
  },
  {
    slug: "roboto",
    label: "Roboto",
    color: "border-brand-navy   text-brand-navy   bg-brand-navy/10",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function ContactFunnel({ locale }: Props) {
  const t = locale === "en" ? COPY.en : COPY.es;

  const [step, setStep] = useState<Step>(1);
  const [selected, setSelected] = useState<Product[]>([]);
  const [details, setDetails] = useState<ContactDetails>({
    name: "",
    email: "",
    company: "",
    role: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [asyncSent, setAsyncSent] = useState(false); // "prefer to be contacted" flow

  // Toggle product selection
  function toggleProduct(slug: Product) {
    setSelected((prev) => (prev.includes(slug) ? prev.filter((p) => p !== slug) : [...prev, slug]));
  }

  // Submit to /api/contact (Next.js route handler — see below)
  async function submitToHubSpot(scheduleCall: boolean) {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, products: selected, locale, scheduleCall }),
      });
    } catch {
      // Non-blocking — HubSpot submission failure shouldn't block the user
      console.error("HubSpot submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleBookCall() {
    await submitToHubSpot(true);
    setStep(3);
  }

  async function handleAsync() {
    await submitToHubSpot(false);
    setAsyncSent(true);
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      {/* Page headline (always visible) */}
      <div className="mb-12">
        <h1 className="font-heading font-bold text-brand-navy text-4xl lg:text-5xl mb-4">
          {t.headline}
        </h1>
        <p className="font-body text-gray-500 text-lg">{t.subheadline}</p>
      </div>

      {/* ── Step indicator ── */}
      {!asyncSent && (
        <div className="flex items-center gap-3 mb-10">
          {([1, 2, 3] as Step[]).map((n) => (
            <div
              key={n}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-heading font-bold transition-colors ${
                step === n
                  ? "bg-brand-orange text-white"
                  : step > n
                    ? "bg-brand-orange/20 text-brand-orange"
                    : "bg-gray-100 text-gray-400"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
      )}

      {/* ── Step 1: product selection ── */}
      {step === 1 && !asyncSent && (
        <div>
          <h2 className="font-heading font-bold text-brand-navy text-xl mb-2">{t.step1Title}</h2>
          <p className="font-body text-gray-400 text-sm mb-8">{t.step1Sub}</p>

          <div className="flex gap-4 mb-10">
            {PRODUCTS.map(({ slug, label, color }) => (
              <button
                key={slug}
                onClick={() => toggleProduct(slug)}
                className={`px-6 py-3 rounded-full border-2 font-heading font-bold text-sm transition-all ${
                  selected.includes(slug)
                    ? color
                    : "border-gray-200 text-gray-400 hover:border-gray-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={selected.length === 0}
            className="bg-brand-orange text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t.bookCta}
          </button>
        </div>
      )}

      {/* ── Step 2: contact details ── */}
      {step === 2 && !asyncSent && (
        <div>
          <h2 className="font-heading font-bold text-brand-navy text-xl mb-2">{t.step2Title}</h2>
          <p className="font-body text-gray-400 text-sm mb-8">{t.step2Sub}</p>

          <div className="grid grid-cols-1 gap-5 mb-8">
            {(["name", "email", "company", "role"] as const).map((field) => (
              <div key={field}>
                <label className="font-body text-sm text-gray-500 mb-1 block">{t[field]}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={details[field]}
                  onChange={(e) => setDetails({ ...details, [field]: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 font-body text-brand-navy focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Privacy note */}
          <p className="font-body text-xs text-gray-400 mb-8">
            {t.privacyNote}{" "}
            <a href={`/${locale}/privacidad`} className="underline">
              {t.privacyLink}
            </a>
            .
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleBookCall}
              disabled={submitting || !details.name || !details.email || !details.company}
              className="bg-brand-orange text-white font-heading font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {submitting ? "..." : t.bookCta}
            </button>
            <button
              onClick={handleAsync}
              disabled={submitting || !details.name || !details.email || !details.company}
              className="text-gray-400 font-body text-sm hover:text-brand-navy transition-colors"
            >
              {t.asyncCta}
            </button>
          </div>

          <button
            onClick={() => setStep(1)}
            className="mt-6 text-gray-400 text-sm font-body hover:text-brand-navy"
          >
            {t.back}
          </button>
        </div>
      )}

      {/* ── Step 3: HubSpot Meetings embed ── */}
      {step === 3 && !asyncSent && (
        <div>
          <h2 className="font-heading font-bold text-brand-navy text-xl mb-2">{t.step3Title}</h2>
          <p className="font-body text-gray-400 text-sm mb-8">{t.step3Sub}</p>

          {/* HubSpot Meetings embed
              Replace the data-url with your actual HubSpot Meetings link.
              The ?firstname, ?email params pre-fill the booking form.
              See: https://knowledge.hubspot.com/meetings/share-a-meeting-link */}
          <div
            className="meetings-iframe-container"
            data-src={`https://meetings.hubspot.com/clientmetrica?embed=true&firstname=${encodeURIComponent(details.name)}&email=${encodeURIComponent(details.email)}`}
          />
          {/* TODO: load HubSpot Meetings script dynamically via next/script
              <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" />
              Uncomment once HubSpot portal ID is configured. */}

          <button
            onClick={() => setStep(2)}
            className="mt-8 text-gray-400 text-sm font-body hover:text-brand-navy"
          >
            {t.back}
          </button>
        </div>
      )}

      {/* ── Async thank-you state ── */}
      {asyncSent && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-brand-orange text-2xl">✓</span>
          </div>
          <h2 className="font-heading font-bold text-brand-navy text-2xl mb-3">
            {t.thankYouTitle}
          </h2>
          <p className="font-body text-gray-500">{t.thankYouBody}</p>
        </div>
      )}
    </div>
  );
}
