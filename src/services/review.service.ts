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
  createdAt: string;
  updatedAt: string;
}

export const reviewService = {
  getAllReviews: async (): Promise<Review[]> => {
    const response = await apiClient.get("/review");
    return Array.isArray(response.data) ? response.data : response.data?.data || [];
  },

  getReviewById: async (id: string): Promise<Review> => {
    const response = await apiClient.get(`/review/${id}`);
    return response.data;
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
