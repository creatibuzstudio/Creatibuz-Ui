export interface FaqItem {
  id?: string;
  category?: string;
  question: string;
  answer: string;
}

export const DEFAULT_FAQS: FaqItem[] = [
  {
    id: "start-project",
    category: "Getting Started",
    question: "How can I start a project with Creatibuz Studio?",
    answer:
      "Starting a project with us is simple. Just reach out through our contact form or email and share a brief about your needs. We’ll schedule a call to understand your goals, discuss the scope, and recommend the right approach tailored to your product or brand.",
  },
  {
    id: "why-different",
    category: "About Us",
    question: "Why is Creatibuz Studio different?",
    answer:
      "The team at Creatibuz Studio prioritizes a perfect mix of creativity, client-focused strategy, and deep industry insights. We consistently deliver high-quality UI/UX design across branding, product design, and web design. Our collaborative process ensures designs align with your goals to help your brand grow and succeed. This is definitely a unique process that makes us different from others.",
  },
  {
    id: "timeline",
    category: "Process & Timeline",
    question: "How long does a UI/UX project take?",
    answer:
      "Timelines for a UI/UX design project usually vary by scope. A basic MVP design takes 2 to 4 weeks, while a full product design service with usability testing typically runs 6 to 12 weeks.",
  },
  {
    id: "startup-friendly",
    category: "Startups",
    question: "Is Design Creatibuz Studio a start-up-friendly agency?",
    answer:
      "Yes, Creatibuz Studio is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up.",
  },
  {
    id: "design-tools",
    category: "Tools & Tech",
    question: "What design tools do you use?",
    answer:
      "We use different industry-leading tools. For pixel-perfect UI/UX and web designs, we swear by Figma and FigJam. When it comes to crafting visually stunning branding and product designs, our go-to is the Adobe suite, which includes Photoshop and Illustrator. And for seamless project documentation? Notion's got our back. All are aimed at delivering top-quality results.",
  },
  {
    id: "ux-audit",
    category: "Services",
    question: "Do you provide UX audits or redesigns for existing products?",
    answer:
      "Yes, we offer detailed UX audits as well as full redesign services. Whether your product needs usability improvements or a visual refresh, we analyze existing flows, identify issues, and create strategic design solutions. We manage everything to boost the user experience and performance of your platform.",
  },
  {
    id: "cost-pricing",
    category: "Pricing & Budget",
    question: "How much do UI/UX design services cost?",
    answer:
      "Cost depends on project scope, complexity, and deliverables. Our affordable UI/UX design services start from $1500 for packages like lean MVP design packages and full design system builds personalized to your budget.",
  },
  {
    id: "deliverables",
    category: "Deliverables",
    question: "What deliverables will I receive?",
    answer:
      "You receive wireframes, interactive prototypes, user flows, design tokens, a full component library, Figma source files, and a structured developer handoff package ready for immediate implementation.",
  },
  {
    id: "early-stage-startups",
    category: "Startups",
    question: "Do you work with startups and early-stage products?",
    answer:
      "Yes, we love working with startups. Our MVP design and responsive UI/UX design services are built to help early-stage founders quickly validate ideas and confidently attract investors.",
  },
  {
    id: "user-testing",
    category: "UX & Testing",
    question: "Do I need user testing in the UX design process?",
    answer:
      "Yes, usability testing removes guesswork entirely. It validates design decisions, uncovers hidden friction inside user flows, and directly improves conversion rate optimization before your product reaches real users.",
  },
];
