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
  objectPosition?: string;
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
      "Visual Identity",
      "Logo Design",
      "Creative Direction",
      "Strategy",
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
      "User-centered digital experiences that simplify complex ideas, improve usability, and help businesses create products people love to use.",
    tags: ["UI UX Design", "Product Design", "UX Strategy", "Wireframe", "Interactive Prototyping"],
    img: "/services/02.jpg",
    width: 1854,
    height: 1284,
  },
  {
    id: "saas",
    index: "03",
    displayTitle: "SaaS Product Development",
    title: "SaaS Product Development",
    description:
      "Scalable SaaS solutions that turn innovative ideas into powerful, reliable, and user-friendly digital products built for long-term growth.",
    tags: ["SaaS Development", "SaaS Product", "Web App", "SaaS Dashboard", "Software Development"],
    img: "/services/03.jpg",
    width: 1854,
    height: 1284,
  },
  {
    id: "web",
    index: "04",
    displayTitle: "Website Development",
    title: "Website Development",
    description:
      "High-performance websites that combine clean development, seamless functionality, and intuitive experiences to help businesses grow online.",
    tags: ["Web Development", "Website Design", "Custom Website", "Landing Page Design", "Website redesign"],
    img: "/services/04.png",
    width: 1854,
    height: 1284,
  },
  {
    id: "app",
    index: "05",
    displayTitle: "Mobile App Development",
    title: "Mobile App Development",
    description:
      "Engaging mobile applications that deliver seamless user experiences, reliable performance, and scalable solutions across modern platforms.",
    tags: ["Mobile App Development", "App Development", "Mobile App Design", "iOS Development", "Android Development"],
    img: "/services/05.png",
    width: 1854,
    height: 1284,
  },
  {
    id: "cms",
    index: "06",
    displayTitle: "Wordpress Development",
    title: "Wordpress Development",
    description:
      "Flexible and high-performing WordPress websites that give businesses a professional online presence, easy content management, and room to grow.",
    tags: ["Wordpress Development", "Wordpress Design", "Wordpress Website", "Wordpress Expert", "Wordpress SEO"],
    img: "/services/06.jpg",
    width: 1854,
    height: 1284,
  },
  {
    id: "seo",
    index: "07",
    displayTitle: "Search Engine Optimization",
    title: "Search Engine Optimization",
    description:
      "Data-driven SEO strategies that improve search visibility, attract qualified traffic, and help businesses build sustainable organic growth.",
    tags: ["SEO Services", "Technical SEO", "Organic Growth", "SEO Optimization", "SEO Expert"],
    img: "/services/07.jpg",
    width: 1854,
    height: 1284,
    objectPosition: "object-top",
  },
];
