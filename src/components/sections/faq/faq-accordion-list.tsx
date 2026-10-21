"use client";

import React from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { FaqItem } from "@/data/faq.data";
import { FaqAccordionItem } from "@/components/sections/home/faq/faq-accordion-item";

interface FaqAccordionListProps {
  faqs: FaqItem[];
  totalCount: number;
  selectedCategory?: string;
  openIndexes: Record<number, boolean>;
  onToggleFaq: (index: number) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  areAllExpanded: boolean;
  searchQuery?: string;
  onResetSearch?: () => void;
}

export function FaqAccordionList({
  faqs,
  totalCount,
  selectedCategory = "All",
  openIndexes,
  onToggleFaq,
  onExpandAll,
  onCollapseAll,
  areAllExpanded,
  searchQuery = "",
  onResetSearch,
}: FaqAccordionListProps) {
  return (
    <div className="lg:col-span-8 flex flex-col">
      {/* Header Bar with Count & Expand/Collapse All */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10 text-sm">
        <div className="text-primary-text font-medium">
          Showing{" "}
          <span className="text-white font-semibold">
            {faqs.length}
          </span>{" "}
          of {totalCount} Questions
          {selectedCategory !== "All" && (
            <span className="ml-1 text-primary">
              in &quot;{selectedCategory}&quot;
            </span>
          )}
        </div>

        {faqs.length > 0 && (
          <button
            onClick={areAllExpanded ? onCollapseAll : onExpandAll}
            className="inline-flex items-center gap-1.5 text-primary hover:text-white transition-colors cursor-pointer text-xs sm:text-sm font-medium"
          >
            {areAllExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>Expand All</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Items List */}
      {faqs.length > 0 ? (
        <div className="flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = !!openIndexes[index];
            return (
              <FaqAccordionItem
                key={faq.question}
                faq={faq}
                isOpen={isOpen}
                onToggle={() => onToggleFaq(index)}
                indexNumber={index + 1}
                showCategory={true}
              />
            );
          })}
        </div>
      ) : (
        /* Empty Search Results State */
        <div className="w-full py-16 px-6 text-center bg-[#181A1E] border border-white/10 rounded-2xl">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary mx-auto mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            No matching questions found
          </h3>
          <p className="text-primary-text text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any questions matching &quot;{searchQuery}&quot;.
            Try searching with another keyword or reset the filter.
          </p>
          {onResetSearch && (
            <button
              onClick={onResetSearch}
              className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-[#ff6914] transition-colors"
            >
              Reset Search & Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default FaqAccordionList;
