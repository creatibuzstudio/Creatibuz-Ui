"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact/contact-form";

export function ContactCtaSection() {
  return (
    <section id="contact" className="w-full flex justify-center">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Dark Floating Card Container */}
        <div className="w-full bg-card text-foreground rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 relative overflow-hidden border border-[#FF6B00]/40 shadow-[0_0_35px_rgba(255,107,0,0.12)]">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6B00]/15 rounded-full blur-[90px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          {/* Left Column: Headline, Photo, Profile Info */}
          <div className="w-full lg:w-5/12 flex flex-col items-start relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2] mb-8 text-white">
              Enhance Your Brand <br className="hidden sm:inline" />
              Potential{" "}
              <span className="italic font-medium text-primary">
                At No Cost!
              </span>
            </h2>

            {/* Founder Photo */}
            <div className="w-full max-w-[320px] aspect-[4/4.5] rounded-[16px] overflow-hidden relative mb-8 shadow-2xl bg-gray-900 border border-white/5">
              <Image
                src="/hakim.png"
                alt="Md Abdul Hakim"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover object-center"
              />
            </div>

            {/* Profile Name & Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
              Md Abdul Hakim
            </h3>
            <p className="text-[15px] md:text-[20px] text-foreground font-normal leading-snug mb-8">
              Founder & CEO -<br />
              Creatibuz Studio - Agency
            </p>

            {/* WhatsApp Contact */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 text-[15px] md:text-[20px] font-medium text-white/90">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span>+880 1968657353</span>
              </div>
              <Link
                href="https://wa.me/+8801968657353"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold text-[17px] md:text-[22px] hover:text-[#E65C00] transition-colors mt-1"
              >
                Book a Call Directly
              </Link>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="w-full lg:w-7/12 relative z-10 mt-4 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
