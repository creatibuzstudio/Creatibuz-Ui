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
    icon: "/designprocess/Understand.png",
  },
  {
    step: "Step 02",
    title: "Define",
    description: "UX Strategy, information architecture, userflows, moodboard, visual direction.",
    icon: "/designprocess/Define.png",
  },
  {
    step: "Step 03",
    title: "Ideate",
    description: "Brainstorming, problem solution propose, sketching, wireframing.",
    icon: "/designprocess/Ideate.png",
  },
  {
    step: "Step 04",
    title: "Design",
    description: "Brand Style guide, Final ui design, design system, interface design.",
    icon: "/designprocess/Design.png",
  },
  {
    step: "Step 05",
    title: "Testing",
    description: "Interactive Prototyping, testing, feedback collection, and implementation.",
    icon: "/designprocess/Testing.png",
  },
  {
    step: "Step 06",
    title: "Approval",
    description: "Submission, Asset preparation, exports.",
    icon: "/designprocess/Approval.png",
  },
  {
    step: "Step 07",
    title: "Final Delivery",
    description: "Dev handoff, documentation, organize Figma file.",
    icon: "/designprocess/Final Delivery.png",
  },
];
