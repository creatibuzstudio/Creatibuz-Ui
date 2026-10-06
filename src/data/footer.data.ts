export interface FooterLink {
  name: string;
  href: string;
}

export const quickLinks: FooterLink[] = [
  { name: "Services", href: "#services" },
  { name: "Feature Works", href: "#future-works" },
  { name: "Meet our Team", href: "#specialists" },
  { name: "Pricing Plan", href: "#pricing" },
  { name: "Latest Blog", href: "#blog" },
  { name: "Career", href: "#contact" },
];

export const serviceLinks: FooterLink[] = [
  { name: "Branding Design", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "SaaS Product Development", href: "#services" },
  { name: "Website Development", href: "#services" },
  { name: "Mobile App Development", href: "#services" },
  { name: "Wordpress Development", href: "#services" },
  { name: "Search Engine Optimization", href: "#services" },
];

export const legalLinks: FooterLink[] = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookies Policy", href: "/cookies" },
];

export const contactDetails = {
  whatsapp: "+880 1968 657353",
  email: "Info@creatibuzstudio.com",
  workingHours: "Mon - Fri 10.00 AM -\n08.00 PM (GMT+6)",
};
