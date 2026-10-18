export interface SocialLink {
  name: string;
  href: string;
  type: "facebook" | "linkedin" | "github" | "portfolio";
}

export interface SpecialistItem {
  id: string;
  name: string;
  role: string;
  image: string;
  bgTint: string;
  socials: SocialLink[];
}

export const DEFAULT_SPECIALISTS: SpecialistItem[] = [
  {
    id: "3",
    name: "Hossain Ahmed",
    role: "Branding Designer",
    image: "/Team/hossainAhmed.png",
    bgTint: "bg-[#FAE297]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
    ],
  },
  {
    id: "4",
    name: "Anjuman Ara Ayshe",
    role: "Marketing Executive",
    image: "/Team/anjumanAyshe.png",
    bgTint: "bg-[#BDFDEB]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
    ],
  },
  {
    id: "8",
    name: "Md. Ibrahim",
    role: "UI/UX Designer",
    image: "/Team/ibrahim.png",
    bgTint: "bg-[#DFF6FF]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
    ],
  },
  {
    id: "7",
    name: "Abdul Ahad",
    role: "Mobile App Developer",
    image: "/Team/abdulAhad.png",
    bgTint: "bg-[#A0C599]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
    ],
  },
  {
    id: "14",
    name: "Md. Golam Rabbi",
    role: "Web Developer",
    image: "/Team/golamRabbi.png",
    bgTint: "bg-[#FAE297]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
    ],
  },
  {
    id: "11",
    name: "Md. Abdur Rahman",
    role: "SaaS Product Developer",
    image: "/Team/abdurRahman.png",
    bgTint: "bg-[#BDFDEB]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
    ],
  },
];
