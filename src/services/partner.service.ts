import apiClient from "@/lib/api-client";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  order?: number;
  url?: string;
  isActive?: boolean;
}

export const partnerService = {
  getAllPartners: async (): Promise<Partner[]> => {
    const response = await apiClient.get("/partners");
    const data = response.data;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.data)) return data.data;
    return [];
  },
};

export default partnerService;
