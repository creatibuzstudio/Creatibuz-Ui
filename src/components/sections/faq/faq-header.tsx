"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

interface FaqHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function FaqHeader({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
}: FaqHeaderProps) {
  return (
    <div className="relative w-full pt-32 lg:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      {/* Dynamic Ribbon Wave Graphic Backdrop scoped strictly to header (matching Career & Blogs) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/Team/team-bg.jpg"
          alt="Creatibuz Studio Team Background"
          fill
          priority
          className="object-cover object-top mix-blend-screen"
        />
        {/* Dark bg-color mask overlay with low opacity to prevent glare */}
        <div className="absolute inset-0 bg-[#0C0E12]/65" />
        {/* Soft gradient fade mask to blend smoothly into deep background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0E12]/15 via-[#0C0E12]/60 via-60% to-[#0C0E12] to-90%" />
        {/* Deep bottom fade mask guaranteeing 100% solid #0C0E12 before SectionContainer starts */}
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 bg-gradient-to-t from-[#0C0E12] via-[#0C0E12] to-transparent pointer-events-none" />
      </div>

      {/* Top Header Content (Outside SectionContainer, on top of team-bg) */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[64px] text-foreground/80 font-semibold tracking-tight leading-[1.14] font-sans">
            Frequently Asked
            <br />
            Questions
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default FaqHeader;
