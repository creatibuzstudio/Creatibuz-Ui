"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CareerTeamMember } from "@/types/career.types";
import { getLocalTeamPhoto } from "@/services/user.service";

interface CareerMemberCardProps {
  member: CareerTeamMember;
  index: number;
}

export function CareerMemberCard({ member, index }: CareerMemberCardProps) {
  const [imgSrc, setImgSrc] = useState(member.image || getLocalTeamPhoto(member.name, index));

  useEffect(() => {
    setImgSrc(member.image || getLocalTeamPhoto(member.name, index));
  }, [member.image, member.name, index]);

  const colIndex = index % 3;
  const delay = colIndex * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
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
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => setImgSrc(getLocalTeamPhoto(member.name, index))}
        />

        {/* Subtle Black Shade Overlay to soften bright white background */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none transition-colors duration-300 group-hover:bg-black/15" />
      </div>

      {/* Dynamic Background Scrim for Name & Designation: Black/Gray on mobile, Primary orange on desktop hover */}
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-zinc-950/95 via-black/70 to-transparent lg:from-primary lg:via-primary/70 lg:to-transparent pointer-events-none z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out" />

      {/* Dynamic Name & Designation Container: Slides up on desktop hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end z-20 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-5 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 ease-out">
        <h3 className="text-white font-semibold text-[24px] md:text-[30px] tracking-tight leading-[1.15] font-sans">
          {member.name}
        </h3>
        <p className="text-white/90 text-base md:text-[20px] leading-snug mt-1 font-sans">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

export default CareerMemberCard;
