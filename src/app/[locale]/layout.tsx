import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

// TODO: Uncomment once Futura PT WOFF2 files are placed in public/fonts/
// import localFont from "next/font/local";
// const futuraPT = localFont({
//   src: [
//     { path: "../../../public/fonts/FuturaPT-Regular.woff2", weight: "400" },
//     { path: "../../../public/fonts/FuturaPT-Bold.woff2", weight: "700" },
//   ],
//   variable: "--font-heading",
//   display: "swap",
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: { template: "%s — Clientmetrica", default: "Clientmetrica" },
    alternates: {
      languages: {
        es: "/es",
        en: "/en",
      },
    },
    openGraph: {
      locale: locale === "en" ? "en_US" : "es_CL",
      siteName: "Clientmetrica",
    },
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={`${inter.variable} flex flex-col flex-1`}>
        <Nav locale={locale} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}
