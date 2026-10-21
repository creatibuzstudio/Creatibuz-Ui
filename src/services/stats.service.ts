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
      const d = response?.data;
      if (d) {
        return {
          projectDeliveries: Number(d.projectDeliveries) || 400,
          inHouseExperts: Number(d.inHouseExperts) || 15,
          satisfiedClients: Number(d.satisfiedClients) || 99,
          businessPartners: Number(d.businessPartners) || 40,
        };
      }
      return null;
    } catch {
      try {
        const aboutRes = await apiClient.get("/stats/about");
        const ad = aboutRes?.data;
        if (ad) {
          return {
            projectDeliveries: Number(ad.projectDeliveries) || 400,
            inHouseExperts: Number(ad.inHouseExperts) || 15,
            satisfiedClients: Number(ad.satisfiedClients) || 99,
            businessPartners: Number(ad.businessPartners) || 40,
          };
        }
      } catch {
        // Graceful offline fallback
      }
      return null;
    }
  },
};

export default statsService;
