"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types/blogs.types";
import { SectionContainer } from "@/components/ui/section-container";

interface BlogDetailHeaderProps {
  post: BlogPost;
}

export function BlogDetailHeader({ post }: BlogDetailHeaderProps) {
  return (
    <section className="relative w-full pt-32 lg:pt-40 overflow-hidden">
      {/* Background Ambience with team-bg.jpg */}
      <div className="absolute top-0 inset-x-0 w-full h-[580px] sm:h-[680px] md:h-[750px] pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/Team/team-bg.jpg"
          alt="Atmospheric Background"
          fill
          priority
          className="object-cover object-top mix-blend-screen"
        />
        {/* Mask overlay */}
        <div className="absolute inset-0 bg-[#0C0E12]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0E12]/70 to-[#0C0E12]" />
      </div>

      {/* Side vertical border lines starting strictly below the top bg image */}
      <div className="absolute inset-x-0 top-0 bottom-0 max-w-7xl mx-auto pointer-events-none z-10">
        <div className="absolute left-0 top-[580px] sm:top-[680px] md:top-[750px] bottom-0 w-px bg-white/[0.12]" />
        <div className="absolute right-0 top-[580px] sm:top-[680px] md:top-[750px] bottom-0 w-px bg-white/[0.12]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-36">
        {/* 1. Breadcrumbs (Center Aligned): Home › Blogs › Blog details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 mb-6"
        >
          <Link
            href="/"
            className="hover:text-white transition-colors font-medium"
          >
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <Link
            href="/blogs"
            className="hover:text-white transition-colors font-medium"
          >
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-primary font-medium">Blog details</span>
        </motion.div>

        {/* 2. Blog Post Title (Center Aligned, Large Bold Typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-foreground/80 tracking-tight leading-[1.15] font-sans text-center max-w-4xl mx-auto mb-8 sm:mb-10"
        >
          {post.title}
        </motion.h1>

        {/* 3. Meta Info Row (Desktop: all 3 in a row with vertical dividers; Mobile: Author on top, Publish & Update side-by-side below) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-10 lg:gap-14 py-4 px-4 sm:px-8 max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          {/* Author */}
          <div className="flex flex-col items-center text-center">
            <span className="text-sm sm:text-base md:text-lg text-zinc-500 uppercase tracking-wider mb-1 font-medium">
              Author
            </span>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-zinc-800 shrink-0">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="text-[18px] sm:text-[20px] md:text-2xl font-medium text-foreground/75">
                {post.author.name}
              </span>
            </div>
          </div>

          {/* Divider between Author and Dates: Horizontal line on mobile, Vertical line on desktop */}
          <div className="w-48 sm:w-56 h-px bg-white/10 md:hidden" />
          <div className="hidden md:block w-px h-8 bg-white/10" />

          {/* Dates Row: side-by-side flex on mobile with vertical divider, matching inline items on desktop */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {/* Publish Date */}
            <div className="flex flex-col items-center text-center">
              <span className="text-sm sm:text-base md:text-lg text-zinc-500 uppercase tracking-wider mb-1 font-medium">
                Publish Date
              </span>
              <span className="text-[18px] sm:text-[20px] md:text-2xl font-medium text-foreground/75">
                {post.publishedAt}
              </span>
            </div>

            {/* Vertical Divider between Publish Date & Latest Update (both mobile & desktop) */}
            <div className="w-px h-8 bg-white/10" />

            {/* Latest Update */}
            <div className="flex flex-col items-center text-center">
              <span className="text-sm sm:text-base md:text-lg text-zinc-500 uppercase tracking-wider mb-1 font-medium">
                Latest Update
              </span>
              <span className="text-[18px] sm:text-[20px] md:text-2xl font-medium text-foreground/75">
                {post.publishedAt}
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4. Featured Thumbnail Image (Centered, Rounded, HD Shadow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-[#16181D]"
        >
          <Image
            src={post.image}
            alt={post.alt || post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BlogDetailHeader;
