"use client";

import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/data/faq.data";

interface FaqAccordionItemProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div className="w-full bg-[#181A1E] border border-white/10 rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-[17px] md:text-[20px] font-semibold text-primary-text pr-8">
          {faq.question}
        </span>
        <span className="text-primary shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 stroke-[2.5]" />
          ) : (
            <Plus className="w-5 h-5 stroke-[2.5]" />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-0 text-[15px] text-primary-text leading-relaxed max-w-3xl">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
