"use client";

import React, { useEffect, useRef, useState } from "react";
import { type StatsData, DEFAULT_ABOUT_STATS } from "@/services/stats.service";

interface AboutStatsProps {
  statsRef: React.RefObject<HTMLDivElement | null>;
  initialStats?: StatsData | null;
}

export function AboutStats({ statsRef, initialStats }: AboutStatsProps) {
  const [targetStats] = useState<StatsData>(() => initialStats || DEFAULT_ABOUT_STATS);
  const [counts, setCounts] = useState(() => ({
    deliveries: initialStats?.projectDeliveries || DEFAULT_ABOUT_STATS.projectDeliveries,
    experts: initialStats?.inHouseExperts || DEFAULT_ABOUT_STATS.inHouseExperts,
    clients: initialStats?.satisfiedClients || DEFAULT_ABOUT_STATS.satisfiedClients,
    partners: initialStats?.businessPartners || DEFAULT_ABOUT_STATS.businessPartners,
  }));
  const hasAnimatedRef = useRef(false);

  // 2. Count-up animation when scrolled into view
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    const node = statsRef.current;
    if (!node || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          const duration = 1600;
          const steps = 40;
          const intervalTime = duration / steps;
          let step = 0;

          const targetDeliveries = targetStats.projectDeliveries;
          const targetExperts = targetStats.inHouseExperts;
          const targetClients = targetStats.satisfiedClients;
          const targetPartners = targetStats.businessPartners;

          timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              deliveries: Math.floor(targetDeliveries * ease),
              experts: Math.floor(targetExperts * ease),
              clients: Math.floor(targetClients * ease),
              partners: Math.floor(targetPartners * ease),
            });

            if (step >= steps) {
              if (timer) clearInterval(timer);
              setCounts({
                deliveries: targetDeliveries,
                experts: targetExperts,
                clients: targetClients,
                partners: targetPartners,
              });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, [statsRef, targetStats]);

  const statItems = [
    { value: `${counts.deliveries}+`, label: "Project Deliveries" },
    { value: `${counts.experts}+`, label: "In-House Experts" },
    { value: `${counts.clients}%`, label: "Satisfied Clients" },
    { value: `${counts.partners}+`, label: "Business Partner" },
  ];

  return (
    <div
      ref={statsRef}
      className="grid grid-cols-2 md:grid-cols-4 items-center justify-between w-full pt-16 md:pt-20 lg:pt-24"
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
