export interface BlogCardItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  alt: string;
}

export const DEFAULT_BLOGS: BlogCardItem[] = [
  {
    id: "blog-1",
    slug: "ai-product-ui-ux-design-guide",
    title: "AI Product UI/UX Design: The Complete Guide to Building AI Products Users Trust",
    date: "Oct 18, 2026",
    image: "/blogs/AI Product UI UX Design.png",
    alt: "AI Product UI/UX Design: The Complete Guide to Building AI Products Users Trust",
  },
  {
    id: "blog-2",
    slug: "design-trustworthy-ai-saas-products",
    title: "How to Design AI SaaS Products That Users Trust",
    date: "Oct 17, 2026",
    image: "/blogs/How to Design AI SaaS.png",
    alt: "How to Design AI SaaS Products That Users Trust",
  },
  {
    id: "blog-3",
    slug: "ai-dashboard-design-best-practices",
    title: "AI Dashboard Design: Best Practices for SaaS Teams",
    date: "Oct 16, 2026",
    image: "/blogs/AI Dashboard Design.png",
    alt: "AI Dashboard Design: Best Practices for SaaS Teams",
  },
];
