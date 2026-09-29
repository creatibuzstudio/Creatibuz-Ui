import { CategoryData, PlanItem } from "@/types/pricing.types";

export type { CategoryData, PlanItem };

const STARTER_FEATURES = [
  "Everything in Growth Plan",
  "Investment Tracking",
  "Integration Services",
  "24/7 VIP Support",
  "Premium Security",
  "Premium Security",
  "Premium Security",
  "Premium Security",
];

const GROWTH_FEATURES = [
  "Everything in Starter Plan",
  "Advanced Budgeting Tools",
  "Customizable Dashboards",
  "Transaction Insights",
  "Enhanced Security",
  "Customizable Dashboards",
  "Customizable Dashboards",
  "Customizable Dashboards",
];

const BUSINESS_FEATURES = [
  "Everything in Growth Plan",
  "Investment Tracking",
  "Integration Services",
  "24/7 VIP Support",
  "Premium Security",
  "Premium Security",
  "Premium Security",
  "Premium Security",
];

export const CATEGORIES_DATA: CategoryData[] = [
  {
    id: "website-design",
    name: "Website Design",
    plans: [
      {
        id: "starter-web",
        name: "Starter Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 700,
        period: "/ per month",
        isPopular: false,
        features: STARTER_FEATURES,
        buttonText: "Select This Plan",
      },
      {
        id: "growth-web",
        name: "Growth Plan",
        subtitle: "Ideal for growing startups and mid-sized companies",
        price: 1500,
        period: "/ per month",
        isPopular: true,
        features: GROWTH_FEATURES,
        buttonText: "Select This Plan",
      },
      {
        id: "business-web",
        name: "Business Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 4000,
        period: "/ per month",
        isPopular: false,
        features: BUSINESS_FEATURES,
        buttonText: "Select This Plan",
      },
    ],
  },
  {
    id: "web-app",
    name: "Web App",
    plans: [
      {
        id: "starter-webapp",
        name: "Starter Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 1200,
        period: "/ per month",
        isPopular: false,
        features: STARTER_FEATURES,
        buttonText: "Select This Plan",
      },
      {
        id: "growth-webapp",
        name: "Growth Plan",
        subtitle: "Ideal for growing startups and mid-sized companies",
        price: 2500,
        period: "/ per month",
        isPopular: true,
        features: GROWTH_FEATURES,
        buttonText: "Select This Plan",
      },
      {
        id: "business-webapp",
        name: "Business Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 5500,
        period: "/ per month",
        isPopular: false,
        features: BUSINESS_FEATURES,
        buttonText: "Select This Plan",
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    plans: [
      {
        id: "starter-mobile",
        name: "Starter Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 1500,
        period: "/ per month",
        isPopular: false,
        features: STARTER_FEATURES,
        buttonText: "Select This Plan",
      },
      {
        id: "growth-mobile",
        name: "Growth Plan",
        subtitle: "Ideal for growing startups and mid-sized companies",
        price: 3200,
        period: "/ per month",
        isPopular: true,
        features: GROWTH_FEATURES,
        buttonText: "Select This Plan",
      },
      {
        id: "business-mobile",
        name: "Business Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 6800,
        period: "/ per month",
        isPopular: false,
        features: BUSINESS_FEATURES,
        buttonText: "Select This Plan",
      },
    ],
  },
];
