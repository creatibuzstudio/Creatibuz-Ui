import React from "react";
import Image from "next/image";
import type { ProcessStep } from "@/data/process.data";

interface ProcessCardProps {
  item: ProcessStep;
  index: number;
}

export function ProcessCard({ item, index }: ProcessCardProps) {
  return (
    <div
      style={{ zIndex: index + 1 }}
      className="process-card group relative flex w-70 shrink-0 flex-col items-start overflow-hidden rounded-2xl bg-white px-4 py-6 text-left shadow-[-16px_0_35px_rgba(0,0,0,0.12),0_20px_45px_rgba(0,0,0,0.22)] transition-all duration-300 will-change-transform hover:shadow-[-20px_0_40px_rgba(0,0,0,0.16),0_30px_60px_rgba(0,0,0,0.3)] md:px-6 md:py-8 after:absolute after:-bottom-16 after:-left-16 after:-z-10 after:h-50 after:w-50 after:rounded-full after:bg-primary after:opacity-0 after:blur-3xl after:transition-all after:duration-500 hover:after:opacity-50 hover:after:scale-110"
    >
      <div className="relative z-10 w-full flex flex-col items-start">
        {/* Icon Box */}
        <div className="mb-10">
          <div className="flex h-12 w-12 items-center justify-center bg-transparent">
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
        <span className="mb-3 inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 font-sans text-xs font-semibold text-zinc-600">
          {item.step}
        </span>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-zinc-950 lg:text-3xl">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-800 sm:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default ProcessCard;
