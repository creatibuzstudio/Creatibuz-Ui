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
import { blogService } from "@/services/blog.service";
import { userService, User } from "@/services/user.service";
import { packageService } from "@/services/package.service";
import { statsService, StatsData } from "@/services/stats.service";
import { BlogPost } from "@/types/blogs.types";
import { CategoryData } from "@/types/pricing.types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function MarketingPage() {
  let initialBlogs: BlogPost[] = [];
  let initialUsers: User[] = [];
  let initialCategories: CategoryData[] = [];
  let initialStats: StatsData | null = null;
  try {
    const [blogList, userList, pricingCategories, statsData] = await Promise.all([
      blogService.getBlogs(),
      userService.getAllUsers(),
      packageService.getPricingCategories(),
      statsService.getStats(),
    ]);
    if (Array.isArray(blogList) && blogList.length > 0) {
      initialBlogs = blogList.slice(0, 3);
    }
    if (Array.isArray(userList) && userList.length > 0) {
      initialUsers = userList;
    }
    if (Array.isArray(pricingCategories) && pricingCategories.length > 0) {
      initialCategories = pricingCategories;
    }
    if (statsData) {
      initialStats = statsData;
    }
  } catch (err) {
    console.error("Error fetching homepage data on server:", err);
  }

  return (
    <div className="relative min-h-screen w-full bg-background text-primary-text flex flex-col justify-between overflow-hidden">
      <HeroSection />

      <SectionContainer extendTopBorder={true}>
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
        <PricingPlansSection initialCategories={initialCategories} />
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
        <BlogInsightsSection initialBlogs={initialBlogs} />
      </SectionContainer>

      <SectionContainer extendTopBorder={false}>
        <PlatformFeaturesSection />
      </SectionContainer>
    </div>
  );
}
