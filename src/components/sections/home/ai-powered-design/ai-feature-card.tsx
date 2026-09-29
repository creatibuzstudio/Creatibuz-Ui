import React from "react";
import type { AiFeatureCardItem } from "@/data/ai-features.data";

interface AiFeatureCardProps {
  card: AiFeatureCardItem;
  setRef: (el: HTMLDivElement | null) => void;
}

export function AiFeatureCard({ card, setRef }: AiFeatureCardProps) {
  const Icon = card.icon;

  return (
    <div
      ref={setRef}
      className="bg-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 relative flex flex-col justify-center min-h-[160px] sm:min-h-[175px]"
    >
      {/* Badge Icon */}
      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(248,88,0,0.35)]">
        <Icon className="w-5 h-5 stroke-[2]" />
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-lg sm:text-xl font-sans mt-4 mb-2 tracking-tight">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-primary-text text-xs sm:text-sm leading-relaxed font-sans font-normal">
        {card.description}
      </p>
    </div>
  );
}

export default AiFeatureCard;
