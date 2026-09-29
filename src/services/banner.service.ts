import apiClient from "@/lib/api-client";

export interface Banner {
  id: string;
  photoUrl: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const bannerService = {
  getAllBanners: async (): Promise<Banner[]> => {
    try {
      const response = await apiClient.get("/banner");
      const data = response.data;
      if (Array.isArray(data)) return data;
      if (data && Array.isArray(data.data)) return data.data;
      return [];
    } catch {
      // Graceful offline fallback
      return [];
    }
  },
};

export default bannerService;
