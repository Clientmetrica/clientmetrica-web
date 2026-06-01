import { redirect } from "next/navigation";
export default async function ServicesRedirect({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  redirect(`/${locale}/servicios/${service}`);
}
