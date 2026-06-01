import { redirect } from "next/navigation";
import { SLUG_MAP } from "@/data/use-cases";
export default async function UseCaseRedirect({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const esSlug = SLUG_MAP[slug] ?? slug;
  redirect(`/${locale}/casos-de-uso/${esSlug}`);
}
