import React from "react";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PartnerLogosSection } from "@/components/sections/home/partner-logos-section";
import { AboutIntroSection } from "@/components/sections/home/about-intro-section";
import { ServicesShowcaseSection } from "@/components/sections/home/services-showcase-section";
import { FeaturedWorksSection } from "@/components/sections/home/featured-works-section";
import { DesignProcessSection } from "@/components/sections/home/design-process-section";
import { AiPoweredDesignSection } from "@/components/sections/home/ai-powered-design-section";
import { WhyChooseUsSection } from "@/components/sections/home/why-choose-us-section";
import { WorkMarqueeSection } from "@/components/sections/home/work-marquee-section";
import { PricingPlansSection } from "@/components/sections/home/pricing-plans-section";
import { InteractiveOrbitCtaSection } from "@/components/sections/home/interactive-orbit-cta-section";
import { BlogInsightsSection } from "@/components/sections/home/blog-insights-section";
import { TeamSpecialistsSection } from "@/components/sections/home/team-specialists-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { ContactCtaSection } from "@/components/sections/home/contact-cta-section";
import { ClientTestimonialsSection } from "@/components/sections/home/client-testimonials-section";
import { PlatformFeaturesSection } from "@/components/sections/home/platform-features-section";
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

      <WorkMarqueeSection />

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
        <FaqSection />
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
