"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Gift,
  CalendarCheck,
  Wifi,
  BriefcaseMedical,
  Sparkles,
} from "lucide-react";
import { EMPLOYEE_BENEFITS } from "@/data/career.data";
import { SectionContainer } from "@/components/ui/section-container";

function renderBenefitIcon(iconName: string) {
  switch (iconName) {
    case "remote":
      return (
        <svg
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-9 h-9 text-black"
        >
          {/* Finger touch circle */}
          <ellipse cx="14" cy="7" rx="3.5" ry="3.5" />
          {/* Hand pointing outline */}
          <path d="M14 11v8a2 2 0 0 0 2 2h4a3 3 0 0 0 3-3v-4.5a2 2 0 0 0-2-2h-3" />
          <path d="M10.5 17.5l-2.5 1a2 2 0 0 0-1 2.5v0a2 2 0 0 0 2.5 1l4.5-1" />
        </svg>
      );
    case "bonus":
      return <Gift className="w-8 h-8 text-black stroke-[2]" />;
    case "leave":
      return <CalendarCheck className="w-8 h-8 text-black stroke-[2]" />;
    case "fund":
      return <Wifi className="w-8 h-8 text-black stroke-[2]" />;
    case "health":
      return <BriefcaseMedical className="w-8 h-8 text-black stroke-[2]" />;
    case "performance":
      return <Sparkles className="w-8 h-8 text-black stroke-[2]" />;
    default:
      return <Sparkles className="w-8 h-8 text-black stroke-[2]" />;
  }
}

export function CareerPerksSection() {
  return (
    <SectionContainer
      showTopBorder={true}
      showBottomBorder={true}
      showVerticalBorders={false}
      crossMarkers={true}
      noPadding={true}
      containerClassName="bg-[#0C0E12]"
      backgroundContent={
        <>
          {/* Background Grid Pattern: flush with SectionContainer top and bottom borders */}
          <div className="absolute inset-0 pointer-events-none opacity-75 select-none overflow-hidden z-0">
            <Image
              src="/designProcess/designProcess-bg.png"
              alt="Grid Pattern"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Warm Ambient Orange Glow from Bottom: anchored to bottom border line */}
          <div className="absolute inset-x-0 bottom-0 h-[500px] bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(254,90,0,0.28)_0%,rgba(254,90,0,0.08)_50%,transparent_80%)] pointer-events-none z-0" />
        </>
      }
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32 lg:py-36">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <span className="text-primary text-sm sm:text-base font-semibold tracking-wider font-sans uppercase mb-3 inline-block">
            [ Employee Benefits ]
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-header-text tracking-tight font-sans">
            Perks of being a{" "}
            <span className="font-serif italic text-header-text">
              Creatibuz Studio!
            </span>
          </h2>
        </motion.div>

        {/* 6 Benefit Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {EMPLOYEE_BENEFITS.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (idx % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white text-zinc-950 rounded-[22px] sm:rounded-[24px] p-7 sm:p-8 flex flex-col justify-start shadow-[0_12px_36px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] hover:-translate-y-1.5 transition-all duration-300 select-none"
            >
              <div className="mb-6">
                {renderBenefitIcon(benefit.iconName)}
              </div>

              <h3 className="text-[20px] sm:text-[26px] font-medium text-black tracking-tight leading-snug mb-3 font-sans">
                {benefit.title}
              </h3>

              <p className="text-zinc-600 text-[14px] sm:text-base leading-relaxed font-display">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default CareerPerksSection;
