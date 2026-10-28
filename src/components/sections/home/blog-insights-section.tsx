"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BlogCardItem, DEFAULT_BLOGS } from "@/data/blog.data";
import { BlogCard } from "./blog/blog-card";

export function BlogInsightsSection() {
  // Render only the first 3 blogs in serial: 1, 3, 2
  // 1: AI Product UI/UX Design (Left)
  // 3: AI Dashboard Design (Middle - Blue Card)
  // 2: How to Design AI SaaS Products (Right)
  const blog1 =
    DEFAULT_BLOGS.find((b) => b.slug === "ai-product-ui-ux-design-guide") ||
    DEFAULT_BLOGS[0];
  const blog3 =
    DEFAULT_BLOGS.find((b) => b.slug === "ai-dashboard-design-best-practices") ||
    DEFAULT_BLOGS[1];
  const blog2 =
    DEFAULT_BLOGS.find((b) => b.slug === "design-trustworthy-ai-saas-products") ||
    DEFAULT_BLOGS[2];

  const initialBlogs: BlogCardItem[] = [blog1, blog3, blog2];

  const [blogs] = useState<BlogCardItem[]>(initialBlogs);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Header & Typography */}
      <motion.div
        id="blog"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-primary text-sm md:text-[20px] text-center mb-3 font-sans">
          [ Our Latest Blog ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] text-header-text text-center tracking-tight">
          <span className="font-bold">Where Creativity Meets</span>
          <br />
          <span className="font-serif italic">Intelligent Design.</span>
        </h2>
      </motion.div>

      {/* Blog Cards Grid */}
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full"
      >
        {blogs.map((card, idx) => {
          const isActive =
            hoveredIndex !== null ? hoveredIndex === idx : idx === 1;

          return (
            <BlogCard
              key={card.id}
              card={card}
              index={idx}
              isActive={isActive}
              onHover={() => setHoveredIndex(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}
