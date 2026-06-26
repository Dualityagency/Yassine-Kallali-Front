import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import CtaButton from "../ui/CtaButton";
import Link from "next/link";

export default function FeaturedBlog() {
  const locale = useLocale() as "fr" | "en" | "it" | "ar";
  const t = useTranslations("blog");
  const blog = {
    img: "/blog/header.webp",
    fr: {
      badge: "IMPLANTOLOGIE",
      title:
        "Implant immédiat post-extraction : ce que personne ne vous dit avant de partir à l'étranger.",
      desription:
        "Comprendre les protocoles de mise en charge immédiate et les précautions essentielles pour assurer la réussite et la pérennité de votre implant. Découvrez les points clés à connaître avant de vous lancer.",
    },
    en: {
      badge: "IMPLANTOLOGIE",
      title:
        "Implant immédiat post-extraction : ce que personne ne vous dit avant de partir à l'étranger.",
      desription:
        "Comprendre les protocoles de mise en charge immédiate et les précautions essentielles pour assurer la réussite et la pérennité de votre implant. Découvrez les points clés à connaître avant de vous lancer.",
    },
    it: {
      badge: "IMPLANTOLOGIE",
      title:
        "Implant immédiat post-extraction : ce que personne ne vous dit avant de partir à l'étranger.",
      desription:
        "Comprendre les protocoles de mise en charge immédiate et les précautions essentielles pour assurer la réussite et la pérennité de votre implant. Découvrez les points clés à connaître avant de vous lancer.",
    },
    ar: {
      badge: "IMPLANTOLOGIE",
      title:
        "Implant immédiat post-extraction : ce que personne ne vous dit avant de partir à l'étranger.",
      desription:
        "Comprendre les protocoles de mise en charge immédiate et les précautions essentielles pour assurer la réussite et la pérennité de votre implant. Découvrez les points clés à connaître avant de vous lancer.",
    },
  };
  return (
    <div
      className={cn("w-full px-6 lg:px-20 pt-6.5 lg:pt-15.75 pb-6 lg:pb-13.75")}
      style={{
        backgroundImage: `url(${blog.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Badge variant={"gray"} className="mb-6.25 lg:mb-7.75">
        {blog[locale]?.badge}
      </Badge>
      <h1 className="w-full lg:w-[81%] title1 text-white! mb-4.75 lg:mb-2.25">
        {blog[locale]?.title}
      </h1>
      <p className="paragraph1 text-white! mb-6 lg:mb-7.5">
        {blog[locale]?.desription}
      </p>
      <Link href={"/blog/implant-immediat-post-extraction"}>
        <CtaButton>{t("cta-read")}</CtaButton>
      </Link>
    </div>
  );
}
