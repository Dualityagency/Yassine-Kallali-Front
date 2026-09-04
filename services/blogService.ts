import axiosInstance from "@/lib/axios";
import { blog, category } from "@/types/api/blog";
import { appLocale } from "@/types/api/locale";

export const getBlogs = async (locale: appLocale): Promise<blog[]> => {
  const response = await axiosInstance.get<blog[]>("/blogs", {
    params: { locale },
  });
  return response.data;
};

export const getBlogById = async (
  id: string,
  locale: appLocale,
): Promise<blog> => {
  const response = await axiosInstance.get<blog>(`/blogs/${id}`, {
    params: { locale },
  });
  return response.data;
};

export const getBlogBySlug = async (
  slug: string,
  locale: appLocale,
): Promise<blog> => {
  const response = await axiosInstance.get<blog>(`/blogs/slug/${slug}`, {
    params: { locale },
  });
  return response.data;
};

export const getCategories = async (
  locale: appLocale,
): Promise<category[]> => {
  const response = await axiosInstance.get<category[]>("/categories", {
    params: { locale },
  });
  return response.data;
};
