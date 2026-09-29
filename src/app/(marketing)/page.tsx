import React from "react";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PartnerLogosSection } from "@/components/sections/home/partner-logos-section";
import { AboutIntroSection } from "@/components/sections/home/about-intro-section";
import { ServicesShowcaseSection } from "@/components/sections/home/services-showcase-section";
import { FeaturedWorksSection } from "@/components/sections/home/featured-works-section";
import { WorkMarqueeSection } from "@/components/sections/home/work-marquee-section";
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

      <WorkMarqueeSection />
    </div>
  );
}
