import { blog } from "@/types/api/blog";
import { useCallback, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 6;
export const ALL_CATEGORIES = "all";

export function useBlogFilterPagination(blogs: blog[] | undefined) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryList = useMemo(() => {
    if (!blogs?.length) return [];

    const byId = new Map<string, string>();
    for (const item of blogs) {
      if (item.category?.id && item.category.name) {
        byId.set(item.category.id, item.category.name);
      }
    }

    return [...byId.entries()]
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    if (!blogs?.length) return [];
    if (selectedCategory === ALL_CATEGORIES) return blogs;
    return blogs.filter((item) => item.category?.id === selectedCategory);
  }, [selectedCategory, blogs]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE),
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedBlogs = useMemo(
    () =>
      filteredBlogs.slice(
        (safePage - 1) * ITEMS_PER_PAGE,
        safePage * ITEMS_PER_PAGE,
      ),
    [filteredBlogs, safePage],
  );

  const selectCategory = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  }, []);

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages) return;
      setCurrentPage(page);
    },
    [totalPages],
  );

  return {
    categoryList,
    selectedCategory,
    selectCategory,
    paginatedBlogs,
    filteredCount: filteredBlogs.length,
    currentPage: safePage,
    totalPages,
    goToPage,
  };
}

export function getPaginationRange(
  current: number,
  total: number,
): (number | "ellipsis")[] {
  if (total <= 1) return total === 1 ? [1] : [];
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages = new Set<number>([1, total]);
  for (let page = current - 1; page <= current + 1; page += 1) {
    if (page >= 1 && page <= total) pages.add(page);
  }

  const sorted = [...pages].sort((a, b) => a - b);
  const result: (number | "ellipsis")[] = [];

  for (let index = 0; index < sorted.length; index += 1) {
    if (index > 0 && sorted[index] - sorted[index - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(sorted[index]);
  }

  return result;
}
