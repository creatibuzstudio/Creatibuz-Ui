"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceItem } from "@/data/services.data";

interface ServicePreviewCardProps {
  current: ServiceItem;
}

export function ServicePreviewCard({ current }: ServicePreviewCardProps) {
  return (
    <div className="lg:sticky lg:top-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          {/* Image Container */}
          <div
            style={{
              aspectRatio: `${current.width || 4} / ${current.height || 3}`,
            }}
            className="relative w-full overflow-hidden border border-white/10 bg-[#101012] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <Image
              src={current.img}
              alt={current.title}
              fill
              unoptimized
              priority
              className="object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-primary-text font-semibold text-xl sm:text-2xl mt-8 font-sans">
            {current.title}
          </h3>

          {/* Description */}
          <p className="text-primary-text text-sm sm:text-base leading-relaxed max-w-md mt-3 font-sans min-h-[48px]">
            {current.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="bg-card text-primary-text text-xs md:text-[13px] px-4 py-2 rounded-full font-medium font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ServicePreviewCard;
