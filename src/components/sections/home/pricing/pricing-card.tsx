"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PlanItem } from "@/data/pricing.data";
import { AnimatedPrice } from "./animated-price";

interface PricingCardProps {
  plan: PlanItem;
  index: number;
  onSelect: (plan: PlanItem) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function PricingCard({ plan, index, onSelect }: PricingCardProps) {
  const isPopular = plan.isPopular;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isPopular
          ? "bg-[#232528] border-2 border-white/30 shadow-2xl z-10"
          : "bg-[#0F0F0F] border border-white/10 shadow-xl z-0"
      }`}
    >
      {isPopular && (
        <div className="bg-primary text-foreground text-xs font-semibold px-4 py-1 rounded-full absolute -top-3.5 left-2/3 -translate-x-1/2 shadow-lg shadow-[#F85800]/30 tracking-wide">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2 font-sans">
          {plan.name}
        </h3>

        <p className="text-primary-text text-sm font-normal min-h-[42px] leading-relaxed font-sans mb-6">
          {plan.subtitle}
        </p>

        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight font-sans">
            <AnimatedPrice value={plan.price} />
          </span>
          <span className="text-primary-text text-sm font-normal font-sans">
            {plan.period}
          </span>
        </div>

        <div className={`${isPopular ? "bg-[#2F2F33]" : "bg-[#181818]"} rounded-2xl p-5 border border-white/5 space-y-3.5 mb-8`}>
          {plan.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  isPopular
                    ? "bg-primary text-foreground shadow-[0_0_8px_rgba(248,88,0,0.4)]"
                    : "bg-zinc-800 text-primary-text"
                }`}
              >
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-sm text-zinc-300 tracking-wide font-display">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onSelect(plan)}
        className={`w-full py-3.5 rounded-full font-medium text-center text-sm transition-all duration-300 cursor-pointer ${
          isPopular
            ? "bg-primary text-foreground font-semibold shadow-[0_0_35px_rgba(248,88,0,0.8)] hover:brightness-110 active:scale-[0.98]"
            : "bg-zinc-800/80 hover:bg-zinc-700/80 text-foreground font-medium border border-white/10 active:scale-[0.98]"
        }`}
      >
        {plan.buttonText}
      </button>
    </motion.div>
  );
}
