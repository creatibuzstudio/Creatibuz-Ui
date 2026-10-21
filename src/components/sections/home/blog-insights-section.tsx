"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlogCardItem } from "@/data/blog.data";
import { blogService } from "@/services/blog.service";
import { BlogCard } from "./blog/blog-card";

export function BlogInsightsSection() {
  const [blogs, setBlogs] = useState<BlogCardItem[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const apiData = await blogService.getBlogsWithFallback();
      const formatted = apiData.map((b) => ({
        id: b.id,
        slug: b.slug,
        title: b.title,
        date: b.publishedAt,
        image: b.image,
        alt: b.alt,
      }));
      setBlogs(formatted);
    };
    fetchBlogs();
  }, []);

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
