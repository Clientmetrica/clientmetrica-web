import { getLocale } from "next-intl/server";
import "./globals.css";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale} className="h-full">
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
