// src/components/sections/ProductIntegrations.tsx
// S6 – Integrations. Shared across all product pages.
// TODO: Replace placeholder names with actual logo images in /public/logos/.

export default function ProductIntegrations() {
  const integrations = ["Microsoft 365", "Azure", "HubSpot", "Google Workspace", "Teams"];

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-gray-400 text-sm text-center uppercase tracking-widest mb-10">
          Se integra con tu stack actual
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {integrations.map((name) => (
            // TODO: swap <span> for <img src={`/logos/${slug}.svg`} alt={name} />
            <span
              key={name}
              className="font-body text-gray-400 text-sm font-medium px-4 py-2 border border-gray-100 rounded-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
