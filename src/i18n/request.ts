import { getRequestConfig } from "next-intl/server";

// Turbopack requires statically analyzable imports — no template literals.
const MESSAGE_LOADERS: Record<string, () => Promise<{ default: Record<string, unknown> }>> = {
  es: () => import("@/messages/es.json"),
  en: () => import("@/messages/en.json"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? "es";
  const loader = MESSAGE_LOADERS[locale] ?? MESSAGE_LOADERS["es"];
  return {
    locale,
    messages: (await loader()).default,
  };
});
