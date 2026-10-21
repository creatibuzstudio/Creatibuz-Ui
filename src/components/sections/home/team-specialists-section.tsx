"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DEFAULT_SPECIALISTS, SpecialistItem } from "@/data/specialists.data";
import { SpecialistCard } from "./team/specialist-card";
import { userService, User } from "@/services/user.service";

interface TeamSpecialistsSectionProps {
  initialUsers?: User[];
}

const BG_TINTS = [
  "bg-[#FAE297]",
  "bg-[#BDFDEB]",
  "bg-[#DFF6FF]",
  "bg-[#A0C599]",
  "bg-[#FED0D8]",
  "bg-[#C4D9FF]",
];

function mapUserToSpecialist(user: User, index: number): SpecialistItem {
  return {
    id: user.id,
    name: user.name,
    role:
      user.designation?.title ||
      (user.department?.name ? `${user.department.name} Specialist` : user.role || "Specialist"),
    image:
      user.picture ||
      DEFAULT_SPECIALISTS[index % DEFAULT_SPECIALISTS.length]?.image ||
      "/Team/ibrahim.png",
    bgTint: BG_TINTS[index % BG_TINTS.length],
    socials: [
      { name: "Portfolio", href: "https://creatibuzstudio.com", type: "portfolio" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
    ],
  };
}

function processUsers(users: User[]): SpecialistItem[] {
  if (!Array.isArray(users) || users.length === 0) return [];

  // 1. Role client data ashbe na
  // 2. Jader order 0 tara ashbe na (only users where order > 0)
  const filtered = users.filter((u) => {
    const role = String(u.role || "").toLowerCase().trim();
    const order = Number(u.order || 0);
    return role !== "client" && order > 0;
  });

  // 3. Ja order thakbe order onujai show korbe (ASC order: 1, 2, 3...)
  filtered.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

  return filtered.map((u, idx) => mapUserToSpecialist(u, idx));
}

export function TeamSpecialistsSection({ initialUsers }: TeamSpecialistsSectionProps = {}) {
  const initialProcessed = processUsers(initialUsers || []);
  const [specialists, setSpecialists] = useState<SpecialistItem[]>(() =>
    initialProcessed.length > 0 ? initialProcessed : DEFAULT_SPECIALISTS
  );

  useEffect(() => {
    userService
      .getAllUsers()
      .then((data) => {
        if (Array.isArray(data)) {
          const processed = processUsers(data);
          if (processed.length > 0) {
            setSpecialists(processed);
          }
        }
      })
      .catch(() => {
        // preserve current specialists gracefully
      });
  }, []);

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

export default TeamSpecialistsSection;
