import { FounderMember, CareerTeamMember, JobOpening, EmployeeBenefit } from "@/types/career.types";

export const LEADERSHIP_TEAM: FounderMember[] = [
  {
    id: "founder-1",
    name: "Md Abdul Hakim",
    role: "Founder & CEO",
    image: "/Team/ceo.png",
    badgeIcon: "/creatibuz-symbol.png",
    badgeAlt: "Creatibuz Symbol",
  },
  {
    id: "founder-2",
    name: "Ashikur Rahman Ovi",
    role: "Co-Founder & COO",
    image: "/Team/coo.png",
    badgeIcon: "/creatibuz-symbol.png",
    badgeAlt: "Creatibuz Symbol",
  },
];

export const STUDIO_TEAM_MEMBERS: CareerTeamMember[] = [
  // Row 1
  {
    id: "team-1",
    name: "Md Abdur Rahman",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    image: "/specialist/Team 04.png",
  },
  {
    id: "team-2",
    name: "Anjuman Ara Ayshe",
    role: "Marketing Executive",
    department: "Marketing",
    image: "/Team/Team 04.png",
  },
  {
    id: "team-3",
    name: "Hossain Ahmed",
    role: "Branding Designer",
    department: "Design",
    image: "/Team/team 03.png",
  },

  // Row 2
  {
    id: "team-4",
    name: "Mahmudul Hoque",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    image: "/specialist/Team 02.png",
  },
  {
    id: "team-5",
    name: "Md Golam Rabbi",
    role: "Marketing Executive",
    department: "Marketing",
    image: "/Team/Team 7.png",
  },
  {
    id: "team-6",
    name: "Md Abdul Ahad",
    role: "Branding Designer",
    department: "Design",
    image: "/Team/team 4.png",
  },

  // Row 3
  {
    id: "team-7",
    name: "Md Rasel Ahmed",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    image: "/Team/Team 8.png",
  },
  {
    id: "team-8",
    name: "Md Ibrahim",
    role: "Marketing Executive",
    department: "Marketing",
    image: "/Team/Team 9.png",
  },
  {
    id: "team-9",
    name: "Jahid Hasan",
    role: "Branding Designer",
    department: "Design",
    image: "/Team/Team 5.png",
  },

  // Row 4
  {
    id: "team-10",
    name: "Israt Jahan",
    role: "Senior Full Stack Developer",
    department: "Engineering",
    image: "/Team/Team 10.png",
  },
  {
    id: "team-11",
    name: "S M Mazharul Islam",
    role: "Marketing Executive",
    department: "Marketing",
    image: "/Team/Team 11.png",
  },
  {
    id: "team-12",
    name: "Md Abu Taher",
    role: "Branding Designer",
    department: "Design",
    image: "/Team/Team 6.png",
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
      "Stop being worried about missing your bus to the office, we've been remote since day one.",
    iconName: "remote",
  },
  {
    id: "benefit-2",
    title: "Two Festival Bonuses",
    description:
      "Twice the celebrations, twice the bonuses. You'll get 2 yearly bonuses each worth 50% of your gross salary.",
    iconName: "bonus",
  },
  {
    id: "benefit-3",
    title: "Generous Leave Benefits",
    description:
      "Annual breaks, sick days, and marriage leaves, our leave policies always let you balance your life.",
    iconName: "leave",
  },
  {
    id: "benefit-4",
    title: "Team Fund",
    description:
      "Creatibuz Studio provides a monthly team fund allowance for team bonding, outings, and quality time together.",
    iconName: "fund",
  },
  {
    id: "benefit-5",
    title: "Health & Wellness Allowance",
    description:
      "We prioritize your health and your family's. Our medical allowance never leaves you alone at your worst time.",
    iconName: "health",
  },
  {
    id: "benefit-6",
    title: "Performance Bonuses",
    description:
      "Your hard work never goes unnoticed at Creatibuz Studio. You'll earn bonuses for outstanding contributions.",
    iconName: "performance",
  },
];

