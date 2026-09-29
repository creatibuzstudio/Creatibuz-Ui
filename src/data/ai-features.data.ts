import {
  Workflow,
  Sparkles,
  PencilRuler,
  FileText,
  UserCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface AiFeatureCardItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const leftAiFeatures: AiFeatureCardItem[] = [
  {
    id: "workflows",
    title: "Agent-Powered Workflows",
    description:
      "Turn repetitive tasks into autonomous flows: agents plan, execute, and report with guardrails, audit trails, and clear handoff to humans.",
    icon: Workflow,
  },
  {
    id: "visual-direction",
    title: "AI Visual Direction",
    description:
      "Visual direction using AI-generated imagery, refined color palettes, clean compositions, and consistent visual elements.",
    icon: Sparkles,
  },
  {
    id: "wireframing",
    title: "Faster Wireframing",
    description:
      "Wireframing process with AI-assisted ideas, layouts, and user flows. Quickly turn concepts into clear, structured wireframes.",
    icon: PencilRuler,
  },
];

export const rightAiFeatures: AiFeatureCardItem[] = [
  {
    id: "ux-copy",
    title: "UX Copy That Converts",
    description:
      "Generate strategic UX copy, Craft clear, and user-focused copy, and messaging designed to improve clarity and engagement.",
    icon: FileText,
  },
  {
    id: "human-ux",
    title: "Human-Centered AI UX",
    description:
      "Use AI-powered insights to understand user behavior, identify friction points, and uncover opportunities for improvement.",
    icon: UserCheck,
  },
  {
    id: "launches",
    title: "AI-Assisted Launches",
    description:
      "Product launches with AI-assisted workflows that Reduce repetitive tasks and launch digital products more efficiently with faster execution.",
    icon: Rocket,
  },
];
