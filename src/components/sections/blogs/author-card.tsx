"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogAuthor } from "@/types/blogs.types";

interface AuthorCardProps {
  author: BlogAuthor;
  index: number;
}

export function AuthorCard({ author, index }: AuthorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col select-none"
    >
      {/* Portrait Photo Container with Vibrant Blue Backdrop */}
      <div className="relative w-full aspect-[4/4.6] overflow-hidden rounded-xl">
        <Image
          src={author.image}
          alt={author.name}
          fill
          priority={index === 0}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle ambient light glow on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
      </div>

      {/* Bottom Info Bar matching FounderCard */}
      <div className="w-full mt-4 rounded-lg px-5 pr-3 py-2.5 md:px-5 md:pr-4 md:py-3 bg-[#1F1F1F] flex items-center justify-between gap-3 relative z-10">
        <div className="flex flex-col min-w-0">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] tracking-tight leading-snug font-sans truncate">
            {author.name}
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base font-medium mt-0.5 tracking-tight truncate">
            {author.role}
          </p>
        </div>

        {/* Orange Brand Badge with Creatibuz Symbol */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(254,90,0,0.35)] group-hover:bg-[#ff6a14] group-hover:scale-105 transition-all duration-300">
          <Image
            src={author.badgeIcon}
            alt={author.badgeAlt || "Creatibuz Badge"}
            width={22}
            height={22}
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AuthorCard;
