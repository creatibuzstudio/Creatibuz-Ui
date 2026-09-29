"use client";

import React from "react";
import Image from "next/image";
import { mockupsMeta } from "@/data/projects.data";

interface HeroMarqueeProps {
  row1: string[];
  row2: string[];
}

export function HeroMarquee({ row1, row2 }: HeroMarqueeProps) {
  // Triplicate arrays to ensure an unbroken infinite marquee
  const row1List = [...row1, ...row1, ...row1];
  const row2List = [...row2, ...row2, ...row2];

  return (
    <section className="relative z-10 w-full pt-8 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex flex-col gap-4 sm:gap-5 w-full">
          {/* Row 1: Right to Left */}
          <div className="overflow-hidden w-full flex group">
            <div className="flex items-center gap-4 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
              {row1List.map((src, index) => {
                const meta = mockupsMeta[src] || { width: 1380, height: 1035 };
                return (
                  <div
                    key={`hero-row1-${index}`}
                    style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
                    className="relative z-10 shrink-0 h-[200px] sm:h-[260px] md:h-[295px] lg:h-[330px] rounded-lg overflow-hidden border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-[#101012] transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                  >
                    <Image
                      src={src}
                      alt={`Portfolio showcase ${index + 1}`}
                      fill
                      unoptimized
                      className="object-contain transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="overflow-hidden w-full flex group">
            <div className="flex items-center gap-4 sm:gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused] will-change-transform">
              {row2List.map((src, index) => {
                const meta = mockupsMeta[src] || { width: 1380, height: 1035 };
                return (
                  <div
                    key={`hero-row2-${index}`}
                    style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
                    className="relative z-10 shrink-0 h-[200px] sm:h-[260px] md:h-[295px] lg:h-[330px] rounded-lg overflow-hidden border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-[#101012] transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                  >
                    <Image
                      src={src}
                      alt={`Portfolio showcase ${index + 6}`}
                      fill
                      unoptimized
                      className="object-contain transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroMarquee;
