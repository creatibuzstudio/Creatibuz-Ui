import React from "react";
import {
  HeroSection,
  PartnerLogosSection,
  AboutIntroSection,
  ServicesShowcaseSection,
  FeaturedWorksSection,
  DesignProcessSection,
  AiPoweredDesignSection,
  WhyChooseUsSection,
  WorkMarqueeSection,
  PricingPlansSection,
  InteractiveOrbitCtaSection,
  TeamSpecialistsSection,
  FaqSection,
  ContactCtaSection,
  ClientTestimonialsSection,
  BlogInsightsSection,
  PlatformFeaturesSection,
} from "@/components/sections/home";
import { SectionContainer } from "@/components/ui/section-container";
import { userService, User } from "@/services/user.service";
import { statsService, StatsData } from "@/services/stats.service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MarketingPage() {
  let initialStats: StatsData | null = null;
  let initialUsers: User[] = [];
  try {
    const [statsData, userList] = await Promise.all([
      statsService.getAboutStats(),
      userService.getAllUsers(),
    ]);
    if (statsData) {
      initialStats = statsData;
    }
    if (Array.isArray(userList)) {
      initialUsers = userList;
    }
  } catch (err) {
    console.error("Error fetching homepage data on server:", err);
  }
  ///kjlkjljl

  return (
    <div className="relative min-h-screen w-full bg-background text-primary-text flex flex-col justify-between overflow-hidden">
      <HeroSection />

      <SectionContainer extendTopBorder={false}>
        <PartnerLogosSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <AboutIntroSection initialStats={initialStats} />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <ServicesShowcaseSection />
      </SectionContainer>

      <FeaturedWorksSection />

      <DesignProcessSection />

      <SectionContainer extendTopBorder={false} noPadding={true}>
        <PricingPlansSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false} noPadding={true}>
        <WorkMarqueeSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <AiPoweredDesignSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <WhyChooseUsSection />
      </SectionContainer>

      <InteractiveOrbitCtaSection />

      <SectionContainer extendTopBorder={false}>
        <TeamSpecialistsSection initialUsers={initialUsers} />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <FaqSection limit={5} showViewAll={true} />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <ContactCtaSection />
      </SectionContainer>

      <ClientTestimonialsSection />

      <SectionContainer extendTopBorder={false}>
        <BlogInsightsSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <PlatformFeaturesSection />
      </SectionContainer>
    </div>
  );
}
