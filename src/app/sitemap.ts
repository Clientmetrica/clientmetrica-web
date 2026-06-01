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
