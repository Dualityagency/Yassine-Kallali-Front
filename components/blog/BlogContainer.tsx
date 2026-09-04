"use client";

import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";
import { useBlogs } from "@/hooks/useBlogs";
import {
  ALL_CATEGORIES,
  useBlogFilterPagination,
} from "@/hooks/useBlogFilterPagination";

export default function BlogContainer() {
  const t = useTranslations("blog");
  const { blogs } = useBlogs();

  const {
    categoryList,
    selectedCategory,
    selectCategory,
    paginatedBlogs,
    filteredCount,
    currentPage,
    totalPages,
    goToPage,
  } = useBlogFilterPagination(blogs.data);

  if (blogs.isLoading) {
    return (
      <div className="container-x py-12 text-center text-[#959595]">
        {t("loading")}
      </div>
    );
  }

  if (blogs.isError) {
    return (
      <div className="container-x py-12 text-center text-[#959595]">
        {t("error")}
      </div>
    );
  }

  return (
    <div className="container-x">
      <div className="flex flex-col lg:flex-row lg:items-center gap-x-2.25 gap-y-3.25 mb-12 lg:mb-15.25">
        <h4 className="font-medium text-[#959595] text-[15px] lg:text-[18px] leading-[100%]">
          {t("filter")}
        </h4>

        <div className="flex flex-wrap gap-x-[11.52px] lg:gap-x-4.25 gap-y-3">
          <Badge
            variant={selectedCategory === ALL_CATEGORIES ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => selectCategory(ALL_CATEGORIES)}
          >
            {t("filter-all")}
          </Badge>

          {categoryList.map(({ id, name }) => (
            <Badge
              key={id}
              variant={selectedCategory === id ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => selectCategory(id)}
            >
              {name}
            </Badge>
          ))}
        </div>
      </div>

      {filteredCount === 0 ? (
        <div className="py-12 text-center text-[#959595]">{t("empty")}</div>
      ) : (
        <>
          <div className="flex flex-wrap lg:gap-x-10.75 gap-y-6.25 lg:gap-y-12.25 mb-12 lg:mb-17">
            {paginatedBlogs.map((item) => (
              <BlogCard
                key={item.slug}
                slug={item.slug}
                img={item.image ?? "/blog/header.webp"}
                badge={item.category?.name ?? ""}
                title={item.title}
                date={item.date ?? ""}
                readTime={item.lire ?? ""}
              />
            ))}
          </div>

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </>
      )}
    </div>
  );
}
