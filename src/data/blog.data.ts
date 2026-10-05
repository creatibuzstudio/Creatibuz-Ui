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
    id: "1",
    slug: "the-future-of-branding-why-design-quality-matters-more-than-ever",
    title: "The Future of Branding Why Design Quality Matters More Than Ever.",
    date: "July 31, 2025",
    image: "/blogInsight/first.png",
    alt: "Doing Things brand tote bag showcase",
  },
  {
    id: "2",
    slug: "the-future-of-branding-why-design-quality-matters-more-than-ever-2",
    title: "Why Startups Should Invest in UX Early — Not Later.",
    date: "July 31, 2025",
    image: "/blogInsight/second.png",
    alt: "Digital data and binary depth perspective",
  },
  {
    id: "3",
    slug: "the-future-of-branding-why-design-quality-matters-more-than-ever-3",
    title: "How Design Systems Transform Businesses — A Complete Guide.",
    date: "July 31, 2025",
    image: "/blogInsight/thired.png",
    alt: "Pack mockup packaging and branding design",
  },
];
