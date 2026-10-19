"use client";

import React from "react";
import Image from "next/image";

interface AvatarStackProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: "h-8 sm:h-9",
  md: "h-16 sm:h-18 md:h-20",
  lg: "h-24 sm:h-24 md:h-36",
};

export function StackAvatar({ className = "", size = "md" }: AvatarStackProps) {
  const sizeClass = sizeConfig[size] || sizeConfig.md;

  return (
    <div
      className={`inline-flex items-center select-none shrink-0 ${sizeClass} aspect-[543/434] ${className}`}
    >
      <div className="relative h-full w-full">
        <Image
          src="/stackAvatar.png"
          alt="Team Avatar Stack"
          fill
          sizes="(max-width: 768px) 140px, 180px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default StackAvatar;
