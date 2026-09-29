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
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "Today at 2:47 PM",
    text: "Hey Team, is the landing feedback finalized?",
  },
  {
    name: "Abdur Rahman",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    time: "Today at 2:47 PM",
    text: "Yep, all set up read for ",
    mention: "@Rubendao",
  },
  {
    name: "Rifat Hasan",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    time: "Today at 2:47 PM",
    text: "Very Exited to see the rolled out.",
  },
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
