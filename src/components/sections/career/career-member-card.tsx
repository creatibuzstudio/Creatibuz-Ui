"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CareerTeamMember } from "@/types/career.types";

interface CareerMemberCardProps {
  member: CareerTeamMember;
  index: number;
}

export function CareerMemberCard({ member, index }: CareerMemberCardProps) {
  const [imgSrc, setImgSrc] = useState(member.image);

  // Row-based alternating slide-in animation:
  // Row 0: Left (-80px)
  // Row 1: Right (+80px)
  // Row 2: Left (-80px)
  // Row 3: Right (+80px)
  const rowIndex = Math.floor(index / 3);
  const isRowFromLeft = rowIndex % 2 === 0;
  const colIndex = index % 3;
  const initialX = isRowFromLeft ? -80 : 80;
  const delay = colIndex * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 1.02, 0.47, 0.98],
      }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[4/5] bg-zinc-900 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-lg select-none"
    >
      {/* Portrait Image */}
      <div className="w-full h-full relative">
        <Image
          src={imgSrc}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => setImgSrc("/Team/hossainAhmed.png")}
        />

        {/* Subtle Black Shade Overlay to soften bright white background */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none transition-colors duration-300 group-hover:bg-black/15" />
      </div>

      {/* Dynamic Background Scrim for Name & Designation: Black/Gray on mobile, Primary orange on desktop hover */}
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-zinc-950/95 via-black/70 to-transparent lg:from-primary lg:via-primary/70 lg:to-transparent pointer-events-none z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out" />

      {/* Dynamic Name & Designation Container: Slides up on desktop hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-20 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-out">
        <h3 className="text-white font-semibold text-[24px] md:text-[30px] tracking-tight font-sans">
          {member.name}
        </h3>
        <p className="text-white/90 text-base md:text-[20px] mt-0.5 font-sans">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export default CareerMemberCard;
