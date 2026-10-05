export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  link: string;
  tag?: string;
  bgColor?: string;
  images: {
    hero: ProjectImage;
    rightTop: ProjectImage;
    rightBottom: ProjectImage;
  };
  metrics: ProjectMetric[];
}

export const cardBgColors = [
  "#1D0C01", // 1st card
  "#0D012A", // 2nd card
  "#1B0121", // 3rd card
  "#010725", // 4th card
  "#01171B", // 5th card
  "#1B000F", // 6th card
  "#09011C", // 7th card
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "01",
    bgColor: "#1D0C01",
    title: "Medical Healthcare website -Patient-Centered Website Experience",
    description:
      "A modern healthcare website designed to create a trustworthy, patient-friendly digital experience. The design focuses on clear navigation, accessible healthcare information, easy service discovery, and a seamless path to appointments and patient support.Created a clean and credible healthcare experience that makes important medical information easier to find, improves patient navigation, and builds greater trust through a professional and accessible digital interface.",
    link: "https://www.behance.net/gallery/252830385/Medical-healthcare-Website-Landing-Page",
    tag: "Healthcare & Telemedicine",
    images: {
      hero: { src: "/featureWorks/Mockup 14.png", width: 2079, height: 1608 },
      rightTop: { src: "/featureWorks/Hand and iPhone 16 Pro.png", width: 999, height: 774 },
      rightBottom: { src: "/featureWorks/iPad Pro.png", width: 999, height: 777 },
    },
    metrics: [
      { value: "92%", label: "Workflow efficiency" },
      { value: "78%", label: "Team productivity" },
      { value: "1.2M+", label: "Client workflows optimized" },
    ],
  },
  {
    id: "02",
    bgColor: "#0D012A",
    title: "Restaurant Mobile App | Seamless Food Ordering Experience",
    description:
      "A modern restaurant mobile app designed to make food discovery, menu browsing, ordering, and checkout simple, fast, and enjoyable for users. Created a smooth and intuitive mobile experience that simplifies food ordering, improves menu discovery, reduces friction throughout the user journey, and encourages repeat engagement.",
    link: "https://www.behance.net/gallery/252962019/Non-Profit-Website-Landing-Page-Design",
    tag: "Food & Restaurant Mobile App",
    images: {
      hero: { src: "/featureWorks/Mockup 02 1.png", width: 2052, height: 1539 },
      rightTop: { src: "/featureWorks/Mockup 01 1.png", width: 1008, height: 756 },
      rightBottom: { src: "/featureWorks/Mockup 08 1.png", width: 1008, height: 729 },
    },
    metrics: [
      { value: "88%", label: "Workflow efficiency" },
      { value: "78%", label: "Seles Increase" },
      { value: "1.2M+", label: "Client workflows optimized" },
    ],
  },
  {
    id: "03",
    bgColor: "#1B0121",
    title: "High-Converting SaaS Website Design \nThat Simplifies Complex Products.",
    description:
      "A conversion-focused SaaS website designed to simplify complex product messaging, communicate value clearly, build trust, and guide visitors toward taking action. Created a clear and engaging digital experience that strengthens product positioning, improves user understanding, reduces friction, and drives visitors toward conversion.",
    link: "https://nebs-creative.com/the-future-of-branding-why-design-quality-matters-more-than-ever/",
    tag: "SaaS & Web Application",
    images: {
      hero: { src: "/featureWorks/05 5.png", width: 2055, height: 1542 },
      rightTop: { src: "/featureWorks/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png", width: 996, height: 747 },
      rightBottom: { src: "/featureWorks/04 1.png", width: 999, height: 747 },
    },
    metrics: [
      { value: "76%", label: "Workflow efficiency" },
      { value: "78%", label: "Team productivity" },
      { value: "1.2M+", label: "Client workflows optimized" },
    ],
  },
  {
    id: "04",
    bgColor: "#010725",
    title: "Non-Profit SaaS Dashboard Focused on Trust, Impact & Engagement.",
    description:
      "A modern, purpose-driven website designed to communicate the organization’s mission, showcase its impact, and make it easier for visitors to support, donate, and get involved. Created a trustworthy and engaging digital experience that clearly communicates the organization’s purpose, strengthens credibility, improves content discovery, and encourages meaningful visitor action.",
    link: "https://www.behance.net/gallery/252962019/Non-Profit-Website-Landing-Page-Design",
    tag: "Non-Profit SaaS Dashboard",
    images: {
      hero: { src: "/mockups/Mockup 15.png", width: 2052, height: 1539 },
      rightTop: { src: "/mockups/Mockup Ribbon 1.png", width: 1008, height: 756 },
      rightBottom: { src: "/mockups/Jul 21, 2026, 03_47_59 PM 1.png", width: 1008, height: 729 },
    },
    metrics: [
      { value: "92%", label: "Workflow efficiency" },
      { value: "78%", label: "Team productivity" },
      { value: "1.2M+", label: "Client workflows optimized" },
    ],
  },
  {
    id: "05",
    bgColor: "#01171B",
    title: "E-commerce Mobile App | Seamless Shopping Experience",
    description:
      "A modern e-commerce mobile app designed to make product discovery, browsing, comparison, and purchasing simple, intuitive, and frictionless across the entire shopping journey. Created a user-friendly shopping experience that improves product discovery, simplifies navigation and checkout, reduces purchase friction, and encourages higher engagement and conversions.",
    link: "https://www.behance.net/gallery/252830385/Medical-healthcare-Website-Landing-Page",
    tag: "E-commerce Mobile App",
    images: {
      hero: { src: "/mockups/Mobile app 04 1.png", width: 2052, height: 1539 },
      rightTop: { src: "/featureWorks/Hand and iPhone 16 Pro.png", width: 999, height: 774 },
      rightBottom: { src: "/featureWorks/iPad Pro.png", width: 999, height: 777 },
    },
    metrics: [
      { value: "92%", label: "Workflow efficiency" },
      { value: "78%", label: "Team productivity" },
      { value: "1M+", label: "Client workflows optimized" },
    ],
  },
  {
    id: "06",
    bgColor: "#1B000F",
    title: "Hiring Management Dashboard. Smarter Recruitment Workflow.",
    description:
      "A modern hiring management dashboard designed to help HR teams organize candidates, track recruitment progress, manage job openings, and streamline the hiring workflow from one centralized platform. Created a structured and intuitive recruitment experience that simplifies candidate management, improves workflow visibility, reduces administrative friction, and helps hiring teams make faster, more informed decisions.",
    link: "https://nebs-creative.com/the-future-of-branding-why-design-quality-matters-more-than-ever/",
    tag: "HR & Recruitment Dashboard",
    images: {
      hero: { src: "/mockups/Mockup 3 1.png", width: 2052, height: 1539 },
      rightTop: { src: "/mockups/ChatGPT Image Aug 23, 2026, 06_06_54 PM 1.png", width: 1008, height: 756 },
      rightBottom: { src: "/mockups/ChatGPT Image Aug 22, 2026, 10_11_18 PM 1.png", width: 1008, height: 729 },
    },
    metrics: [
      { value: "92%", label: "Workflow efficiency" },
      { value: "78%", label: "Team productivity" },
      { value: "1.2M+", label: "Client workflows optimized" },
    ],
  },
  {
    id: "07",
    bgColor: "#09011C",
    title: "Non-Profit Website Focused on Trust, Impact & Engagement",
    description:
      "A modern, purpose-driven website designed to communicate the organization’s mission, showcase its impact, and make it easier for visitors to support, donate, and get involved. Created a trustworthy and engaging digital experience that clearly communicates the organization’s purpose, strengthens credibility, improves content discovery, and encourages meaningful visitor action.",
    link: "https://www.behance.net/gallery/252962019/Non-Profit-Website-Landing-Page-Design",
    tag: "Non-Profit & Humanitarian",
    images: {
      hero: { src: "/featureWorks/Mockup 14.png", width: 2079, height: 1608 },
      rightTop: { src: "/featureWorks/Mockup 01 1.png", width: 1008, height: 756 },
      rightBottom: { src: "/featureWorks/04 1.png", width: 999, height: 747 },
    },
    metrics: [
      { value: "92%", label: "Workflow efficiency" },
      { value: "78%", label: "Team productivity" },
      { value: "3M+", label: "Client workflows optimized" },
    ],
  },
];

