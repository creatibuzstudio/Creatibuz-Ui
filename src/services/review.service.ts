import { apiClient } from "@/lib/api-client";

export interface ReviewClient {
  id: string;
  name: string;
  email: string;
  picture?: string;
  role?: string;
}

export interface Review {
  id: string;
  clientId: string;
  client?: ReviewClient;
  thumbUrl?: string;
  videoUrl?: string;
  reviewText: string;
  rating: number;
  satisfactionRate?: string;
  stats?: { value: string; label: string }[];
  createdAt: string;
  updatedAt: string;
}

export const reviewService = {
  getAllReviews: async (): Promise<Review[]> => {
    try {
      const response = await apiClient.get("/review");
      return Array.isArray(response.data) ? response.data : response.data?.data || [];
    } catch {
      return [];
    }
  },

  getReviewById: async (id: string): Promise<Review | null> => {
    try {
      const response = await apiClient.get(`/review/${id}`);
      return response.data;
    } catch {
      return null;
    }
  },

  createReview: async (data: Partial<Review>): Promise<Review> => {
    const response = await apiClient.post("/review", data);
    return response.data;
  },

  updateReview: async (id: string, data: Partial<Review>): Promise<Review> => {
    const response = await apiClient.patch(`/review/${id}`, data);
    return response.data;
  },

  deleteReview: async (id: string): Promise<void> => {
    const response = await apiClient.delete(`/review/${id}`);
    return response.data;
  },
};
