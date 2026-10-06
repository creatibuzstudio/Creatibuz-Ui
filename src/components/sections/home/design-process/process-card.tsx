import React from "react";
import Image from "next/image";
import type { ProcessStep } from "@/data/process.data";

interface ProcessCardProps {
  item: ProcessStep;
  index: number;
}

export function ProcessCard({ item, index }: ProcessCardProps) {
  const isFirst = index === 0;

  return (
    <div
      style={{ zIndex: index + 1 }}
      className={`process-card group ${
        isFirst
          ? "relative mx-auto md:mx-0"
          : "absolute top-0 left-0 right-0 mx-auto md:relative md:top-auto md:left-auto md:right-auto md:mx-0"
      } flex w-80 max-w-[calc(100vw-2.5rem)] shrink-0 flex-col items-start overflow-hidden rounded-2xl bg-white px-6 py-6 sm:py-8 text-left transition-all duration-300 will-change-transform shadow-[0_-8px_20px_-4px_rgba(0,0,0,0.12),0_12px_24px_-6px_rgba(0,0,0,0.08)] md:shadow-[-16px_0_35px_-10px_rgba(0,0,0,0.12),-20px_0_45px_-15px_rgba(0,0,0,0.22)] hover:shadow-[-20px_0_40px_rgba(0,0,0,0.16),0_30px_60px_rgba(0,0,0,0.3)] md:px-8 md:py-12 after:absolute after:-bottom-16 after:-left-16 after:-z-10 after:h-50 after:w-50 after:rounded-full after:bg-primary after:opacity-0 after:blur-3xl after:transition-all after:duration-500 hover:after:opacity-50 hover:after:scale-110`}
    >
      <div className="relative z-10 w-full flex flex-col items-start">
        {/* Icon Box */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center bg-transparent">
            <Image
              src={item.icon}
              alt={`${item.title} icon`}
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
        </div>

        {/* Step Badge Pill */}
        <span className="mb-2.5 sm:mb-3 font-display inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 text-[13px] sm:text-[14px] text-zinc-600">
          {item.step}
        </span>

        {/* Title */}
        <h3 className="mb-3 sm:mb-4 font-display text-xl sm:text-2xl font-medium tracking-tight text-zinc-950 lg:text-3xl">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm font-display text-zinc-900/80 sm:text-[20px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default ProcessCard;
