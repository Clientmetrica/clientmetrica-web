import type { ServiceContent, ServiceSlug } from "@/types/service";
import { implementacionEs } from "./implementation.es";
import { implementationEn } from "./implementation.en";

type LocaleMap = Record<string, ServiceContent>;

const SERVICES: Record<ServiceSlug, LocaleMap> = {
  implementacion: { es: implementacionEs, en: implementationEn },
};

export function getService(slug: ServiceSlug, locale: string): ServiceContent | null {
  const service = SERVICES[slug];
  if (!service) return null;
  return service[locale] ?? service["es"] ?? null;
}

export const SERVICE_SLUGS: ServiceSlug[] = ["implementacion"];
