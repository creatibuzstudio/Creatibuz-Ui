"use client";

import React, { useState } from "react";
import { GridSpark } from "@/components/ui/section-container";
import { servicesData } from "@/data/services.data";
import { ServicePreviewCard } from "./services/service-preview-card";
import { motion } from "framer-motion";

export function ServicesShowcaseSection() {
  const [activeService, setActiveService] = useState<number>(0);
  const current = servicesData[activeService];

  return (
    <div id="services" className="relative w-full">
      {/* Middle Vertical Divider Line */}
      <div className="hidden lg:block absolute left-[35%] -top-36 -bottom-36 w-px bg-white/[0.12] pointer-events-none z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
        </div>
      </div>

      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-0 items-start">
        {/* Left Column on Desktop / Bottom Preview on Mobile */}
        <div className="order-2 lg:order-1 relative lg:col-span-4 lg:pr-5">
          <ServicePreviewCard current={current} />
        </div>

        {/* Right Column on Desktop / Top List on Mobile */}
        <div className="order-1 lg:order-2 lg:col-span-8 lg:pl-10 xl:pl-14 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8"
          >
            <span className="text-primary text-lg md:text-xl lg:text-2xl tracking-wide font-sans inline-block">
              [ Our Services ]
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-full"
          >
            {servicesData.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className="group cursor-pointer py-2 md:py-4 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5">
                    <span
                      className={`text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 shrink-0 ${
                        isActive
                          ? "text-primary"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      [{service.index}]
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold tracking-tight font-sans transition-colors duration-200 ${
                        isActive
                          ? "text-primary"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      {service.displayTitle}
                    </h3>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesShowcaseSection;
