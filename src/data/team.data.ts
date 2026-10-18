export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  tags: string[];
}

export interface FeedbackMessage {
  name: string;
  avatar: string;
  time: string;
  text: string;
  mention?: string;
}

export const diverseTeamMembers: TeamMember[] = [
  {
    name: "Sourov Dhali",
    role: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    tags: ["UX Specialist", "Design System"],
  },
  {
    name: "Tanvir Ahmed",
    role: "Creative Director",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    tags: ["Brand Design", "Design Direction"],
  },
  {
    name: "Azaz Ahamed",
    role: "Sr Product Designer",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    tags: ["UX Consultant", "SaaS Product Design"],
  },
  {
    name: "Azaz Ahamed",
    role: "Growth Engineer",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    tags: ["Growth Marketing", "SEO Strategy"],
  },
];

export const feedbackChatMessages: FeedbackMessage[] = [
  {
    name: "Abdul Ahad",
    avatar: "/Team/abdulAhad.png",
    time: "Today at 2:47 PM",
    text: "Hey Team, is the landing feedback finalized?",
  },
  {
    name: "Abdur Rahman",
    avatar: "/Team/abdurRahman.png",
    time: "Today at 2:47 PM",
    text: "Yep, all set up ready for review.",
    mention: "@Rubendao",
  },
  {
    name: "Mahmudul Hoque",
    avatar: "/Team/mahmudulHoque.png",
    time: "Today at 2:47 PM",
    text: "Very excited to see the rollout.",
  },
];

export interface CreatibuzTeamDetail {
  serial: number;
  name: string;
  role: string;
  image: string;
}

export const CREATIBUZ_ALL_MEMBERS: CreatibuzTeamDetail[] = [
  { serial: 1, name: "Md. Abdul Hakim", role: "Founder & CEO", image: "/Team/hakimCEO.png" },
  { serial: 2, name: "Ashikur Rahman Ovi", role: "Co-Founder & COO", image: "/Team/oviCOO.png" },
  { serial: 3, name: "Hossain Ahmed", role: "Branding Designer", image: "/Team/hossainAhmed.png" },
  { serial: 4, name: "Anjuman Ara Ayshe", role: "Marketing Executive", image: "/Team/anjumanAyshe.png" },
  { serial: 5, name: "Rasel Ahmed", role: "Product Designer", image: "/Team/raselAhmed.png" },
  { serial: 6, name: "Abu Taher", role: "Web Developer", image: "/Team/abuTaher.png" },
  { serial: 7, name: "Abdul Ahad", role: "Mobile App Developer", image: "/Team/abdulAhad.png" },
  { serial: 8, name: "Md. Ibrahim", role: "UI/UX Designer", image: "/Team/ibrahim.png" },
  { serial: 9, name: "Israt Jahan", role: "Web Developer", image: "/Team/isratJahan.png" },
  { serial: 10, name: "S.M Mazharul Islam", role: "SaaS Product Developer", image: "/Team/smMazhar.png" },
  { serial: 11, name: "Md. Abdur Rahman", role: "SaaS Product Developer", image: "/Team/abdurRahman.png" },
  { serial: 12, name: "Jahid Hasan", role: "Mobile App Developer", image: "/Team/jahidHasan.png" },
  { serial: 13, name: "Mahmudul Hoque", role: "SaaS Product Developer", image: "/Team/mahmudulHoque.png" },
  { serial: 14, name: "Md. Golam Rabbi", role: "Web Developer", image: "/Team/golamRabbi.png" },
];

export const aiLogosGrid: string[] = [
  "/whyChooseUs/aiLogo/08.png",
  "/whyChooseUs/aiLogo/01.png",
  "/whyChooseUs/aiLogo/06.png",
  "/whyChooseUs/aiLogo/07.png",
  "/whyChooseUs/aiLogo/02.png",
  "/whyChooseUs/aiLogo/05.png",
  "/whyChooseUs/aiLogo/04.png",
  "/whyChooseUs/aiLogo/03.png",
];
