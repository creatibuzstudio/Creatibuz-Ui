"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact/contact-form";

export function ContactCtaSection() {
  return (
    <section id="contact" className="w-full lg:px-16 flex justify-center">
      {/* Dark Floating Card Container with exact screenshot gradient border */}
      <div
        className="w-full text-foreground rounded-[20px] sm:rounded-[24px] p-8 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(var(--card, #181A1E), var(--card, #181A1E)) padding-box, linear-gradient(225deg, #FE5A00 0%, rgba(255, 255, 255, 0.12) 48%, rgba(255, 255, 255, 0.1) 52%, #FE5A00 100%) border-box",
          border: "1.5px solid transparent",
        }}
      >
        {/* Left Column: Headline, Photo, Profile Info */}
        <div className="w-full lg:w-5/12 flex flex-col items-start relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2] mb-8 text-header-text">
            Enhance Your Brand <br className="hidden sm:inline" />
            Potential{" "}
            <span className="italic font-serif font-medium text-primary">
              At No Cost!
            </span>
          </h2>

          {/* Founder Photo */}
          <div className="w-full max-w-[320px] aspect-[4/4.5] rounded-[16px] overflow-hidden relative mb-8 shadow-2xl bg-gray-900 border border-white/5">
            <Image
              src="/founder.jpg"
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
          <p className="text-[15px] md:text-[20px] text-header-text font-normal leading-snug mb-8">
            Founder & CEO -<br />
            Creatibuz Studio - Agency
          </p>

          {/* WhatsApp Contact */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 text-[15px] md:text-[20px] font-medium text-white/90">
              <Image
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                width={30}
                height={30}
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
    </section>
  );
}

export default ContactCtaSection;
