import BlogContent from "@/components/blog/BlogContent";
import PrendreContact from "@/components/blog/PrendreContact";
import QA from "@/components/layout/QA";
import { getTranslations } from "next-intl/server";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const t = await getTranslations("blog-details");
  const qaList = t.raw("qa.qaList");

  return (
    <div className="flex flex-col gap-y-12 lg:gap-y-18.5">
      <BlogContent slug={slug} />
      <QA badge={t("qa.badge")} title={t("qa.title")} qaList={qaList} />
      <PrendreContact />
    </div>
  );
}
