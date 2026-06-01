import type { MetadataRoute } from "next";

const BASE_URL = "https://clientmetrica.com";
const LOCALES = ["es", "en"] as const;

function url(path: string) {
  return `${BASE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    es: string;
    en: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { es: "/es", en: "/en", priority: 1.0, changeFrequency: "weekly" },
    { es: "/es/productos", en: "/en/products", priority: 0.9, changeFrequency: "weekly" },
    { es: "/es/nosotros", en: "/en/about", priority: 0.7, changeFrequency: "monthly" },
    { es: "/es/contacto", en: "/en/contact", priority: 0.8, changeFrequency: "monthly" },
    // AI Agent product pages
    { es: "/es/productos/maty", en: "/en/products/maty", priority: 0.9, changeFrequency: "weekly" },
    {
      es: "/es/productos/juanito",
      en: "/en/products/juanito",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      es: "/es/productos/roboto",
      en: "/en/products/roboto",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    // Services
    {
      es: "/es/servicios/implementacion",
      en: "/en/services/implementacion",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    // Blog
    { es: "/es/blog", en: "/en/blog", priority: 0.7, changeFrequency: "weekly" },
    {
      es: "/es/blog/que-son-los-agentes-de-ia",
      en: "/en/blog/what-are-ai-agents",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    // Use cases
    { es: "/es/casos-de-uso", en: "/en/use-cases", priority: 0.7, changeFrequency: "monthly" },
    {
      es: "/es/casos-de-uso/mineria",
      en: "/en/use-cases/mining",
      priority: 0.6,
      changeFrequency: "monthly",
    },
    // Legal
    { es: "/es/privacidad", en: "/en/privacy", priority: 0.3, changeFrequency: "yearly" },
    { es: "/es/terminos", en: "/en/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return staticRoutes.flatMap(({ es: esPath, en: enPath, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: url(locale === "es" ? esPath : enPath),
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          es: url(esPath),
          en: url(enPath),
        },
      },
    }))
  );
}
