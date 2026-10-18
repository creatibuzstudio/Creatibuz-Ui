"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlogCardItem } from "@/data/blog.data";
import PrimaryButton from "@/components/ui/primary-button";

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
      <div>
        <PrimaryButton href={`/blogs/${card.slug}`} text="Read Article" size="sm" glow={false}/>
      </div>
    </motion.div>
  );
}
