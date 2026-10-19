"use client";

import { motion } from "framer-motion";
import { DEFAULT_SPECIALISTS } from "@/data/specialists.data";
import { SpecialistCard } from "./team/specialist-card";

export function TeamSpecialistsSection() {
  // Directly load from DEFAULT_SPECIALISTS (API call disabled as requested)
  const specialists = DEFAULT_SPECIALISTS;

  return (
    <div className="w-full lg:px-16 overflow-x-clip">
      {/* Section Header */}
      <motion.div
        id="specialist"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-primary text-sm md:text-[20px] text-center font-sans">
          [ Our Expertize ]
        </span>
        <h2 className="font-bold text-header-text text-3xl md:text-4xl lg:text-[40px] text-center tracking-tight">
          Meet Our Specialists
        </h2>
      </motion.div>

      {/* Specialist Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {specialists.map((specialist, idx) => (
          <SpecialistCard
            key={specialist.id}
            specialist={specialist}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
