"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  X,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { DEFAULT_FAQS } from "@/data/faq.data";
import { FaqAccordionItem } from "@/components/sections/home/faq/faq-accordion-item";
import { SectionContainer } from "@/components/ui/section-container";
import { PrimaryButton } from "@/components/ui/primary-button";

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
      {/* 1. Hero Section with Ambient Glow Backdrop */}
      <section className="relative w-full pt-36 sm:pt-40 md:pt-44 pb-16 sm:pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 inset-x-0 w-full h-[600px] pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-[#0C0E12]/40 via-[#0C0E12]/80 to-[#0C0E12]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-primary text-xs sm:text-sm font-medium mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Help & Knowledge Center</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-header-text tracking-tight leading-[1.12] mb-6 font-sans"
          >
            Frequently Asked{" "}
            <span className="font-serif italic font-medium text-primary">
              Questions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-text text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            Everything you need to know about working with Creatibuz Studio, our
            design process, deliverables, tools, timelines, and pricing.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto relative mb-8"
          >
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-gray-400 absolute left-4.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any question, keyword (e.g. tools, pricing, timeline, MVP)..."
                className="w-full bg-[#181A1E] text-white placeholder-gray-400 pl-12 pr-11 py-3.5 sm:py-4 rounded-full border border-white/10 focus:border-primary/60 focus:outline-none text-[15px] sm:text-base shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-[0_0_20px_rgba(254,90,0,0.4)]"
                      : "bg-[#181A1E] text-primary-text hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 2. Main FAQ Accordion List & Sidebar */}
      <SectionContainer
        extendTopBorder={false}
        showTopBorder={true}
        className="pt-12 sm:pt-16 pb-20 sm:pb-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Quick Stats & Direct Contact Card */}
            <div className="lg:col-span-4 flex flex-col space-y-6 lg:sticky lg:top-28">
              {/* Contact Card */}
              <div
                className="w-full rounded-2xl p-6 sm:p-7 relative overflow-hidden bg-[#181A1E] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                style={{
                  background:
                    "linear-gradient(var(--card, #181A1E), var(--card, #181A1E)) padding-box, linear-gradient(135deg, rgba(254, 90, 0, 0.4) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(254, 90, 0, 0.2) 100%) border-box",
                  border: "1.5px solid transparent",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4">
                  <HelpCircle className="w-5 h-5" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  Have a Question?
                </h3>
                <p className="text-primary-text text-sm leading-relaxed mb-6 font-normal">
                  Can&apos;t find what you&apos;re looking for? Reach out directly to
                  our creative team. We typically respond within 2 hours.
                </p>

                {/* Direct Action Links */}
                <div className="flex flex-col space-y-3">
                  <PrimaryButton
                    text="Schedule Free 30-Min Call"
                    href="https://calendly.com/creatibuzstudio/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    glow="sm"
                    fullWidth={true}
                    className="py-2.5 px-4 text-sm font-medium"
                  />

                  <Link
                    href="https://wa.me/+8801968657353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 group"
                  >
                    <span className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[#25D366] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Direct WhatsApp Chat
                    </span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
                  </Link>

                  <Link
                    href="mailto:Info@creatibuzstudio.com?subject=Project%20Inquiry%20from%20FAQ"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 group"
                  >
                    <span>Email: Info@creatibuzstudio.com</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-[#181A1E] border border-white/10 rounded-2xl p-6 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      Fast 24-48h Kickoff
                    </h4>
                    <p className="text-xs text-primary-text">
                      We get right to work upon contract finalization.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      Direct Senior Designers
                    </h4>
                    <p className="text-xs text-primary-text">
                      No middle managers. You collaborate with the experts.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold">
                      100% IP Ownership
                    </h4>
                    <p className="text-xs text-primary-text">
                      All Figma files, assets & code are completely yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Accordion List */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Header Bar with Count & Expand/Collapse All */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10 text-sm">
                <div className="text-primary-text font-medium">
                  Showing{" "}
                  <span className="text-white font-semibold">
                    {filteredFaqs.length}
                  </span>{" "}
                  of {DEFAULT_FAQS.length} Questions
                  {selectedCategory !== "All" && (
                    <span className="ml-1 text-primary">
                      in &quot;{selectedCategory}&quot;
                    </span>
                  )}
                </div>

                {filteredFaqs.length > 0 && (
                  <button
                    onClick={areAllExpanded ? handleCollapseAll : handleExpandAll}
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
              {filteredFaqs.length > 0 ? (
                <div className="flex flex-col space-y-4">
                  {filteredFaqs.map((faq, index) => {
                    const isOpen = !!openIndexes[index];
                    return (
                      <FaqAccordionItem
                        key={faq.question}
                        faq={faq}
                        isOpen={isOpen}
                        onToggle={() => toggleFaq(index)}
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
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-[#ff6914] transition-colors"
                  >
                    Reset Search & Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default FaqPageContent;
