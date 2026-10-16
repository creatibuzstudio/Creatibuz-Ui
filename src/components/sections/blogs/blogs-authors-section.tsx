"use client";

import React from "react";
import { motion } from "framer-motion";
import { BLOG_AUTHORS } from "@/data/blogs.data";
import { AuthorCard } from "./author-card";
import { SectionContainer } from "@/components/ui/section-container";

export function BlogsAuthorsSection() {
  return (
    <SectionContainer
      showTopBorder={true}
      showBottomBorder={true}
      crossMarkers={true}
      noPadding={true}
      containerClassName="bg-[#0C0E12]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary text-sm sm:text-base font-semibold tracking-wider font-sans uppercase mb-3 inline-block">
            [ Authors ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2] font-sans">
            Voices Behind{" "}
            <span className="font-serif italic font-normal text-white">
              The Words
            </span>
          </h2>
        </motion.div>

        {/* 3 Author Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BLOG_AUTHORS.map((author, idx) => (
            <AuthorCard key={author.id} author={author} index={idx} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default BlogsAuthorsSection;
