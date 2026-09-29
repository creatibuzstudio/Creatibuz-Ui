"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/data/navigation.data";
import { handleSectionScroll } from "@/lib/scroll-utils";
import { MobileMenu } from "./navbar/mobile-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 ${
          isScrolled
            ? "bg-[#191919] backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
            : "bg-[#191919] backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        }`}
      >
        {/* Left: Creatibuz Studio Logo */}
        <Link href="/" className="relative inline-flex items-center shrink-0">
          <div className="absolute left-[12%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F85800]/80 blur-md shadow-[0_0_40px_8px_rgba(248,88,0,0.9)] pointer-events-none z-0" />
          <Image
            src="/logo.png"
            className="relative z-10 w-[140px] sm:w-[175px] h-auto object-contain"
            width={175}
            height={42}
            alt="Creatibuz Studio"
            priority
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSectionScroll(e, link.href)}
              className="text-[#9CA3AF] hover:text-primary transition-colors duration-200 font-normal text-[14px] xl:text-[15px] tracking-tight relative py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Free Audit CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://calendly.com/jevxo-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-full p-1 md:py-1 md:pl-4.5 md:pr-1 transition-all duration-300 group"
          >
            <span className="hidden md:inline text-white text-[13px] sm:text-[14px] font-medium tracking-tight whitespace-nowrap">
              Free Audit
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary group-hover:bg-[#ff6914] flex items-center justify-center text-white shrink-0 animate-heartbeat-glow transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4.5 h-4.5 text-white" />
            ) : (
              <Menu className="w-4.5 h-4.5 text-white" />
            )}
          </button>
        </div>
      </motion.div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Navbar;
