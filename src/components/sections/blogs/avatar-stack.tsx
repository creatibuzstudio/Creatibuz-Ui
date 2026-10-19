"use client";

import React from "react";
import Image from "next/image";

interface AvatarStackProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

const sizeConfig = {
  xs: "h-6 sm:h-7",
  sm: "h-8 sm:h-9",
  md: "h-10 sm:h-11 md:h-12",
  lg: "h-12 sm:h-14 md:h-16",
};

export function AvatarStack({ className = "", size = "md" }: AvatarStackProps) {
  const sizeClass = sizeConfig[size] || sizeConfig.md;

  return (
    <div
      className={`relative inline-flex items-center select-none shrink-0 ${sizeClass} aspect-[543/434] ${className}`}
    >
      <Image
        src="/stackAvatar.png"
        alt="Team Avatar Stack"
        fill
        sizes="(max-width: 768px) 140px, 180px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export default AvatarStack;
