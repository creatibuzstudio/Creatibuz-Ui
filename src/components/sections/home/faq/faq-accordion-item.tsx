"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/data/faq.data";

export interface FaqAccordionItemProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  indexNumber?: number;
  showCategory?: boolean;
}

export function FaqAccordionItem({
  faq,
  isOpen,
  onToggle,
  indexNumber,
  showCategory = false,
}: FaqAccordionItemProps) {
  return (
    <div
      className={`w-full rounded-xl overflow-hidden transition-all duration-300 border ${
        isOpen
          ? "bg-[#1B1E24] border-primary/40 shadow-[0_4px_24px_rgba(254,90,0,0.08)]"
          : "bg-[#181A1E] border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 pr-4">
          {indexNumber !== undefined && (
            <span
              className={`shrink-0 text-xs sm:text-sm font-mono font-semibold px-2 sm:px-2.5 py-1 rounded-md transition-colors ${
                isOpen
                  ? "text-primary bg-primary/10"
                  : "bg-white/5 text-primary-text group-hover:text-primary group-hover:bg-primary/10"
              }`}
            >
              {String(indexNumber).padStart(2, "0")}
            </span>
          )}
          <span
            className={`text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-tight transition-colors ${
              isOpen
                ? "text-white"
                : "text-primary-text group-hover:text-white"
            }`}
          >
            {faq.question}
          </span>
        </div>
        <div
          className={`shrink-0 ml-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-primary text-white shadow-[0_0_15px_rgba(254,90,0,0.5)] rotate-180"
              : "bg-white/5 text-primary group-hover:bg-primary/15"
          }`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <Plus className="w-4 h-4 stroke-[2.5]" />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-0">
            {showCategory && faq.category && (
              <span className="inline-block mb-2 text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                {faq.category}
              </span>
            )}
            <p className="text-[14px] sm:text-[15px] text-zinc-300 leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
