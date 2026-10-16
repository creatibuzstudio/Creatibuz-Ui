"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types/blogs.types";

interface BlogRelatedPostsProps {
  currentSlug: string;
  posts: BlogPost[];
}

export function BlogRelatedPosts({ currentSlug, posts }: BlogRelatedPostsProps) {
  // Filter out current post and take up to 2 related articles
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 2);

  if (related.length === 0) return null;

  return (
    <section className="relative w-full py-16 border-t border-white/10 bg-[#0C0E12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
              Keep Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans mt-1">
              Related Articles & Highlights
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-white transition-colors mt-3 sm:mt-0 group"
          >
            <span>View All Blogs</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {related.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/blogs/${post.slug}`} className="block w-full">
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#16181D] group-hover:border-primary/40 transition-all duration-300">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-4">
                  <span className="text-xs text-primary font-semibold">
                    {post.category} • {post.readingTime}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mt-1">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogRelatedPosts;
