"use client";

import React from "react";
import { ScrollStack, ScrollStackItem } from "@/components/ui/scroll-stack";
import {
  featuredProjects,
  cardBgColors,
  type FeaturedProject,
} from "@/data/featured-projects.data";
import { FeaturedWorkCard } from "./featured-works/featured-work-card";

interface FeaturedWorksSectionProps {
  projects?: FeaturedProject[];
  className?: string;
}

export function FeaturedWorksSection({
  projects = featuredProjects,
  className = "",
}: FeaturedWorksSectionProps) {
  return (
    <div id="feature-works" className={`relative w-full ${className}`}>
      <ScrollStack
        className="w-full"
        itemDistance={750}
        itemScale={0.05}
        itemStackDistance={22}
        stackPosition="70px"
        useWindowScroll={true}
        bottomOffset={60}
      >
        {projects.map((project, index) => {
          const bgColor = cardBgColors[index % cardBgColors.length];

          return (
            <ScrollStackItem
              key={project.id}
              itemClassName="!h-auto !p-0 !my-0 !rounded-none !shadow-none bg-transparent"
            >
              <FeaturedWorkCard
                project={project}
                bgColor={bgColor}
                isFirstCard={index === 0}
              />
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  );
}

export default FeaturedWorksSection;
