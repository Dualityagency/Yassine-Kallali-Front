"use client";

import { getBlogs } from "@/services/blogService";
import { appLocale } from "@/types/api/locale";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

export const useBlogs = () => {
  const locale = useLocale() as appLocale;

  const blogs = useQuery({
    queryKey: ["blogs", locale],
    queryFn: () => getBlogs(locale),
  });

  return { blogs, locale };
};
