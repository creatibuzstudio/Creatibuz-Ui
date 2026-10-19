"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  customMessage?: string;
  className?: string;
}

export function FloatingWhatsApp({
  phoneNumber = "8801968657353",
  customMessage = "Hello, I am interested in your services. Are you available to chat with me now?",
  className = "",
}: FloatingWhatsAppProps) {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3 ${className}`}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 ease-out"
      >
        {/* Ambient subtle periodic pulse wave (calm, slow, and non-distracting) */}
        <motion.span
          className="absolute -inset-1.5 rounded-full bg-[#25D366] pointer-events-none"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{
            scale: [0.95, 1.45, 1.6],
            opacity: [0, 0.45, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeOut",
          }}
        />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-6" />

        {/* Desktop Hover Tooltip */}
        <span className="pointer-events-none absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#14161C] border border-white/10 text-white text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 hidden sm:flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Chat on WhatsApp
        </span>
      </Link>
    </motion.div>
  );
}

export default FloatingWhatsApp;
