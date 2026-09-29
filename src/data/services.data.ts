export interface ServiceItem {
  id: string;
  index: string;
  displayTitle: string;
  title: string;
  description: string;
  tags: string[];
  img: string;
  width: number;
  height: number;
}

export const servicesData: ServiceItem[] = [
  {
    id: "branding",
    index: "01",
    displayTitle: "Branding Design",
    title: "Branding",
    description:
      "Strategic brand identities that help businesses establish credibility, differentiate themselves, and create lasting impressions.",
    tags: [
      "Brand Strategy",
      "Strategy",
      "Visual Identity",
      "Logo Design",
      "Creative Direction",
    ],
    img: "/services/01.png",
    width: 1854,
    height: 1284,
  },
  {
    id: "uiux",
    index: "02",
    displayTitle: "UI/UX Design",
    title: "UI/UX Design",
    description:
      "User-centric interfaces and intuitive digital experiences engineered for maximum engagement and seamless usability.",
    tags: ["User Research", "Wireframing", "Prototyping", "Design System"],
    img: "/Jevxo/13.png",
    width: 799,
    height: 592,
  },
  {
    id: "saas",
    index: "03",
    displayTitle: "SaaS Product Development",
    title: "SaaS Product Development",
    description:
      "High-converting dashboards, complex data visualizations, and scalable SaaS workflows crafted for growth.",
    tags: ["B2B SaaS", "Design Systems", "Web App UI", "Analytics UI"],
    img: "/Jevxo/09.png",
    width: 888,
    height: 590,
  },
  {
    id: "app",
    index: "04",
    displayTitle: "Mobile App Development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications engineered with high performance, fluid animations, and robust code.",
    tags: ["React Native", "iOS & Android", "API Integration", "Performance"],
    img: "/mockups/Mobile app 04 1.png",
    width: 1401,
    height: 1038,
  },
  {
    id: "web",
    index: "05",
    displayTitle: "Website Development",
    title: "Website Development",
    description:
      "Pixel-perfect, ultra-fast Jamstack and full-stack web applications built with Next.js, Tailwind, and cutting-edge tech.",
    tags: ["Next.js", "Full Stack", "Framer Motion", "SEO & Speed"],
    img: "/Jevxo/04.png",
    width: 793,
    height: 595,
  },
  {
    id: "cms",
    index: "06",
    displayTitle: "Wordpress Development",
    title: "Wordpress Development",
    description:
      "Pixel-perfect, ultra-fast Jamstack and full-stack web applications built with Next.js, Tailwind, and cutting-edge tech.",
    tags: ["Next.js", "Full Stack", "Framer Motion", "SEO & Speed"],
    img: "/Jevxo/04.png",
    width: 793,
    height: 595,
  },
  {
    id: "seo",
    index: "07",
    displayTitle: "Search Engine Optimization",
    title: "Search Engine Optimization",
    description:
      "Pixel-perfect, ultra-fast Jamstack and full-stack web applications built with Next.js, Tailwind, and cutting-edge tech.",
    tags: ["Next.js", "Full Stack", "Framer Motion", "SEO & Speed"],
    img: "/Jevxo/04.png",
    width: 793,
    height: 595,
  },
];
