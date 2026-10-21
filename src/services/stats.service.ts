import apiClient from "@/lib/api-client";

export interface StatsData {
  projectDeliveries: number;
  inHouseExperts: number;
  satisfiedClients: number;
  businessPartners: number;
}

export const DEFAULT_ABOUT_STATS: StatsData = {
  projectDeliveries: 400,
  inHouseExperts: 15,
  satisfiedClients: 99,
  businessPartners: 40,
};

export const statsService = {
  /** Fetch specifically the About Us stats directly from /stats/about */
  getAboutStats: async (): Promise<StatsData> => {
    try {
      const response = await apiClient.get("/stats/about");
      const d = response?.data;
      if (d) {
        return {
          projectDeliveries: Number(d.projectDeliveries) || DEFAULT_ABOUT_STATS.projectDeliveries,
          inHouseExperts: Number(d.inHouseExperts) || DEFAULT_ABOUT_STATS.inHouseExperts,
          satisfiedClients: Number(d.satisfiedClients) || DEFAULT_ABOUT_STATS.satisfiedClients,
          businessPartners: Number(d.businessPartners) || DEFAULT_ABOUT_STATS.businessPartners,
        };
      }
    } catch {
      try {
        const response = await apiClient.get("/stats");
        const d = response?.data;
        if (d) {
          const ad = d.aboutStats || d;
          return {
            projectDeliveries: Number(ad.projectDeliveries) || DEFAULT_ABOUT_STATS.projectDeliveries,
            inHouseExperts: Number(ad.inHouseExperts) || DEFAULT_ABOUT_STATS.inHouseExperts,
            satisfiedClients: Number(ad.satisfiedClients) || DEFAULT_ABOUT_STATS.satisfiedClients,
            businessPartners: Number(ad.businessPartners) || DEFAULT_ABOUT_STATS.businessPartners,
          };
        }
      } catch {
        // Fallback
      }
    }
    return DEFAULT_ABOUT_STATS;
  },

  getStats: async (): Promise<StatsData> => {
    return statsService.getAboutStats();
  },
};

export default statsService;
