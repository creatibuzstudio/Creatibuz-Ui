"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LEADERSHIP_TEAM, STUDIO_TEAM_MEMBERS } from "@/data/career.data";
import { FounderCard } from "./founder-card";
import { CareerMemberCard } from "./career-member-card";
import { SectionContainer } from "@/components/ui/section-container";

export function CareerFamilySection() {
  return (
    <section className="relative w-full pt-36 sm:pt-40 md:pt-44 overflow-hidden">
      {/* Dynamic Ribbon Wave Graphic Backdrop starting from absolute top-0 behind navbar */}
      <div className="absolute top-0 inset-x-0 w-full h-[650px] sm:h-[800px] md:h-[920px] pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/Team/team-bg.jpg"
          alt="Creative Waves Background"
          fill
          priority
          className="object-cover object-top opacity-70 mix-blend-screen"
        />
        {/* Dark bg-color mask overlay with low opacity to prevent glare */}
        <div className="absolute inset-0 bg-[#0C0E12]/65" />
        {/* Soft gradient fade mask to blend smoothly into deep background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E12]/20 via-[#0C0E12]/60 to-[#0C0E12]" />
      </div>
      {/* Top Header & Founders Section (Outside SectionContainer, on the background image) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.14] font-sans">
            Our Talented Creatibuz
            <br />
            Studio Family
          </h1>
        </motion.div>

        {/* Leadership / Founders Row (2 Columns) */}
        <div className="max-w-[760px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {LEADERSHIP_TEAM.map((founder, idx) => (
            <FounderCard key={founder.id} member={founder} index={idx} />
          ))}
        </div>
      </div>

      {/* SectionContainer: starts below the background image/founders, side lines visible from here downwards */}
      <SectionContainer
        showTopBorder={false}
        showBottomBorder={false}
        crossMarkers={false}
        noPadding={true}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-36">
          {/* Team Members Grid (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {STUDIO_TEAM_MEMBERS.map((member, idx) => (
              <CareerMemberCard key={member.id} member={member} index={idx} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerFamilySection;
