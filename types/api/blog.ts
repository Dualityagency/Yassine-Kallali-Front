export interface blogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface blog {
  id: string;
  slug: string;
  title: string;
  content: string;
  lire?: string | null;
  date?: string | null;
  description?: string | null;
  image?: string | null;
  metadata?: Record<string, unknown> | null;
  publishedAt?: string | null;
  categoryId?: string | null;
  category?: blogCategory | null;
  createdAt: string;
  updatedAt: string;
}

export interface blogTranslation {
  title: string;
  slug: string;
  content: string;
  lire?: string;
  date?: string;
  description?: string;
}

export type blogTranslations = Record<
  "en" | "fr" | "ar" | "it",
  blogTranslation
>;

export interface category {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface categoryTranslation {
  name: string;
  slug: string;
}

export type categoryTranslations = Record<
  "en" | "fr" | "ar" | "it",
  categoryTranslation
>;
