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
    id: "1",
    name: "Md Abdul Hakim",
    role: "Founder & CEO",
    image: "/specialist/Team 01.png",
    bgTint: "bg-[#FAE297]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "2",
    name: "Ashikur Rahman Ovi",
    role: "Co-Founder & COO",
    image: "/specialist/Team 02.png",
    bgTint: "bg-[#BDFDEB]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "3",
    name: "Md. Ibrahim",
    role: "Product Designer",
    image: "/specialist/Team 03.png",
    bgTint: "bg-[#DFF6FF]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "4",
    name: "Md Abdur Rahman",
    role: "Senior Full Stack Developer",
    image: "/specialist/Team 04.png",
    bgTint: "bg-[#A0C599]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "5",
    name: "Anjuman Ara Ayshe",
    role: "Marketing Executive",
    image: "/specialist/Team 05.png",
    bgTint: "bg-[#FAE297]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "6",
    name: "Hossain Ahmend",
    role: "Branding Designer",
    image: "/specialist/Team 06.png",
    bgTint: "bg-[#BDFDEB]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
];
