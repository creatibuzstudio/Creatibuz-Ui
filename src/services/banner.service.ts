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
    const response = await apiClient.get("/banner");
    const data = response.data;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.data)) return data.data;
    return [];
  },
};

export default bannerService;
