"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process.data";
import { ProcessCard } from "./design-process/process-card";

gsap.registerPlugin(ScrollTrigger);

export function DesignProcessSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop: Horizontal scrub animation (unchanged)
    mm.add("(min-width: 768px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      if (cards.length === 0) return;

      const cardWidth = cards[0].offsetWidth;
      const gap = 25;
      const visibleWidth = Math.max(130, Math.round(cardWidth * 0.46));
      const stepDistance = cardWidth + gap - visibleWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 2.5,
          start: "top top",
          end: () => `+=${(cards.length - 1) * 700}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        const targetX = -i * stepDistance;
        tl.to(
          cards[i],
          {
            x: targetX,
            ease: "power2.inOut",
            duration: 1,
          },
          (i - 1) * 0.4
        );
      }
    });

    // Mobile: Vertical animation on scroll
    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      if (cards.length === 0) return;

      const visibleHeight = 18;
      const enterDistance = Math.min(window.innerHeight * 0.65, 420);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          start: "top top",
          end: () => `+=${(cards.length - 1) * 450}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        const targetY = i * visibleHeight;
        tl.fromTo(
          cards[i],
          {
            y: enterDistance,
            opacity: 0.15,
          },
          {
            y: targetY,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          (i - 1) * 0.55
        );
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 w-full overflow-hidden bg-background flex justify-center"
    >
      {/* Background Image Asset */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/designProcess/designProcess-bg.png"
          alt="Design Process Background"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col px-4 sm:px-6 md:px-8 pt-8 pb-14 sm:py-16 md:py-24 lg:py-32">
        {/* Header Area */}
        <span className="text-[#F85800] text-base md:text-xl mb-3 md:mb-8 font-sans">
          [ Design Process ]
        </span>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8 mb-6 md:mb-16 w-full">
          <div className="flex flex-col items-start lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.15] font-sans max-w-lg">
              A Faster Way To Design <br className="hidden sm:block" />
              And Build{" "}
              <span className="font-serif italic font-normal text-foreground">
                SaaS Products.
              </span>
            </h2>
          </div>

          <div className="lg:w-[45%] flex items-center">
            <p className="text-foreground text-sm md:text-base leading-relaxed font-display max-w-md lg:ml-auto">
              We simplify the product creation process for SaaS companies by
              combining strategy, design, &amp; development into one efficient
              workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal / Vertical Pinned Track */}
        <div className="w-full py-2 md:py-4 flex justify-center">
          <div
            ref={trackRef}
            className="relative flex flex-col md:flex-row md:flex-nowrap items-center md:items-start md:space-x-4 w-full md:w-max md:min-w-full min-h-[340px] md:min-h-0"
          >
            {processSteps.map((item, index) => (
              <ProcessCard key={item.step} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignProcessSection;
