export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Understand",
    description: "Business goals and strategy, persona and pinpoints, competitors analysis.",
    icon: "/designProcess/Understand.png",
  },
  {
    step: "Step 02",
    title: "Define",
    description: "UX Strategy, information architecture, userflows, moodboard, visual direction.",
    icon: "/designProcess/Define.png",
  },
  {
    step: "Step 03",
    title: "Ideate",
    description: "Brainstorming, problem solution propose, sketching, wireframing.",
    icon: "/designProcess/Ideate.png",
  },
  {
    step: "Step 04",
    title: "Design",
    description: "Brand Style guide, Final ui design, design system, interface design.",
    icon: "/designProcess/Design.png",
  },
  {
    step: "Step 05",
    title: "Testing",
    description: "Interactive Prototyping, testing, feedback collection, and implementation.",
    icon: "/designProcess/Testing.png",
  },
  {
    step: "Step 06",
    title: "Approval",
    description: "Submission, Asset preparation, exports & Presentation",
    icon: "/designProcess/Approval.png",
  },
  {
    step: "Step 07",
    title: "Final Delivery",
    description: "Development handoff, documentation, organize Figma file.",
    icon: "/designProcess/Final Delivery.png",
  },
];
