"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import { Link } from "@/i18n/navigation";
import { useBlogs } from "@/hooks/useBlogs";

export default function FeaturedBlog() {
  const t = useTranslations("blog");
  const { blogs } = useBlogs();

  const featured = blogs.data?.[0];

  if (blogs.isLoading || !featured) {
    return null;
  }

  const description = featured.description ?? "";

  return (
    <div
      className={cn("w-full px-6 lg:px-20 pt-6.5 lg:pt-15.75 pb-6 lg:pb-13.75")}
      style={{
        backgroundImage: `url(${featured.image ?? "/blog/header.webp"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Badge variant={"gray"} className="mb-6.25 lg:mb-7.75">
        {featured.category?.name ?? ""}
      </Badge>
      <h1 className="w-full lg:w-[81%] title1 text-white! mb-4.75 lg:mb-2.25">
        {featured.title}
      </h1>
      {description && (
        <p className="paragraph1 text-white! mb-6 lg:mb-7.5">{description}</p>
      )}
      <Link href={`/blog/${featured.slug}`}>
        <CtaButton>{t("cta-read")}</CtaButton>
      </Link>
    </div>
  );
}
