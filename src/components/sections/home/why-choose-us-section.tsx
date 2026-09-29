"use client";

import React from "react";
import { FlexiblePlansCard } from "./why-choose-us/flexible-plans-card";
import { BrandShowcaseCard } from "./why-choose-us/brand-showcase-card";
import { UnlimitedRevisionCard } from "./why-choose-us/unlimited-revision-card";
import { LifetimeSupportCard } from "./why-choose-us/lifetime-support-card";
import { DiverseSkillsCard } from "./why-choose-us/diverse-skills-card";

export function WhyChooseUsSection() {
  return (
    <div id="why-choose-us" className="w-full flex flex-col items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <span className="text-primary text-base md:text-xl text-center mb-3 font-mono">
          [ Why Choose Us ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.15] text-center">
          Creatibuz Studio Alternative?
          <br />
          <span>Think </span>
          <span className="italic font-normal text-foreground">
            One More Time!
          </span>
        </h2>
      </div>

      {/* Bento Grid: 8-Column Layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 items-stretch">
        {/* CARD 1: Flexible Payment Plans */}
        <FlexiblePlansCard />

        {/* CARD 2: Visual Center Showcase */}
        <BrandShowcaseCard />

        {/* CARD 3: Unlimited revision with Chat Feedback */}
        <UnlimitedRevisionCard />

        {/* CARD 4: Lifetime Support */}
        <LifetimeSupportCard />

        {/* CARD 5: Diverse Skill Set & AI-Assisted Launches */}
        <DiverseSkillsCard />
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
