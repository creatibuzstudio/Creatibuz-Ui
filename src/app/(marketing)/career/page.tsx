import React from "react";
import type { Metadata } from "next";
import {
  CareerFamilySection,
  CareerPerksSection,
  CareerJoinTeamSection,
} from "@/components/sections/career";
import { FaqSection } from "@/components/sections/home/faq-section";
import { ClientTestimonialsSection } from "@/components/sections/home/client-testimonials-section";
import { SectionContainer } from "@/components/ui/section-container";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";
import { userService } from "@/services/user.service";

export const metadata: Metadata = {
  title: "Career - Our Talented Creatibuz Studio Family",
  description:
    "Meet our talented Creatibuz Studio family, explore employee benefits, and join our creative team.",
};

export const revalidate = 60;

export default async function CareerPage() {
  const { leadership, team } = await userService.getCareerMembersWithFallback();

  return (
    <div className="relative min-h-screen w-full bg-background text-primary-text flex flex-col justify-between overflow-hidden">
      {/* 1. Our Talented Creatibuz Studio Family Section (starts at page top-0 above/behind navbar) */}
      <CareerFamilySection initialLeadership={leadership} initialTeam={team} />

      {/* 2. Employee Benefits / Perks Section */}
      <CareerPerksSection />

      {/* 3. Frequently Asked Questions Section */}
      <SectionContainer extendTopBorder={false} showTopBorder={false}>
        <FaqSection />
      </SectionContainer>

      {/* 4. Want to be a Creatibuz Studio Team like us? (Join Team CTA Banner) */}
      <SectionContainer extendTopBorder={false} showTopBorder={true}>
        <CareerJoinTeamSection />
      </SectionContainer>

      {/* 5. Client Testimonials / Feedback Section */}
      <ClientTestimonialsSection />
      <FooterBoundarySparks />
    </div>
  );
}
