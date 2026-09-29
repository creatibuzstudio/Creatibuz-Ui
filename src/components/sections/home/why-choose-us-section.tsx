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
        <span className="text-primary text-base md:text-xl text-center mb-3 font-sans">
          [ Why Choose Us ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-header-text tracking-tight leading-[1.15] text-center">
          <span className="font-bold">Creatibuz Studio Alternative?</span>
          <br />
          <span className="font-bold">Think </span>
          <span className="italic font-serif text-header-text">
            One More Time!
          </span>
        </h2>
      </div>

      {/* Bento Grid: 8-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 items-stretch">
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
