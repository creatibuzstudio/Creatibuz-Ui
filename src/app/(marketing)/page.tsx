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

export default function MarketingPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-primary-text flex flex-col justify-between overflow-hidden">
      <HeroSection />

      <SectionContainer extendTopBorder={true}>
        <PartnerLogosSection />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <AboutIntroSection />
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
        <TeamSpecialistsSection />
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
