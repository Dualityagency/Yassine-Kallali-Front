"use client";

import { getBlogBySlug } from "@/services/blogService";
import { appLocale } from "@/types/api/locale";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useBlog = (slug: string) => {
  const locale = useLocale() as appLocale;

  const blog = useQuery({
    queryKey: ["blog", locale, slug],
    queryFn: () => getBlogBySlug(slug, locale),
    enabled: Boolean(slug),
  });

  return { blog, locale };
};
