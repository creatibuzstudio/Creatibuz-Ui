export interface FooterLink {
  name: string;
  href: string;
}

export const quickLinks: FooterLink[] = [
  { name: "Service", href: "#service" },
  { name: "Case Studies", href: "#case-study" },
  { name: "Design Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Latest Blog", href: "#blog" },
  { name: "Career", href: "#contact" },
];

export const serviceLinks: FooterLink[] = [
  { name: "Product Design", href: "#service" },
  { name: "Web & App Design", href: "#service" },
  { name: "Web Development", href: "#service" },
  { name: "App Development", href: "#service" },
  { name: "SaaS Development", href: "#service" },
  { name: "Branding Design", href: "#service" },
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
