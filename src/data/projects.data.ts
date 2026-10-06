export interface ShowcaseItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export const collaboratorLogos: PartnerLogo[] = [
  // Row 1
  { name: "WCSP", src: "/collaborators/wcsp 1.png" },
  { name: "Zefiro", src: "/collaborators/zefiro-1 1.png" },
  { name: "AEROPACT", src: "/collaborators/aeropact.svg" },
  { name: "Naranj Capital", src: "/collaborators/naranj-capital 1.png" },
  { name: "Earthtones", src: "/collaborators/eathtones 1.png" },
  { name: "Skitter", src: "/collaborators/logo-4 (1) 1.png" },
  // Row 2
  { name: "Samcart", src: "/collaborators/logo-3 (1) 1.png" },
  { name: "Blipay", src: "/collaborators/logo-11 (1) 1.png" },
  { name: "Fanlock", src: "/collaborators/logo-6 (1) 1.png" },
  { name: "QUANTEX", src: "/collaborators/logo-8 (1) 1.png" },
  { name: "Byzfunder", src: "/collaborators/logo-15 (1) 1.png" },
  { name: "Absolute Physiocare", src: "/collaborators/physiocare 1.png" },
];

export const clientProofAvatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
];

export const defaultHeroMockupsRow1: string[] = [
  "/mockups/Mockup Ribbon 1.png",
  "/mockups/ChatGPT Image Aug 23, 2026, 06_06_54 PM 1.png",
  "/mockups/Mockup 15.png",
  "/mockups/Mockup 3 1.png",
];

export const defaultHeroMockupsRow2: string[] = [
  "/mockups/Mobile app 04 1.png",
  "/mockups/ChatGPT Image Aug 22, 2026, 10_11_18 PM 1.png",
  "/mockups/Jul 21, 2026, 03_47_59 PM 1.png",
  "/mockups/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png",
];

export const mockupsMeta: Record<string, { width: number; height: number }> = {
  "/mockups/Mockup Ribbon 1.png": { width: 1362, height: 1023 },
  "/mockups/ChatGPT Image Aug 23, 2026, 06_06_54 PM 1.png": { width: 1389, height: 1041 },
  "/mockups/Mockup 15.png": { width: 1398, height: 1047 },
  "/mockups/Mockup 3 1.png": { width: 1371, height: 1029 },
  "/mockups/Mobile app 04 1.png": { width: 1401, height: 1038 },
  "/mockups/ChatGPT Image Aug 22, 2026, 10_11_18 PM 1.png": { width: 1377, height: 1029 },
  "/mockups/Jul 21, 2026, 03_47_59 PM 1.png": { width: 1374, height: 1029 },
  "/mockups/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png": { width: 1389, height: 1041 },
};

export const marqueeTextRow1: string[] = [
  "Branding Design",
  "Logo Design",
  "UI UX Design",
  "UX Strategy",
  "UX Research",
  "SaaS Product",
  "Website Design",
  "Mobile App Design",
  "Dashboard Design",
  "Product Design",
  "Landing Page Design",
];

export const marqueeTextRow2: string[] = [
  "UX Strategy",
  "UX Research",
  "SaaS Product",
  "Website Design",
  "Mobile App Design",
  "Dashboard Design",
  "Product Design",
  "Landing Page Design",
  "Branding Design",
  "Logo Design",
  "UI UX Design",
];

export const marqueeImagesRow1: ShowcaseItem[] = [
  { src: "/marquee/ashray-dashboard.png", alt: "Ashray SaaS Dashboard", width: 1100, height: 730 },
  { src: "/marquee/row1-2.png", alt: "Fitness Activity Mobile App", width: 370, height: 273 },
  { src: "/mockups/Mockup 15.png", alt: "MacBook Pro Product Showcase", width: 1398, height: 1047 },
  { src: "/marquee/row2-2.png", alt: "Job Board Analytics Dashboard", width: 347, height: 273 },
  { src: "/mockups/ChatGPT Image Aug 23, 2026, 06_06_54 PM 1.png", alt: "SaaS Analytics Platform", width: 1389, height: 1041 },
  { src: "/mockups/Jul 21, 2026, 03_47_59 PM 1.png", alt: "Humanitarian Dashboard", width: 1374, height: 1029 },
];

export const marqueeImagesRow2: ShowcaseItem[] = [
  { src: "/marquee/row2-1.png", alt: "Villa House Laptop Mockup", width: 370, height: 273 },
  { src: "/marquee/row2-2.png", alt: "Job Board Dashboard Platform", width: 347, height: 273 },
  { src: "/mockups/Mobile app 04 1.png", alt: "Headset eCommerce Mobile App", width: 1401, height: 1038 },
  { src: "/mockups/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png", alt: "Fintech Dashboard Platform", width: 1389, height: 1041 },
  { src: "/mockups/ChatGPT Image Aug 22, 2026, 10_11_18 PM 1.png", alt: "Finance Planner UI", width: 1377, height: 1029 },
  { src: "/marquee/ashray-dashboard.png", alt: "Ashray Foundation OS", width: 1100, height: 730 },
];

