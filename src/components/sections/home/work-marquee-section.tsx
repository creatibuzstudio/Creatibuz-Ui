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
    <section className="relative w-full bg-black overflow-hidden sm:py-8 flex flex-col gap-2 py-16 md:py-24 lg:py-32 select-none">
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
    </section>
  );
}

export default WorkMarqueeSection;
