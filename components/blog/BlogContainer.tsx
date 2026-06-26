"use client";
import { useLocale, useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import { useEffect, useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import { ChevronRight } from "lucide-react";

const categoryList = {
  en: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
  fr: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
  it: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
  ar: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
};

export default function BlogContainer() {
  const t = useTranslations("blog");
  const locale = useLocale() as "en" | "ar" | "fr" | "it";

  const [blogs, setBlogs] = useState([
    {
      img: "/blog/header.webp",
      fr: {
        badge: "1IMPLANTOLOGIE",
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      img: "/blog/header.webp",
      fr: {
        badge: "2IMPLANTOLOGIE",
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
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const goTo = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "Tous") return blogs;
    return blogs.filter((blog) => blog[locale].badge === selectedCategory);
  }, [blogs, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="container-x">
      {/* Select Category */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-x-2.25 gap-y-3.25 mb-12 lg:mb-15.25">
        <h4 className="font-medium text-[#959595] text-[15px] lg:text-[18px] leading-[100%]">
          {t("filter")}
        </h4>

        <div className="flex flex-wrap gap-x-[11.52px] lg:gap-x-4.25 gap-y-3">
          {["Tous",...categoryList[locale]].map((category, index) => (
            <Badge variant={"default"} key={index} onClick={()=>{setSelectedCategory("category")}}>
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Blogs */}
      <div className="flex flex-wrap lg:gap-x-10.75 gap-y-6.25 lg:gap-y-12.25 mb-12 lg:mb-17">
        {paginatedBlogs?.map((blog, index) => (
          <BlogCard key={index} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-x-[9.39px] lg:gap-x-3">
          {/* Flesh Left */}
          <div
            className="group w-8.75 lg:w-11.25 h-[32.8px] lg:h-10.5 flex justify-center items-center bg-white border-[0.78px] lg:border-[1.45px] border-primary rounded-[3.91px] lg:rounded-[5px] hover:bg-primary cursor-pointer"
            onClick={() => goTo(currentPage - 1)}
          >
            <ChevronRight className="w-[16px] group-hover:text-white rotate-180" />
          </div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (page, index) => (
              <div
                className={`group hover:text-white hover:bg-primary w-8.75 lg:w-11.25 h-[32.8px] lg:h-10.5 flex justify-center items-center bg-white border-[0.78px] lg:border-[1.45px] border-primary rounded-[3.91px] lg:rounded-[5px]  cursor-pointer  ${
                  currentPage === page
                    ? "bg-primary! text-white "
                    : ""
                }`}
                key={index}
                onClick={() => goTo(page)}
              >
                {page}
              </div>
            ),
          )}

          {/* Flesh Right */}
          <div
            className="group w-8.75 lg:w-11.25 h-[32.8px] lg:h-10.5 flex justify-center items-center bg-white border-[0.78px] lg:border-[1.45px] border-primary rounded-[3.91px] lg:rounded-[5px] hover:bg-primary cursor-pointer"
            onClick={() => goTo(currentPage + 1)}
          >
            <ChevronRight className="w-[16px] group-hover:text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
