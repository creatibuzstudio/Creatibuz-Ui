"use client";

import React, { useEffect, useRef, useState } from "react";
import { statsService, type StatsData } from "@/services/stats.service";

interface AboutStatsProps {
  statsRef: React.RefObject<HTMLDivElement | null>;
  initialStats?: StatsData | null;
}

const defaultStats: StatsData = {
  projectDeliveries: 400,
  inHouseExperts: 15,
  satisfiedClients: 99,
  businessPartners: 40,
};

export function AboutStats({ statsRef, initialStats }: AboutStatsProps) {
  const [targetStats, setTargetStats] = useState<StatsData>(() => initialStats || defaultStats);
  const [counts, setCounts] = useState(() => ({
    deliveries: initialStats?.projectDeliveries || defaultStats.projectDeliveries,
    experts: initialStats?.inHouseExperts || defaultStats.inHouseExperts,
    clients: initialStats?.satisfiedClients || defaultStats.satisfiedClients,
    partners: initialStats?.businessPartners || defaultStats.businessPartners,
  }));
  const hasAnimatedRef = useRef(false);

  // 1. Fetch live dynamic stats from backend API
  useEffect(() => {
    let isMounted = true;
    statsService
      .getStats()
      .then((data) => {
        if (!isMounted || !data) return;
        const fresh: StatsData = {
          projectDeliveries: Number(data.projectDeliveries) || 400,
          inHouseExperts: Number(data.inHouseExperts) || 15,
          satisfiedClients: Number(data.satisfiedClients) || 99,
          businessPartners: Number(data.businessPartners) || 40,
        };
        setTargetStats(fresh);
        if (hasAnimatedRef.current) {
          setCounts({
            deliveries: fresh.projectDeliveries,
            experts: fresh.inHouseExperts,
            clients: fresh.satisfiedClients,
            partners: fresh.businessPartners,
          });
        }
      })
      .catch(() => {
        // Preserve current values gracefully
      });
    return () => {
      isMounted = false;
    };
  }, []);

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
