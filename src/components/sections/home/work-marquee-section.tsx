"use client";

import React from "react";
import {
  marqueeTextRow1,
  marqueeTextRow2,
  marqueeImagesRow1,
  marqueeImagesRow2,
} from "@/data/projects.data";
import { TextMarqueeRow } from "./work-marquee/text-marquee-row";
import { ImageMarqueeRow } from "./work-marquee/image-marquee-row";

export function WorkMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-36 flex flex-col gap-4 select-none">
      {/* Full width top horizontal divider line */}
      <div className="w-full h-px bg-white/[0.12] absolute top-0 inset-x-0 pointer-events-none z-10" />

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 38s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. Top Orange Text Marquee (Right to Left) */}
      <TextMarqueeRow items={marqueeTextRow1} direction="left" />

      {/* 2. Upper Image Marquee (Right to Left) */}
      <ImageMarqueeRow images={marqueeImagesRow1} direction="left" />

      {/* 3. Lower Image Marquee (Left to Right) */}
      <ImageMarqueeRow images={marqueeImagesRow2} direction="right" />

      {/* 4. Bottom Orange Text Marquee (Left to Right) */}
      <TextMarqueeRow items={marqueeTextRow2} direction="right" />

      {/* Full width bottom horizontal divider line */}
      <div className="w-full h-px bg-white/[0.12] absolute bottom-0 inset-x-0 pointer-events-none z-10" />
    </section>
  );
}

export default WorkMarqueeSection;
