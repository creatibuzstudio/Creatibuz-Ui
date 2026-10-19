"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types/blogs.types";
import { SectionContainer } from "@/components/ui/section-container";

interface BlogRelatedPostsProps {
  currentSlug: string;
  posts: BlogPost[];
}

export function BlogRelatedPosts({
  currentSlug,
  posts,
}: BlogRelatedPostsProps) {
  // Filter out current post and take up to 3 related articles
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <SectionContainer
      showTopBorder={true}
      showBottomBorder={true}
      crossMarkers={true}
      noPadding={true}
      containerClassName="bg-[#0C0E12]"
    >
      <div className="w-full px-5 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-36">
        <div className="flex flex-col justify-center mb-10">
          <span className="text-primary text-center text-base md:text-xl mb-3 font-sans">
            [ Keep Reading ]
          </span>
          <h2 className="font-bold text-header-text text-3xl md:text-4xl lg:text-[40px] text-center tracking-tight">
            See Other Blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-8">
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
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 bg-[#16181D] group-hover:border-primary/40 transition-all duration-300">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-4">
                  <span className="text-xs text-primary font-semibold">
                    {post.category} • {post.readingTime}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mt-1">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-lg font-semibold text-primary hover:text-white transition-colors sm:mt-0 group"
          >
            <span>View All Blogs</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}

export default BlogRelatedPosts;
