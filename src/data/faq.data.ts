export interface FaqItem {
  question: string;
  answer: string;
}

export const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects are completed within 5–10 business days, depending on the scope and complexity. Larger or custom requests may take a bit longer. A clear timeline is always shared before we get started.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer end-to-end digital product design including UI/UX design, Web App development, Mobile App development, Branding & Design Systems, and custom AI integration.",
  },
  {
    question: "Can you work with existing branding?",
    answer:
      "Yes, absolutely! We can work seamlessly within your existing brand guidelines, color palettes, and typography while elevating the overall digital experience.",
  },
  {
    question: "What if I need changes after the project is delivered?",
    answer:
      "We offer continuous post-delivery support and revision rounds to ensure everything functions perfectly and meets your expectations.",
  },
  {
    question: "How does the monthly retainer work?",
    answer:
      "Our monthly retainer gives you dedicated design & development bandwidth with predictable costs, priority turnarounds, and zero long-term commitments.",
  },
];
