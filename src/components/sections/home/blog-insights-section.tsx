"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BlogCardItem, DEFAULT_BLOGS } from "@/data/blog.data";
import { blogService } from "@/services/blog.service";
import { BlogCard } from "./blog/blog-card";

export function BlogInsightsSection() {
  const [blogs, setBlogs] = useState<BlogCardItem[]>(DEFAULT_BLOGS);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogList = await blogService.getAllBlogs();
        if (blogList.length > 0) {
          setBlogs((prev) =>
            prev.map((fallback, idx) => {
              const apiItem = blogList[idx];
              if (!apiItem) return fallback;
              return {
                id: apiItem.id || fallback.id,
                slug: apiItem.slug || fallback.slug,
                title: apiItem.title || fallback.title,
                date: apiItem.createdAt
                  ? new Date(apiItem.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : fallback.date,
                image: fallback.image,
                alt: fallback.alt,
              };
            })
          );
        }
      } catch {
        // Silently preserve DEFAULT_BLOGS
      }
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
        <span className="text-primary text-sm md:text-[20px] text-center mb-3 block">
          [ Our Latest Blog ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-header-text text-center tracking-tight">
          Where Creativity Meets
          <span className="font-serif italic font-normal text-foreground text-center text-3xl sm:text-4xl md:text-5xl mt-1 block">
            Intelligent Design.
          </span>
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
