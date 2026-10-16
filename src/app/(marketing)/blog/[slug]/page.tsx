import { redirect } from "next/navigation";

interface BlogSlugRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogSlugRedirectPage({
  params,
}: BlogSlugRedirectProps) {
  const { slug } = await params;
  redirect(`/blogs/${slug}`);
}
