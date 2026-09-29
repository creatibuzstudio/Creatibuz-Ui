import apiClient from "@/lib/api-client";

export interface StatsData {
  projectDeliveries: number;
  inHouseExperts: number;
  satisfiedClients: number;
  businessPartners: number;
}

export const statsService = {
  getStats: async (): Promise<StatsData> => {
    const response = await apiClient.get("/stats");
    return response.data;
  },
};

export default statsService;
