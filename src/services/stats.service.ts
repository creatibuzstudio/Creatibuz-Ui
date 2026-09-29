import apiClient from "@/lib/api-client";

export interface StatsData {
  projectDeliveries: number;
  inHouseExperts: number;
  satisfiedClients: number;
  businessPartners: number;
}

export const statsService = {
  getStats: async (): Promise<StatsData | null> => {
    try {
      const response = await apiClient.get("/stats");
      return response.data || null;
    } catch {
      // Graceful offline fallback
      return null;
    }
  },
};

export default statsService;
