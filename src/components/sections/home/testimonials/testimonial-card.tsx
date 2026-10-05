"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Review } from "@/services/review.service";

interface TestimonialCardProps {
  item: Review;
  onPlayVideo?: (url: string) => void;
}

export function TestimonialCard({ item, onPlayVideo }: TestimonialCardProps) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const rating = Math.min(Math.max(item.rating || 5, 1), 5);
  const stats = item.stats && item.stats.length > 0 ? item.stats : [
    { value: "52%", label: "Higher Online Conversion Rate" },
    { value: "37%", label: "Increase In Organic Search Traffic" },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-2xl sm:rounded-3xl bg-[#0D0E12] border border-white/[0.08] p-6 sm:p-9 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 select-none group"
    >
      {/* Interactive Subtle Spotlight Glow on Cursor Hover */}
      {mousePos && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100 z-0"
          style={{
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(254, 90, 0, 0.07), transparent 45%)`,
          }}
        />
      )}

      {/* Top Header Row: Client Info (Left) & Badge + Rating (Right) */}
      <div className="relative z-10 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
        {/* Left: Client Avatar, Name & Role */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-zinc-800 ring-2 ring-white/10 shrink-0">
            {item.thumbUrl ? (
              <Image
                src={item.thumbUrl}
                alt={item.client?.name || "Client"}
                fill
                sizes="56px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-300 font-bold text-lg bg-zinc-800">
                {item.client?.name?.charAt(0) || "C"}
              </div>
            )}

            {/* Video Play Overlay Button */}
            {/* {item.videoUrl && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (item.videoUrl && onPlayVideo) onPlayVideo(item.videoUrl);
                }}
                className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center transition-colors group/play"
                title="Watch video testimonial"
              >
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                </div>
              </button>
            )} */}
          </div>

          <div className="flex flex-col text-left">
            <h4 className="text-primary-text font-medium text-base md:text-xl lg:text-[24px] tracking-tight">
              {item.client?.name || "Anonymous Client"}
            </h4>
            <p className="text-primary-text text-sm md:text-base lg:text-xl font-normal mt-0.5">
              {item.client?.role || "Verified Client"}
            </p>
          </div>
        </div>

        {/* Right: Creatibuz Orange Symbol Badge + Satisfaction & 5 Stars */}
        <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
          {/* Glowing Orange Badge */}
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="absolute -inset-2 bg-primary/45 rounded-full blur-xl pointer-events-none animate-pulse" />
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(254,90,0,0.55)]">
              <Image
                src="/creatibuz-symbol.png"
                alt="Creatibuz"
                width={26}
                height={26}
                className="w-5.5 h-5.5 sm:w-6 sm:h-6 object-contain brightness-200"
              />
            </div>
          </div>

          {/* Client Satisfaction Text & Gold Rating Stars */}
          <div className="flex flex-col text-left">
            <span className="text-[11px] sm:text-xs text-primary-text font-normal tracking-tight">
              {item.satisfactionRate || "90%Client Satisfactions"}
            </span>
            <div className="flex items-center gap-0.5 mt-0.5 text-[#FFA800]">
              {[...Array(rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#FFA800] text-[#FFA800]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Quote */}
      <p className="relative z-10 mt-4 mb-6 md:mt-8 md:mb-10 text-primary-text font-normal text-base sm:text-lg md:text-xl lg:text-[22px] leading-[1.65] tracking-[-0.01em] text-left">
        {item.reviewText}
      </p>

      {/* Bottom Metrics / Stats Row */}
      <div className="relative z-10 flex items-center gap-10 sm:gap-16">
        {stats.map((stat, sIdx) => (
          <div key={sIdx} className="flex flex-col text-left">
            <span className="text-xl md:text-2xl lg:text-3xl font-display text-primary-text tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-primary-text font-normal mt-1 sm:mt-1.5">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

