import {
  Code2,
  Layers,
  Cpu,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export interface NavLinkItem {
  name: string;
  href: string;
  desc: string;
  icon: LucideIcon;
}

export const navLinks: NavLinkItem[] = [
  {
    name: "Services",
    href: "#services",
    desc: "UI/UX, Next.js & Full-Stack Development",
    icon: Code2,
  },
  {
    name: "Feature Works",
    href: "#feature-works",
    desc: "50+ Shipped Web & Mobile Apps",
    icon: Layers,
  },
  {
    name: "Design Process",
    href: "#process",
    desc: "Agile 6-Step Engineering Workflow",
    icon: Cpu,
  },
  {
    name: "Pricing",
    href: "#pricing",
    desc: "Flexible Retainer & Build Plans",
    icon: CreditCard,
  },
  {
    name: "Portfolio",
    href: "https://www.behance.net/uidesignerhakim",
    desc: "Explore Featured Case Studies & Builds",
    icon: Layers,
  },
];
