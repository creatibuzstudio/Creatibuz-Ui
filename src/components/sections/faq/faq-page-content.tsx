"use client";

import React, { useState, useMemo } from "react";
import { DEFAULT_FAQS } from "@/data/faq.data";
import { SectionContainer } from "@/components/ui/section-container";
import { FaqHeader } from "./faq-header";
import { FaqSidebar } from "./faq-sidebar";
import { FaqAccordionList } from "./faq-accordion-list";

export function FaqPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({
    0: true, // first item open by default
  });

  // Extract distinct categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    DEFAULT_FAQS.forEach((item) => {
      if (item.category) set.add(item.category);
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filter items based on search and category
  const filteredFaqs = useMemo(() => {
    return DEFAULT_FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const matchQ = faq.question.toLowerCase().includes(query);
      const matchA = faq.answer.toLowerCase().includes(query);
      const matchC = faq.category?.toLowerCase().includes(query);

      return matchQ || matchA || matchC;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleExpandAll = () => {
    const next: Record<number, boolean> = {};
    filteredFaqs.forEach((_, idx) => {
      next[idx] = true;
    });
    setOpenIndexes(next);
  };

  const handleCollapseAll = () => {
    setOpenIndexes({});
  };

  const areAllExpanded =
    filteredFaqs.length > 0 &&
    filteredFaqs.every((_, idx) => !!openIndexes[idx]);

  return (
    <div className="relative w-full">
      {/* 1. Dedicated FAQ Header (contains team-bg background image, Heading, Search Bar & Category Pills) */}
      <FaqHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 2. Main FAQ Section inside SectionContainer:
          Starts below the background image/header, side lines visible from here downwards */}
      <SectionContainer
        showTopBorder={false}
        showBottomBorder={false}
        crossMarkers={false}
        noPadding={true}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 pb-20 md:pb-32 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Sticky Aside */}
            <FaqSidebar />

            {/* Right Column: FAQ Accordion List */}
            <FaqAccordionList
              faqs={filteredFaqs}
              totalCount={DEFAULT_FAQS.length}
              selectedCategory={selectedCategory}
              openIndexes={openIndexes}
              onToggleFaq={toggleFaq}
              onExpandAll={handleExpandAll}
              onCollapseAll={handleCollapseAll}
              areAllExpanded={areAllExpanded}
              searchQuery={searchQuery}
              onResetSearch={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default FaqPageContent;
