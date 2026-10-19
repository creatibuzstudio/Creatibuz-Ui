import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/legal/legal-page-layout";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";
import { COOKIES_SECTIONS } from "@/data/legal.data";

export const metadata: Metadata = {
  title: "Cookies Policy | Creatibuz Studio",
  description:
    "Learn how Creatibuz Studio uses cookies and browser tracking technologies to deliver smooth UI interactions, perform site analytics, and improve user experiences.",
};

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-x-clip">
      <LegalPageLayout
        badge="Cookies & Analytics Policy"
        title="Cookies"
        titleAccent="Policy"
        subtitle="Learn how Creatibuz Studio utilizes browser cookies and analytical technologies to optimize page speeds, safeguard sessions, and deliver seamless digital experiences."
        lastUpdated="October 2026"
        sections={COOKIES_SECTIONS}
      />
      <FooterBoundarySparks />
    </div>
  );
}
