# i18n Standards — Clientmetrica Web

## Setup

- **Library:** next-intl
- **Primary locale:** `es` (Spanish — LATAM + Spain)
- **Secondary locale:** `en` (English — global outbound)
- **Translation files:** `src/messages/es.json` and `src/messages/en.json`
- **Config:** `src/i18n/request.ts`
- **URL structure:** `/es/...` and `/en/...`

## Rules

### Always update both languages simultaneously

Never add a key to one file without adding it to the other.
Incomplete translations cause build warnings and broken UI.

### Key naming conventions

- Use `camelCase` for keys
- Group by page or feature, then by element
- Be descriptive but concise

```json
// ✅ Good
{
  "hero": {
    "headline": "...",
    "subheadline": "...",
    "ctaPrimary": "..."
  },
  "nav": {
    "home": "...",
    "products": "..."
  }
}
```

```json
// ❌ Bad — too flat, not grouped
{
  "heroTitle": "...",
  "button1": "..."
}
```

### Using translations in components

Always use the `useTranslations()` hook — never hardcode user-facing strings.

```tsx
// ✅ Good
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return <h1>{t("headline")}</h1>;
}
```

```tsx
// ❌ Bad
export default function Hero() {
  return <h1>Agentes de IA para empresas</h1>;
}
```

### Product names

Product names (MATY, Juanito, Roboto) are proper nouns — do not translate them.
Store them in translation files for consistency but keep the value identical in both languages.

```json
// es.json and en.json — same value
{
  "products": {
    "maty": "MATY",
    "juanito": "Juanito",
    "roboto": "Roboto"
  }
}
```

### Locale fallback

Default locale is `es`. If a locale cannot be determined, fall back to Spanish.
This is configured in `src/i18n/request.ts` via `?? "es"`.

### Adding a new page

1. Create the page at `src/app/[locale]/your-page/page.tsx`
2. Add a new top-level key to both `es.json` and `en.json`
3. Use `useTranslations("your-page")` inside the component

### Date and number formatting

Use next-intl's built-in formatters — never `toLocaleString()` directly.

```tsx
const format = useFormatter();
format.dateTime(date, { dateStyle: "long" }); // respects locale automatically
format.number(1234567, { style: "currency", currency: "CLP" });
```
