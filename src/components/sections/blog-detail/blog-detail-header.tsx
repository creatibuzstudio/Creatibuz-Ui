"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/types/blogs.types";

interface BlogDetailHeaderProps {
  post: BlogPost;
}

export function BlogDetailHeader({ post }: BlogDetailHeaderProps) {
  return (
    <div className="relative w-full pt-32 sm:pt-36 md:pt-40 pb-10 sm:pb-12">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden select-none">
        <Image
          src="/Team/team-bg.jpg"
          alt="Atmospheric Background"
          fill
          priority
          className="object-cover object-top opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[#0C0E12]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0E12]/70 to-[#0C0E12]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-6"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-primary hover:text-white transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Blogs</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-500">{post.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 hidden sm:inline" />
          <span className="text-zinc-300 truncate max-w-[220px] hidden sm:inline">
            {post.title}
          </span>
        </motion.div>

        {/* Metadata Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4"
        >
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary border border-primary/25">
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            {post.publishedAt}
          </span>
        </motion.div>

        {/* Blog Post Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.2] font-sans mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Author Bio Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-between border-y border-white/10 py-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 bg-zinc-800">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">
                {post.author.name}
              </p>
              <p className="text-zinc-400 text-xs">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 hidden sm:inline">
              Verified Author
            </span>
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center p-1 border border-primary/30">
              <Image
                src={post.author.badgeIcon}
                alt="Badge"
                width={14}
                height={14}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] bg-[#16181D]"
        >
          <Image
            src={post.image}
            alt={post.alt || post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default BlogDetailHeader;
