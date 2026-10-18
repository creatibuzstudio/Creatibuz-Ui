import { FounderMember, CareerTeamMember, JobOpening, EmployeeBenefit } from "@/types/career.types";

export const LEADERSHIP_TEAM: FounderMember[] = [
  {
    id: "member-1",
    name: "Md. Abdul Hakim",
    role: "Founder & CEO",
    image: "/Team/ceo.png",
    badgeIcon: "/creatibuz-symbol.png",
    badgeAlt: "Creatibuz Symbol",
  },
  {
    id: "member-2",
    name: "Ashikur Rahman Ovi",
    role: "Co-Founder & COO",
    image: "/Team/coo.png",
    badgeIcon: "/creatibuz-symbol.png",
    badgeAlt: "Creatibuz Symbol",
  },
];

export const STUDIO_TEAM_MEMBERS: CareerTeamMember[] = [
  // Row 1 (Serial: 3, 4, 5)
  {
    id: "member-3",
    name: "Hossain Ahmed",
    role: "Branding Designer",
    department: "Design",
    image: "/Team/hossainAhmed.png",
  },
  {
    id: "member-4",
    name: "Anjuman Ara Ayshe",
    role: "Marketing Executive",
    department: "Marketing",
    image: "/Team/anjumanAyshe.png",
  },
  {
    id: "member-5",
    name: "Rasel Ahmed",
    role: "Product Designer",
    department: "Design",
    image: "/Team/raselAhmed.png",
  },

  // Row 2 (Serial: 8, 7, 12)
  {
    id: "member-8",
    name: "Md. Ibrahim",
    role: "UI/UX Designer",
    department: "Design",
    image: "/Team/ibrahim.png",
  },
  {
    id: "member-7",
    name: "Abdul Ahad",
    role: "Mobile App Developer",
    department: "Engineering",
    image: "/Team/abdulAhad.png",
  },
  {
    id: "member-12",
    name: "Jahid Hasan",
    role: "Mobile App Developer",
    department: "Engineering",
    image: "/Team/jahidHasan.png",
  },

  // Row 3 (Serial: 6, 14, 9)
  {
    id: "member-6",
    name: "Abu Taher",
    role: "Web Developer",
    department: "Engineering",
    image: "/Team/abuTaher.png",
  },
  {
    id: "member-14",
    name: "Md. Golam Rabbi",
    role: "Web Developer",
    department: "Engineering",
    image: "/Team/golamRabbi.png",
  },
  {
    id: "member-9",
    name: "Israt Jahan",
    role: "Web Developer",
    department: "Engineering",
    image: "/Team/isratJahan.png",
  },

  // Row 4 (Serial: 13, 11, 10)
  {
    id: "member-13",
    name: "Mahmudul Hoque",
    role: "SaaS Product Developer",
    department: "Engineering",
    image: "/Team/mahmudulHoque.png",
  },
  {
    id: "member-11",
    name: "Md. Abdur Rahman",
    role: "SaaS Product Developer",
    department: "Engineering",
    image: "/Team/abdurRahman.png",
  },
  {
    id: "member-10",
    name: "S.M Mazharul Islam",
    role: "SaaS Product Developer",
    department: "Engineering",
    image: "/Team/smMazhar.png",
  },
];

export const CAREER_OPENINGS: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Full Stack Next.js Engineer",
    department: "Engineering",
    location: "Remote / Dhaka",
    type: "Full-Time",
    experience: "3+ Years",
  },
  {
    id: "job-2",
    title: "Product & UI/UX Designer",
    department: "Design",
    location: "Remote / Dhaka",
    type: "Full-Time",
    experience: "2+ Years",
  },
  {
    id: "job-3",
    title: "Growth & Brand Marketing Specialist",
    department: "Marketing",
    location: "Remote / Dhaka",
    type: "Full-Time",
    experience: "2+ Years",
  },
];

export const EMPLOYEE_BENEFITS: EmployeeBenefit[] = [
  {
    id: "benefit-1",
    title: "Remote Work Freedom",
    description:
      "Work remotely without worrying about missed buses or traffic-related delays. We have operated remotely since day one.",
    iconName: "remote",
  },
  {
    id: "benefit-2",
    title: "Two Festival Bonuses",
    description:
      "Enjoy two festival bonuses every year, each worth 50% of your gross salary, giving you extra room to celebrate the occasions.",
    iconName: "bonus",
  },
  {
    id: "benefit-3",
    title: "Generous Leave Benefits",
    description:
      "Take time for annual breaks, sick days, and marriage leave, with policies designed to help you balance personal life and work.",
    iconName: "leave",
  },
  {
    id: "benefit-4",
    title: "Team Fund",
    description:
      "Receive a monthly team fund allowance for bonding activities, outings, and quality time together with the people you work alongside.",
    iconName: "fund",
  },
  {
    id: "benefit-5",
    title: "Health & Wellness",
    description:
      "Your health and your family's health matter. Our medical allowance is there to support you and your family during difficult times.",
    iconName: "health",
  },
  {
    id: "benefit-6",
    title: "Performance Bonuses",
    description:
      "Outstanding contributions are recognized with bonuses, so your hard work at Creatibuz Studio is rewarded & never goes unnoticed.",
    iconName: "performance",
  },
];
