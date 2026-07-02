import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /**
   * STATIC PAGES
   * These are normal pages that always exist in the app
   */
  const routes = [
    "", // Home page
    "/MentionsLegales", 
    "/implant-immediat", 
    "/esthetique-dentaire", 
    "/blog", 
    "/docteur",
    "/contact", 
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));


  /*
  const res = await fetch(`${process.env.API_URL}/blogs`, {
    next: { revalidate: 3600 },
  });

  const blogs = await res.json();

  const blogPages = blogs.map((blog: any) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
  */

  // Return only static pages for now
  return staticPages;
}