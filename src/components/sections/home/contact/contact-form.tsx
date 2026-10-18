"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { BUDGET_OPTIONS } from "@/data/contact.data";
import { contactService } from "@/services/contact.service";

export function ContactForm() {
  const [selectedBudget, setSelectedBudget] = useState("Less than $500");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    productDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactService.createContact({
        ...formData,
        budget: selectedBudget,
      });
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        productDetails: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-32 text-center flex flex-col items-center space-y-5">
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <Check className="w-10 h-10 stroke-[3]" />
        </div>
        <h3 className="text-3xl font-bold text-white">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-400 max-w-md font-medium text-base">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Full Name */}
      <div className="space-y-2">
        <label className="text-[13px] md:text-base font-normal text-white/90 block">
          Full Name
        </label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="w-full bg-[#18191D] border border-white/10 focus:border-primary rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none"
        />
      </div>

      {/* Email & WhatsApp Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-[13px] md:text-base font-normal text-white/90 block">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="info@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-[#18191D] border border-white/10 focus:border-primary rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] md:text-base font-normal text-white/90 block">
            WhatsApp
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            value={formData.whatsapp}
            onChange={(e) =>
              setFormData({ ...formData, whatsapp: e.target.value })
            }
            className="w-full bg-[#18191D] border border-white/10 focus:border-primary rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none"
          />
        </div>
      </div>

      {/* Budget Setup Pills */}
      <div className="space-y-3 pt-2">
        <label className="text-[13px] md:text-base font-normal text-white/90 block mb-4">
          Budget Setup
        </label>
        <div className="flex flex-wrap gap-3">
          {BUDGET_OPTIONS.map((option) => {
            const isSelected = selectedBudget === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedBudget(option)}
                className={`px-8 py-4 rounded-[10px] text-[13px] sm:text-[14px] font-normal transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#24262E] text-white border-white/30 shadow-xs"
                    : "bg-[#18191D] text-gray-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-2 pt-2">
        <label className="text-[13px] md:text-base font-normal text-white/90 block">
          Product Details
        </label>
        <textarea
          rows={4}
          required
          placeholder="Tell us about your project goals, timelines, and requirements..."
          value={formData.productDetails}
          onChange={(e) =>
            setFormData({
              ...formData,
              productDetails: e.target.value,
            })
          }
          className="w-full bg-[#18191D] border border-white/10 focus:border-primary rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none resize-none min-h-[140px]"
        />
      </div>

        <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          text={isSubmitting ? "Submitting..." : "Book Free Consultation"}
          size="md"
          glow="md"
          customArrow={
            isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
            ) : undefined
          }
        />
    </form>
  );
}
