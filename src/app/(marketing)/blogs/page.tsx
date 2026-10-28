import React from "react";
import type { Metadata } from "next";
import {
  BlogsHeroSection,
  BlogsAuthorsSection,
  BlogsNewsletterOrbitSection,
  BlogsBrandCtaSection,
} from "@/components/sections/blogs";
import { FaqSection } from "@/components/sections/home/faq-section";
import { SectionContainer } from "@/components/ui/section-container";
import { BLOG_POSTS } from "@/data/blogs.data";

export const metadata: Metadata = {
  title: "Blogs - Your Go-To Source: Blog Highlights & More | Creatibuz Studio",
  description:
    "Explore the latest UI/UX insights, AI product design trends, and engineering case studies from the creative minds at Creatibuz Studio.",
};

export const revalidate = 60; // Incremental static revalidation every 60s

export default function BlogsPage() {
  const blogs = BLOG_POSTS;

  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-hidden">
      {/* 1. Hero Section with Career Wave Background, Search Bar, 4 Cards & Pagination */}
      <BlogsHeroSection initialBlogs={blogs} />

      {/* 2. Authors Section: [ Authors ] Voices Behind The Words (3 cards matching Career founder cards) */}
      <BlogsAuthorsSection />

      {/* 3. Newsletter Orbit Section: Homepage CTA background with Orbit Rings & Email Subscription */}
      <BlogsNewsletterOrbitSection />

      {/* 4. Frequently Asked Questions Section wrapped in SectionContainer */}
      <SectionContainer extendTopBorder={false} showTopBorder={false}>
        <FaqSection />
      </SectionContainer>

      {/* 5. Brand CTA Section: "Your Brand Deserves the Next Level!" with Button, Avatar Stack & Socials */}
      <SectionContainer extendTopBorder={false} showTopBorder={true}>
        <BlogsBrandCtaSection />
      </SectionContainer>
    </div>
  );
}
