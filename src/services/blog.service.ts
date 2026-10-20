import { apiClient } from "@/lib/api-client";
import { BlogPost } from "@/types/blogs.types";
import { BLOG_POSTS } from "@/data/blogs.data";

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  excerpt?: string;
  shortDescription?: string;
  content: string;
  author: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  keywords?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  createdAt: string;
  updatedAt: string;
}

export const blogService = {
  getAllBlogs: async (): Promise<BlogItem[]> => {
    try {
      const response = await apiClient.get("/blog");
      return Array.isArray(response.data) ? response.data : response.data?.data || [];
    } catch {
      return [];
    }
  },

  getBlogById: async (id: string): Promise<BlogItem | null> => {
    try {
      const response = await apiClient.get(`/blog/${id}`);
      return response.data;
    } catch {
      return null;
    }
  },

  /**
   * API-First fetch with local data fallback as requested by the user:
   * "api first then, data folder (api theke na pele jeno data folder theke data niye blogs render hoy)"
   */
  getBlogsWithFallback: async (): Promise<BlogPost[]> => {
    try {
      const apiBlogs = await blogService.getAllBlogs();
      if (apiBlogs && apiBlogs.length > 0) {
        // Map API blogs into standard BlogPost format
        return apiBlogs.map((b, idx) => ({
          id: b.id || `api-${idx}`,
          slug: b.slug || `blog-${idx}`,
          title: b.title || "Creative Design Insights",
          badgeTag: b.title || "Creatibuz Insights",
          category: "Design & Technology",
          excerpt: b.excerpt || b.content?.slice(0, 160) || "",
          content: b.content || "",
          image: b.coverImage || `/blogs/blog-${(idx % 4) + 1}.png`,
          alt: b.title,
          author: {
            id: "api-author",
            name: b.author || "Md Abdul Hakim",
            role: "Founder & CEO",
            image: "/Team/ceo.png",
            badgeIcon: "/creatibuz-symbol.png",
          },
          publishedAt: b.createdAt ? new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Recent",
          readingTime: "5 min read",
        }));
      }
    } catch {
      // Ignore API failure and seamlessly fallback to local curated data
    }
    return BLOG_POSTS;
  },

  getBlogBySlugWithFallback: async (slug: string): Promise<BlogPost | null> => {
    const local = BLOG_POSTS.find((b) => b.slug === slug);
    if (local) return local;

    try {
      const apiBlogs = await blogService.getAllBlogs();
      const found = apiBlogs.find((b) => b.slug === slug || b.id === slug);
      if (found) {
        return {
          id: found.id,
          slug: found.slug,
          title: found.title,
          badgeTag: found.title,
          category: "Design & Technology",
          excerpt: found.excerpt || found.content?.slice(0, 160) || "",
          content: found.content || "",
          image: found.coverImage || "/blogs/blog-1.png",
          alt: found.title,
          author: {
            id: "api-author",
            name: found.author || "Md Abdul Hakim",
            role: "Founder & CEO",
            image: "/Team/ceo.png",
            badgeIcon: "/creatibuz-symbol.png",
          },
          publishedAt: "Recent",
          readingTime: "5 min read",
        };
      }
    } catch {
      // Fallback
    }

    return null;
  },

  createBlog: async (data: Partial<BlogItem>): Promise<BlogItem> => {
    const response = await apiClient.post("/blog", data);
    return response.data;
  },

  updateBlog: async (id: string, data: Partial<BlogItem>): Promise<BlogItem> => {
    const response = await apiClient.patch(`/blog/${id}`, data);
    return response.data;
  },

  deleteBlog: async (id: string): Promise<void> => {
    const response = await apiClient.delete(`/blog/${id}`);
    return response.data;
  },
};
