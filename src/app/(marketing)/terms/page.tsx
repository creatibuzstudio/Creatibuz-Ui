import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/legal/legal-page-layout";
import { FooterBoundarySparks } from "@/components/ui/footer-boundary-sparks";
import { TERMS_SECTIONS } from "@/data/legal.data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Creatibuz Studio",
  description:
    "Review the terms of service, intellectual property ownership, payment guidelines, and project agreements when working with Creatibuz Studio.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0C0E12] text-primary-text flex flex-col justify-between overflow-x-clip">
      <LegalPageLayout
        badge="Legal & Compliance"
        title="Terms &"
        titleAccent="Conditions"
        subtitle="Review the terms of service, intellectual property ownership rights, payment schedules, and professional guidelines when partnering with Creatibuz Studio."
        lastUpdated="October 2026"
        sections={TERMS_SECTIONS}
      />
      <FooterBoundarySparks />
    </div>
  );
}
