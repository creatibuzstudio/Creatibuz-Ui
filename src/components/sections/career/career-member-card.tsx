"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CareerTeamMember } from "@/types/career.types";

interface CareerMemberCardProps {
  member: CareerTeamMember;
  index: number;
}

export function CareerMemberCard({ member, index }: CareerMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/5] transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:-translate-y-1 select-none flex flex-col justify-end"
    >
      {/* Portrait Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover object-top transition-transform duration-600 ease-out group-hover:scale-105"
        />

        {/* Ambient darken overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Smooth Dark Gradient Scrim at bottom to ensure text readability */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/80 to-transparent pointer-events-none z-10 transition-opacity duration-300" />

      {/* Member Details Container */}
      <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end">
        <h3 className="text-white font-semibold text-[24px] md:text-[30px] tracking-tight leading-snug font-sans">
          {member.name}
        </h3>
        <p className="text-zinc-400 text-base sm:text-[20px] mt-1 tracking-tight">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export default CareerMemberCard;
