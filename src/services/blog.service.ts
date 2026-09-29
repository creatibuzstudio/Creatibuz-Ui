import { apiClient } from "@/lib/api-client";

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  excerpt?: string;
  content: string;
  author: string;
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
