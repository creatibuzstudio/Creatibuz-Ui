"use client";

import React from "react";
import Image from "next/image";

interface AvatarStackProps {
  className?: string;
  size?: "xs" | "sm" | "md";
}

const sizeConfig = {
  xs: {
    container: "-space-x-1.5",
    avatar: "w-5 h-5",
    symbol: "w-5 h-5",
    icon: "w-3 h-3",
  },
  sm: {
    container: "-space-x-2",
    avatar: "w-6 h-6",
    symbol: "w-6 h-6",
    icon: "w-3.5 h-3.5",
  },
  md: {
    container: "-space-x-2.5",
    avatar: "w-8 h-8 sm:w-9 sm:h-9",
    symbol: "w-8 h-8 sm:w-9 sm:h-9",
    icon: "w-6 h-6 sm:w-7 sm:h-7",
  },
};

export function StackAvatar({ className = "", size = "md" }: AvatarStackProps) {
  const avatars = [
    { src: "/Team/abuTaher.png", alt: "Abu Taher" },
    { src: "/Team/jahidHasan.png", alt: "Jahid Hasan" },
    { src: "/Team/rifat.png", alt: "Rifat" },
  ];

  const config = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`flex items-center ${config.container} select-none ${className}`}>
      {avatars.map((av, i) => (
        <div
          key={av.src}
          className={`relative ${config.avatar} rounded-full overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)] bg-[#1F1F1F] border border-black/40`}
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
        className={`relative ${config.symbol} rounded-full bg-primary flex items-center justify-center shadow-[0_4px_12px_rgba(254,90,0,0.5)] shrink-0`}
        style={{ zIndex: avatars.length + 10 }}
      >
        <Image
          src="/creatibuz-symbol.png"
          alt="Creatibuz Symbol"
          width={18}
          height={18}
          className={`${config.icon} object-contain shadow-[0_0_50px_rgba(248,88,0,1)]`}
        />
      </div>
    </div>
  );
}

export default StackAvatar;
