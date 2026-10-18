"use client";

import React from "react";
import Image from "next/image";

interface AvatarStackProps {
  className?: string;
}

export function AvatarStack({ className = "" }: AvatarStackProps) {
  const avatars = [
    { src: "/Team/abuTaher.png", alt: "Abu Taher" },
    { src: "/Team/jahidHasan.png", alt: "Jahid Hasan" },
    { src: "/Team/rifat.png", alt: "Rifat" },
  ];

  return (
    <div className={`flex items-center -space-x-2.5 select-none ${className}`}>
      {avatars.map((av, i) => (
        <div
          key={av.src}
          className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.4)] bg-[#1F1F1F]"
          style={{ zIndex: avatars.length + i }}
        >
          <Image
            src={av.src}
            alt={av.alt}
            fill
            sizes="36px"
            className="object-cover object-top"
          />
        </div>
      ))}

      {/* Creatibuz Brand Symbol Badge Circle */}
      <div
        className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground flex items-center justify-center ring-2 ring-white/90 shadow-[0_4px_12px_rgba(254,90,0,0.5)] shrink-0"
        style={{ zIndex: avatars.length + 10 }}
      >
        <Image
          src="/watermark.png"
          alt="Creatibuz Symbol"
          width={18}
          height={18}
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
      </div>
    </div>
  );
}

export default AvatarStack;
