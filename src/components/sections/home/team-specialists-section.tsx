"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DEFAULT_SPECIALISTS, SpecialistItem } from "@/data/specialists.data";
import { userService } from "@/services/user.service";
import { SpecialistCard } from "./team/specialist-card";

export function TeamSpecialistsSection() {
  const [specialists, setSpecialists] =
    useState<SpecialistItem[]>(DEFAULT_SPECIALISTS);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const userList = await userService.getAllUsers();
        if (userList.length > 0) {
          setSpecialists((prev) =>
            prev.map((fallback, idx) => {
              const apiUser = userList[idx];
              if (!apiUser) return fallback;
              return {
                ...fallback,
                name: apiUser.name || fallback.name,
                role:
                  apiUser.designation?.title ||
                  apiUser.role ||
                  fallback.role,
                image: apiUser.picture || fallback.image,
              };
            })
          );
        }
      } catch {
        // Silently preserve DEFAULT_SPECIALISTS fallback
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="w-full">
      {/* Section Header */}
      <motion.div
        id="specialist"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-primary text-sm md:text-[20px] text-center">
          [ Our Expertize ]
        </span>
        <h2 className="font-bold text-header-text text-3xl md:text-4xl lg:text-[40px] text-center tracking-tight">
          Meet Our Specialist
        </h2>
      </motion.div>

      {/* Specialist Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full">
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
