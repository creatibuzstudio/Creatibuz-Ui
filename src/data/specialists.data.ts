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
    name: "Andriani Monlio",
    role: "UI UX Designer",
    image: "/specialist/specialist-1.png",
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
    name: "Andriani Monlio",
    role: "Full Stack Developer",
    image: "/specialist/specialist-2.png",
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
    name: "Andriani Monlio",
    role: "Branding Designer",
    image: "/specialist/specialist-3.png",
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
    name: "Andriani Monlio",
    role: "Marketing Executive",
    image: "/specialist/specialist-4.png",
    bgTint: "bg-[#A0C599]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
];
