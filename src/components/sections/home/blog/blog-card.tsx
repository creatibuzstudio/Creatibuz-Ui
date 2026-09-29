"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlogCardItem } from "@/data/blog.data";

interface BlogCardProps {
  card: BlogCardItem;
  index: number;
  isActive: boolean;
  onHover: () => void;
}

export function BlogCard({ card, index, isActive, onHover }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      className="bg-nav rounded-xl p-3 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
    >
      <div>
        {/* Featured Thumbnail */}
        <div className="rounded-xl overflow-hidden aspect-[16/10] bg-black/40 border border-white/5 relative">
          <Image
            src={card.image}
            alt={card.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Date Tag */}
        <span className="text-primary-text text-xs font-normal mt-4 block">
          {card.date}
        </span>

        {/* Article Headline */}
        <h3 className="text-primary-text font-medium text-base md:text-lg leading-snug mt-2 mb-6 line-clamp-2 group-hover:text-foreground transition-colors">
          {card.title}
        </h3>
      </div>

      {/* Interactive CTA Button */}
      <div className="my-2">
        <Link
          href={`/blog/${card.slug}`}
          className={`rounded-full px-4 pr-2 py-2 flex items-center justify-between w-fit gap-3 transition-all duration-300 group/btn ${
            isActive
              ? "bg-primary text-foreground text-sm md:text-base font-semibold shadow-[0_0_30px_rgba(248,88,0,0.45)]"
              : "bg-[#202020] text-header-text text-sm md:text-base font-medium border border-white/10 hover:bg-zinc-800"
          }`}
        >
          <span>Open Article</span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-300 group-hover/btn:rotate-45 ${
              isActive
                ? "bg-white text-primary"
                : "bg-primary text-foreground"
            }`}
          >
            <ArrowUpRight className="w-5 h-5 stroke-[2]" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
