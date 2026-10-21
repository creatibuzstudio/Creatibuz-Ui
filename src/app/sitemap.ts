import { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { blogService } from "@/services/blog.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/career`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/faqs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  try {
    const blogs = await blogService.getBlogsWithFallback();
    const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: post.publishedAt || now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...coreRoutes, ...blogRoutes];
  } catch {
    return coreRoutes;
  }
}
