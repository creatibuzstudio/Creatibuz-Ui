"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlexiblePlansCard } from "./why-choose-us/flexible-plans-card";
import { BrandShowcaseCard } from "./why-choose-us/brand-showcase-card";
import { UnlimitedRevisionCard } from "./why-choose-us/unlimited-revision-card";
import { LifetimeSupportCard } from "./why-choose-us/lifetime-support-card";
import { DiverseSkillsCard } from "./why-choose-us/diverse-skills-card";

export function WhyChooseUsSection() {
  return (
    <div id="why-choose-us" className="w-full flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-12 md:mb-16"
      >
        <span className="text-primary text-base md:text-xl text-center mb-3 font-sans">
          [ Why Choose Us ]
        </span>
        <h2 className="text-[20px] min-[380px]:text-[22px] min-[440px]:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-header-text tracking-tight leading-[1.2] sm:leading-[1.15] text-center">
          <span className="font-bold whitespace-nowrap">
            Creatibuz Studio Alternative?
          </span>
          <br />
          <span className="font-bold">Think </span>
          <span className="italic font-serif text-header-text">
            One More Time!
          </span>
        </h2>
      </motion.div>

      {/* Bento Grid: 8-Column Layout */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 md:grid-cols-8 gap-6 items-stretch w-full"
      >
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
      </motion.div>
    </div>
  );
}

export default WhyChooseUsSection;
