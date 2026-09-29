export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  link: string;
  tag?: string;
  images: {
    hero: ProjectImage;
    rightTop: ProjectImage;
    rightBottom: ProjectImage;
  };
  metrics: ProjectMetric[];
}

export const cardBgColors = [
  "#1D050F", // 1st card: deep wine / dark crimson
  "#051D1B", // 2nd card: deep emerald / dark teal
  "#281B06", // 3rd card: deep amber / warm dark brown
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: "dignity-health",
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
    link: "https://dignityhealth.org",
    tag: "Healthcare & Telemedicine",
    images: {
      hero: { src: "/featureWorks/Mockup 14.png", width: 2079, height: 1608 },
      rightTop: { src: "/featureWorks/Hand and iPhone 16 Pro.png", width: 999, height: 774 },
      rightBottom: { src: "/featureWorks/iPad Pro.png", width: 999, height: 777 },
    },
    metrics: [
      { value: "92%", label: "Workflow Efficiency" },
      { value: "78%", label: "Team Productivity" },
      { value: "1.2M+", label: "Client Workflows Optimized" },
    ],
  },
  {
    id: "ashray-green",
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
    link: "#contact",
    tag: "NGO & Humanitarian ERP",
    images: {
      hero: { src: "/featureWorks/Mockup 02 1.png", width: 2052, height: 1539 },
      rightTop: { src: "/featureWorks/Mockup 01 1.png", width: 1008, height: 756 },
      rightBottom: { src: "/featureWorks/Mockup 08 1.png", width: 1008, height: 729 },
    },
    metrics: [
      { value: "92%", label: "Workflow Efficiency" },
      { value: "78%", label: "Team Productivity" },
      { value: "1.2M+", label: "Client Workflows Optimized" },
    ],
  },
  {
    id: "crave-habit",
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
    link: "#contact",
    tag: "Habit Tracker & Wellness App",
    images: {
      hero: { src: "/featureWorks/05 5.png", width: 2055, height: 1542 },
      rightTop: { src: "/featureWorks/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png", width: 996, height: 747 },
      rightBottom: { src: "/featureWorks/04 1.png", width: 999, height: 747 },
    },
    metrics: [
      { value: "92%", label: "Workflow Efficiency" },
      { value: "78%", label: "Team Productivity" },
      { value: "1.2M+", label: "Client Workflows Optimized" },
    ],
  },
];
