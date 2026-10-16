"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/types/blogs.types";

interface BlogGridCardProps {
  post: BlogPost;
  index: number;
}

export function BlogGridCard({ post, index }: BlogGridCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col w-full select-none"
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="block w-full focus:outline-none"
      >
        {/* Cover Image Container */}
        <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-[20px] overflow-hidden bg-[#16181D] border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(254,90,0,0.15)] group-hover:border-primary/40 transition-all duration-500">
          <Image
            src={post.image}
            alt={post.alt || post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          {/* Subtle gradient sheen on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title Below Image */}
        <div className="pt-4 sm:pt-5">
          <h3 className="text-white text-base sm:text-lg md:text-[20px] font-bold leading-snug tracking-tight font-sans group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default BlogGridCard;
