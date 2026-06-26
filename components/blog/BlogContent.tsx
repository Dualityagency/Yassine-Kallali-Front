import { Badge } from "../ui/badge";
import Image from "next/image";
import { getBlogBySlug } from "@/data/blogs";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type BlogContentProps = {
  slug: string;
};

export default async function BlogContent({ slug }: BlogContentProps) {
  const locale = (await getLocale()) as "en" | "ar" | "fr" | "it";
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const content = blog[locale];

  return (
    <div>
      <div className="container-x">
        <Badge variant={"gray"} className="mb-5.5 lg:mb-8.75">
          {content.badge}
        </Badge>
        <h1 className="title1 mb-3 lg:mb-12">{content.title}</h1>
      </div>
      <Image
        src={blog.img}
        alt={content.title}
        width={5000}
        height={5000}
        quality={100}
        className="w-full h-[563px] object-cover"
        priority={true}
      />
      <div
        className="w-full lg:w-[60%] mx-auto px-6 lg:px-0  mt-8 lg:mt-12.5 [&_p]:mb-4 [&_p]:text-gray [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-semibold [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: content.htmlContent }}
      />
    </div>
  );
}
