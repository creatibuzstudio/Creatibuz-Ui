import { apiClient } from "@/lib/api-client";

export interface CasestudyStat {
  name: string;
  count: string;
  label?: string;
  value?: string;
}

export interface CasestudyPhotoSection {
  photoUrl: string;
  description?: string;
  title?: string;
}

export interface CasestudyItem {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  fullDescription?: string;
  photoUrl?: string;
  images?: unknown;
  categoryId?: string;
  category?: unknown;
  tag?: string;
  bgColor?: string;
  projectLink?: string;
  stats?: CasestudyStat[];
  metrics?: CasestudyStat[];
  challenge?: string;
  challengePhoto?: string;
  challengePhotoDescription?: string;
  challengePhotos?: CasestudyPhotoSection[];
  solution?: string;
  solutionPhoto?: string;
  solutionPhotoDescription?: string;
  solutionPhotos?: CasestudyPhotoSection[];
  technologies?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const casestudyService = {
  getAllCasestudies: async (): Promise<CasestudyItem[]> => {
    // API disconnected: returning empty array for fallback to local featured projects
    return [];

    /*
    try {
      const response = await apiClient.get("/casestudies");
      return Array.isArray(response.data?.data)
        ? response.data.data
        : Array.isArray(response.data)
        ? response.data
        : [];
    } catch {
      return [];
    }
    */
  },

  getCasestudyById: async (id: string): Promise<CasestudyItem | null> => {
    // API disconnected
    return null;

    /*
    try {
      const response = await apiClient.get(`/casestudies/${id}`);
      return response.data?.data || response.data;
    } catch {
      return null;
    }
    */
  },

  getCasestudyBySlug: async (slug: string): Promise<CasestudyItem | null> => {
    // API disconnected: returning null to trigger getFallbackProject
    return null;

    /*
    try {
      const response = await apiClient.get(`/casestudies/slug/${slug}`);
      return response.data?.data || response.data;
    } catch {
      return null;
    }
    */
  },

  createCasestudy: async (data: Partial<CasestudyItem>): Promise<CasestudyItem> => {
    const response = await apiClient.post("/casestudies", data);
    return response.data?.data || response.data;
  },

  updateCasestudy: async (id: string, data: Partial<CasestudyItem>): Promise<CasestudyItem> => {
    const response = await apiClient.patch(`/casestudies/${id}`, data);
    return response.data?.data || response.data;
  },

  deleteCasestudy: async (id: string): Promise<void> => {
    const response = await apiClient.delete(`/casestudies/${id}`);
    return response.data;
  },
};
