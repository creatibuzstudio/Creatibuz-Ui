"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contact/contact-form";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ContactCtaSection() {
  return (
    <section id="contact" className="w-full lg:px-16 flex justify-center">
      {/* Dark Floating Card Container with exact screenshot gradient border */}
      <div
        className="w-full text-foreground rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(var(--card, #181A1E), var(--card, #181A1E)) padding-box, linear-gradient(225deg, #FE5A00 0%, rgba(255, 255, 255, 0.12) 48%, rgba(255, 255, 255, 0.1) 52%, #FE5A00 100%) border-box",
          border: "1.5px solid transparent",
        }}
      >
        {/* Left Column: Headline, Photo, Profile Info (Center aligned on mobile, left aligned on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2] mb-6 sm:mb-8 text-header-text text-center lg:text-left">
            Enhance Your Brand <br className="hidden sm:inline" />
            Potential{" "}
            <span className="italic font-serif font-medium text-primary">
              At No Cost!
            </span>
          </h2>

          {/* Founder Photo */}
          <div className="w-full max-w-[260px] sm:max-w-[320px] aspect-[4/4.5] rounded-[16px] overflow-hidden relative mb-6 sm:mb-8 shadow-2xl bg-gray-900 border border-white/5 mx-auto lg:mx-0">
            <Image
              src="/founder.jpg"
              alt="Md Abdul Hakim"
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover object-center"
            />
          </div>

          {/* Profile Name & Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2 text-center lg:text-left">
            Md Abdul Hakim
          </h3>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] text-header-text font-normal leading-snug mb-6 sm:mb-8 text-center lg:text-left">
            Founder & CEO -<br />
            Creatibuz Studio - Agency
          </p>

          {/* WhatsApp Contact */}
          <Link
            href="https://wa.me/+8801968657353"
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto min-w-[240px] inline-flex items-center justify-between px-5 py-3 sm:py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all duration-200 group mx-auto lg:mx-0"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#25D366] fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Direct WhatsApp Chat
            </span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
        {/* Right Column: Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-7/12 relative z-10 mt-4 lg:mt-0"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCtaSection;
