import { redirect } from "next/navigation";

export default async function ProductRedirect({
  params,
}: {
  params: Promise<{ locale: string; product: string }>;
}) {
  const { locale, product } = await params;
  redirect(`/${locale}/productos/${product}`);
}
