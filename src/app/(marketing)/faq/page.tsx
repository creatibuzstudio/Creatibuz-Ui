import React from "react";
import type { Metadata } from "next";
import { FaqPageContent } from "@/components/sections/faq";
import { ContactCtaSection } from "@/components/sections/home/contact-cta-section";
import { ClientTestimonialsSection } from "@/components/sections/home/client-testimonials-section";
import { SectionContainer } from "@/components/ui/section-container";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Creatibuz Studio",
  description:
    "Find answers to common questions about starting a project with Creatibuz Studio, our UI/UX timelines, deliverables, pricing, and startup-friendly design services.",
  openGraph: {
    title: "FAQ - Creatibuz Studio",
    description:
      "Everything you need to know about starting a project, UI/UX timelines, pricing, deliverables, design tools, and startup collaboration with Creatibuz Studio.",
  },
};

export default function FaqPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-primary-text flex flex-col justify-between overflow-hidden">
      {/* 1. Dedicated FAQ Content with Hero, Filters & All 10 Accordion Items */}
      <FaqPageContent />

      {/* 2. Ready to Start? Free Consultation & Audit CTA */}
      <SectionContainer extendTopBorder={false} showTopBorder={true}>
        <ContactCtaSection />
      </SectionContainer>

      {/* 3. Client Testimonials */}
      <ClientTestimonialsSection />
    </div>
  );
}
