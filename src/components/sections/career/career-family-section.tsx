"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LEADERSHIP_TEAM, STUDIO_TEAM_MEMBERS } from "@/data/career.data";
import { FounderMember, CareerTeamMember } from "@/types/career.types";
import { FounderCard } from "./founder-card";
import { CareerMemberCard } from "./career-member-card";
import { SectionContainer } from "@/components/ui/section-container";

interface CareerFamilySectionProps {
  initialLeadership?: FounderMember[];
  initialTeam?: CareerTeamMember[];
}

export function CareerFamilySection({
  initialLeadership = LEADERSHIP_TEAM,
  initialTeam = STUDIO_TEAM_MEMBERS,
}: CareerFamilySectionProps) {
  const leadership = initialLeadership;
  const team = initialTeam;

  return (
    <section className="relative w-full pt-32 lg:pt-40 overflow-hidden">
      {/* Dynamic Ribbon Wave Graphic Backdrop starting from absolute top-0 behind navbar */}
      <div className="absolute top-0 inset-x-0 w-full h-[650px] sm:h-[800px] md:h-[920px] pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/Team/team-bg.jpg"
          alt="Creative Waves Background"
          fill
          priority
          className="object-cover object-top mix-blend-screen"
        />
        {/* Dark bg-color mask overlay with low opacity to prevent glare */}
        <div className="absolute inset-0 bg-[#0C0E12]/65" />
        {/* Soft gradient fade mask to blend smoothly into deep background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E12]/20 via-[#0C0E12]/60 to-[#0C0E12]" />
      </div>

      {/* Top Header & Founders Section (Outside SectionContainer, on the background image) */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[64px] text-foreground/80 font-semibold tracking-tight leading-[1.14] font-sans">
            Our Talented Creatibuz
            <br />
            Studio Family
          </h1>
        </motion.div>

        {/* Leadership / Preview Members Row (Top: isPreview === true, sorted by order) */}
        {leadership.length > 0 && (
          <div
            className={`mx-auto gap-5 sm:gap-6 mb-12 sm:mb-16 ${
              leadership.length === 1
                ? "max-w-[380px] grid grid-cols-1"
                : leadership.length === 2
                ? "max-w-[760px] grid grid-cols-1 sm:grid-cols-2"
                : "max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {leadership.map((founder, idx) => (
              <FounderCard key={founder.id} member={founder} index={idx} />
            ))}
          </div>
        )}
      </div>

      {/* SectionContainer: starts below the background image/founders, side lines visible from here downwards */}
      <SectionContainer
        showTopBorder={false}
        showBottomBorder={false}
        crossMarkers={false}
        noPadding={true}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-36">
          {/* Team Members Grid (Bottom: remaining non-client members sorted by order) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {team.map((member, idx) => (
              <CareerMemberCard key={member.id} member={member} index={idx} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default CareerFamilySection;
