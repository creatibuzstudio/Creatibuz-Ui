"use client";

import React, { useEffect, useRef, useState } from "react";
import { statsService, type StatsData } from "@/services/stats.service";

interface AboutStatsProps {
  statsRef: React.RefObject<HTMLDivElement | null>;
}

const defaultStats: StatsData = {
  projectDeliveries: 400,
  inHouseExperts: 15,
  satisfiedClients: 90,
  businessPartners: 40,
};

export function AboutStats({ statsRef }: AboutStatsProps) {
  const [targetStats, setTargetStats] = useState<StatsData>(defaultStats);
  const [counts, setCounts] = useState({
    deliveries: 0,
    experts: 0,
    clients: 0,
    partners: 0,
  });
  const hasAnimated = useRef(false);
  const latestTargetStats = useRef(targetStats);

  useEffect(() => {
    statsService
      .getStats()
      .then((data) => {
        if (data) {
          latestTargetStats.current = data;
          setTargetStats(data);
        }
      })
      .catch(() => {
        // Silently preserve defaultStats
      });
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const node = statsRef.current;
    if (!node || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        observer.disconnect();

        const duration = 1800;
        const steps = 50;
        const intervalTime = duration / steps;
        let step = 0;

        timer = setInterval(() => {
          step++;
          const progress = step / steps;
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentStats = latestTargetStats.current;

          setCounts({
            deliveries: Math.floor(ease * currentStats.projectDeliveries),
            experts: Math.floor(ease * currentStats.inHouseExperts),
            clients: Math.floor(ease * currentStats.satisfiedClients),
            partners: Math.floor(ease * currentStats.businessPartners),
          });

          if (step >= steps) {
            if (timer) clearInterval(timer);
            const finalStats = latestTargetStats.current;
            setCounts({
              deliveries: finalStats.projectDeliveries,
              experts: finalStats.inHouseExperts,
              clients: finalStats.satisfiedClients,
              partners: finalStats.businessPartners,
            });
          }
        }, intervalTime);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, [statsRef]);

  const statItems = [
    { value: `${counts.deliveries}+`, label: "Project Deliveries" },
    { value: `${counts.experts}+`, label: "In-House Experts" },
    { value: `${counts.clients}%`, label: "Satisfied Clients" },
    { value: `${counts.partners}+`, label: "Business Partner" },
  ];

  return (
    <div
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center justify-between w-full pt-16 md:pt-20 lg:pt-24"
    >
      {statItems.map((item) => (
        <div
          key={item.label}
          className="about-stat flex flex-col items-center text-center relative py-2 px-4"
        >
          <span className="text-5xl md:text-[80px] font-light font-helvetica text-primary-text leading-[100px]">
            {item.value}
          </span>
          <span className="text-primary-text font-helvetica text-[20px] font-normal leading-[38px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default AboutStats;
