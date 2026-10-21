// src/services/package.service.ts
import { apiClient } from "@/lib/api-client";
import { CategoryData, PlanItem } from "@/types/pricing.types";
import { CATEGORIES_DATA } from "@/data/pricing.data";

interface RawPkg {
  id: string;
  name: string;
  description?: string;
  price?: number | string;
  duration?: string;
  isActive?: boolean;
  features?: string[];
}

interface RawCat {
  id: string;
  name: string;
  packages?: RawPkg[];
}

const getFallbackPlansForCategory = (catName: string): PlanItem[] => {
  const clean = catName.toLowerCase().trim();
  const match = CATEGORIES_DATA.find((c) => {
    const cClean = c.name.toLowerCase().trim();
    return (
      clean.includes(cClean) ||
      cClean.includes(clean) ||
      (clean.includes("web") && cClean.includes("website")) ||
      (clean.includes("mobile") && cClean.includes("mobile")) ||
      (clean.includes("brand") && cClean.includes("brand"))
    );
  });
  return match?.plans || CATEGORIES_DATA[0].plans;
};

/** Service to fetch package categories from the backend API. */
export const packageService = {
  /** Retrieve all package categories, fallback to local static data. */
  getAllCategories: async (): Promise<CategoryData[]> => {
    try {
      const response = await apiClient.get("/package-category");
      const data = Array.isArray(response.data) ? response.data : response.data?.data;
      if (Array.isArray(data) && data.length > 0) {
        // Transform backend Category -> frontend CategoryData
        const transformed: CategoryData[] = (data as RawCat[]).map((cat) => {
          const hasApiPackages = Array.isArray(cat.packages) && cat.packages.length > 0;

          const plans: PlanItem[] = hasApiPackages
            ? (cat.packages as RawPkg[]).map((pkg) => ({
                id: pkg.id,
                name: pkg.name?.trim() || pkg.name,
                subtitle: "",
                highlightFeature: pkg.description || "Feature highlights",
                price: Number(pkg.price) || 0,
                period: pkg.duration ? `/ ${pkg.duration}` : "/ project",
                isPopular: pkg.name ? pkg.name.trim().toLowerCase().includes("growth plan") : false,
                features:
                  Array.isArray(pkg.features) && pkg.features.length > 0
                    ? pkg.features
                    : [
                        "High-fidelity UI/UX",
                        "Responsive Design",
                        "Full Source Code",
                        "24/7 Dedicated Support",
                      ],
                buttonText: "Choose This Plan",
              }))
            : getFallbackPlansForCategory(cat.name);

          return {
            id: cat.id,
            name: cat.name,
            plans,
          };
        });
        return transformed;
      }
    } catch {
      // ignore errors, fallback
    }
    return CATEGORIES_DATA;
  },
};
