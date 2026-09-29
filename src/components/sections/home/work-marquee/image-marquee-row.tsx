import React from "react";
import Image from "next/image";
import type { ShowcaseItem } from "@/data/projects.data";

interface ImageMarqueeRowProps {
  images: ShowcaseItem[];
  direction?: "left" | "right";
}

export function ImageMarqueeRow({
  images,
  direction = "left",
}: ImageMarqueeRowProps) {
  const repeated = [...images, ...images];
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="w-full overflow-hidden py-1">
      <div
        className={`${animationClass} marquee-track flex items-center gap-4 will-change-transform`}
      >
        {repeated.map((img, idx) => (
          <div
            key={idx}
            style={{ aspectRatio: `${img.width} / ${img.height}` }}
            className="relative h-[210px] sm:h-[250px] md:h-[285px] lg:h-[315px] shrink-0 overflow-hidden bg-[#161616] border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.5)] group transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              unoptimized
              className="object-contain object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageMarqueeRow;
