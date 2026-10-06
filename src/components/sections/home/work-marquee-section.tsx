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
    <div id="work-marquee" className="w-full">
      {/* Title inside Section Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-header-text tracking-tight leading-[1.15] text-center font-sans max-w-3xl mx-auto">
          Explore Some of Our{" "} <br />
          <span className="font-serif italic font-normal text-header-text">
            Creative Latest Design Work
          </span>
        </h2>
      </div>

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

      {/* Marquee overflowing the section container lines across full screen width */}
      <div
        className="relative z-20 w-screen max-w-none overflow-hidden flex flex-col gap-4 select-none pb-16 md:pb-24 lg:pb-32"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        {/* 1. Top Orange Text Marquee (Right to Left) */}
        <TextMarqueeRow items={marqueeTextRow1} direction="left" />

        {/* 2. Upper Image Marquee (Right to Left) */}
        <ImageMarqueeRow images={marqueeImagesRow1} direction="left" />

        {/* 3. Lower Image Marquee (Left to Right) */}
        <ImageMarqueeRow images={marqueeImagesRow2} direction="right" />

        {/* 4. Bottom Orange Text Marquee (Left to Right) */}
        <TextMarqueeRow items={marqueeTextRow2} direction="right" />
      </div>
    </div>
  );
}

export default WorkMarqueeSection;
