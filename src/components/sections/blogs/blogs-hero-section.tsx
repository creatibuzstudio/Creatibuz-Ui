"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "@/types/blogs.types";
import { BlogsSearchBar } from "./blogs-search-bar";
import { BlogGridCard } from "./blog-grid-card";
import { BlogsPagination } from "./blogs-pagination";

import { SectionContainer } from "@/components/ui/section-container";

interface BlogsHeroSectionProps {
  initialBlogs: BlogPost[];
}

const ITEMS_PER_PAGE = 4;

export function BlogsHeroSection({ initialBlogs }: BlogsHeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!searchQuery.trim()) return initialBlogs;
    const query = searchQuery.toLowerCase().trim();
    return initialBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.badgeTag.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.author.name.toLowerCase().includes(query) ||
        blog.tags?.some((t) => t.toLowerCase().includes(query))
    );
  }, [initialBlogs, searchQuery]);

  // Reset to page 1 whenever search query changes
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE) || 1;
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  return (
    <section className="relative w-full pt-32 lg:pt-40 overflow-hidden">
      {/* Dynamic Ribbon Wave Graphic Backdrop starting from absolute top-0 behind navbar */}
      <div className="absolute top-0 inset-x-0 w-full h-[520px] sm:h-[580px] md:h-[640px] pointer-events-none z-0 overflow-hidden select-none">
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

      {/* Top Header & Search Bar (Outside SectionContainer, on the background image) */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[64px] text-foreground/80 font-semibold tracking-tight leading-[1.14] font-sans">
            Your Go-To Source:
            <br />
            Blog Highlights & More
          </h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 sm:mb-16"
        >
          <BlogsSearchBar
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </motion.div>
      </div>

      {/* SectionContainer: starts below the background image/search bar, side lines visible from here downwards */}
      <SectionContainer
        showTopBorder={false}
        showBottomBorder={false}
        crossMarkers={false}
        noPadding={true}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-36">
          {/* 4 Blog Cards (2 Columns x 2 Rows) */}
          {paginatedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10 mb-12 sm:mb-14">
              {paginatedBlogs.map((post, idx) => (
                <BlogGridCard key={post.id} post={post} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-12">
              <p className="text-zinc-400 text-base mb-3">
                No blogs found matching &quot;{searchQuery}&quot;
              </p>
              <button
                type="button"
                onClick={() => handleSearchChange("")}
                className="text-primary text-sm font-semibold hover:underline"
              >
                Clear search query
              </button>
            </div>
          )}

          {/* Pagination Bar */}
          <BlogsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </SectionContainer>
    </section>
  );
}

export default BlogsHeroSection;
