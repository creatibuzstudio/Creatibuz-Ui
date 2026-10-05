export interface PlanItem {
  id: string;
  name: string;
  subtitle?: string;
  highlightFeature: string;
  price: number;
  period: string;
  isPopular: boolean;
  features: string[];
  buttonText: string;
}

export interface CategoryData {
  id: string;
  name: string;
  plans: PlanItem[];
}
