"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CATEGORIES_DATA as LOCAL_CATEGORIES, PlanItem } from "@/data/pricing.data";
import { CategoryData } from "@/types/pricing.types";
import { PricingCard } from "./pricing/pricing-card";
import { BookingModal } from "./pricing/booking-modal";

export function PricingPlansSection() {
  const [activeTabId, setActiveTabId] = useState<string>("website-design");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanItem | null>(null);
  const [categories] = useState<CategoryData[]>(LOCAL_CATEGORIES);

  const activeCategory =
    categories.find((c) => c.id === activeTabId) ||
    categories[0] ||
    LOCAL_CATEGORIES[0];

  const rawPlans =
    activeCategory?.plans && activeCategory.plans.length > 0
      ? activeCategory.plans
      : LOCAL_CATEGORIES[0].plans;

  const getPlanPriority = (name: string): number => {
    const lower = (name || "").toLowerCase();
    if (lower.includes("starter")) return 1;
    if (lower.includes("growth")) return 2;
    if (lower.includes("business")) return 3;
    return 4;
  };

  const currentPlans = [...rawPlans].sort((a, b) => {
    const priorityA = getPlanPriority(a.name);
    const priorityB = getPlanPriority(b.name);
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    return (Number(a.price) || 0) - (Number(b.price) || 0);
  });

  const handleSelectPlan = (plan: PlanItem) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden px-5 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32"
    >
      {/* Figma Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/grid-bg.png"
          alt="Pricing Grid Background"
          fill
          className="object-cover object-top -translate-y-3"
        />
      </div>

      {/* Container Borders */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.12] pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.12] pointer-events-none z-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.12] pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.12] pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-primary text-sm md:text-[20px] text-center mb-3 block font-sans">
            [ Pricing Plan ]
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-header-text text-center tracking-tight leading-[1.18] max-w-3xl mx-auto font-sans mb-8">
            Customize your plan to{" "}
            <span className="font-serif italic font-normal text-header-text">
              match your
            </span>
            <br className="hidden sm:inline" />{" "}
            <span className="font-serif italic font-normal text-header-text">
              goals,
            </span>{" "}
            scale, and business needs.
          </h2>
        </motion.div>

        {/* Category Switcher Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-full p-1.5 bg-zinc-900/90 border border-white/10 w-fit mx-auto mb-14 sm:mb-16 flex items-center gap-5 shadow-xl backdrop-blur-md"
        >
          {categories.map((tab: CategoryData) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`transition-all duration-300 rounded-full text-sm font-medium cursor-pointer ${
                  isActive
                    ? "bg-primary text-foreground px-3 py-2 shadow-md shadow-[#F85800]/25"
                    : "text-primary-text hover:text-foreground px-1.5 py-2"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {currentPlans.map((plan, idx) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={idx}
              onSelect={handleSelectPlan}
            />
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedPlan && (
        <BookingModal
          plan={selectedPlan}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
