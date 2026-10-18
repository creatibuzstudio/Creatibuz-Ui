"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { partnerService, type Partner } from "@/services/partner.service";
import { collaboratorLogos, clientProofAvatars } from "@/data/projects.data";
import { StackAvatar } from "@/components/ui/stack-avatar";

export function PartnerLogosSection() {
  const [dynamicPartners, setDynamicPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const partners = await partnerService.getAllPartners();
        if (partners && partners.length > 0) {
          setDynamicPartners(partners);
        }
      } catch {
        // Silently preserve static partner logos
      }
    };
    fetchPartners();
  }, []);

  return (
    <div id="collaborators" className="lg:px-16">
      {/* Top Flex Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4">
        {/* Left Side: Collaborated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-primary-text font-medium text-lg md:text-xl lg:text-2xl leading-[1.35] tracking-tight font-sans">
            Collaborated With 100+ Founders Worldwide
            <br />
            <span className="text-primary-text font-sans">
              &amp; Completed 700+ Global Project.
            </span>
          </h2>
        </motion.div>

        {/* Right Side: Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 self-start md:self-auto"
        >
          {/* Overlapping circular avatar cluster */}
          <StackAvatar/>

          {/* Social Proof Text & 5 Stars */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-[11px] sm:text-xs text-[#D9D9D9] font-medium tracking-tight">
              90% Client Satisfactions
            </span>
            <div className="flex items-center gap-2 mt-0.5 text-[#F85800]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FEB821] text-[#FEB821]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner / Client Logo Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 sm:mt-10 md:mt-12"
      >
        {dynamicPartners.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-6 sm:gap-y-8 items-center justify-between">
            {dynamicPartners.slice(0, 12).map((partner) => (
              <div
                key={partner.id}
                className="w-full flex items-center justify-center h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={40}
                  unoptimized
                  className="max-h-7 sm:max-h-8 max-w-[120px] object-contain filter grayscale brightness-125"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-8 items-center w-full">
            {collaboratorLogos.map((logo, index) => (
              <div
                key={logo.name}
                className={`w-full flex items-center justify-center h-10 sm:h-12 ${
                  index % 6 === 0
                    ? "md:justify-start"
                    : index % 6 === 5
                    ? "md:justify-end"
                    : "md:justify-center"
                } opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain filter brightness-125 hover:brightness-200 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default PartnerLogosSection;
