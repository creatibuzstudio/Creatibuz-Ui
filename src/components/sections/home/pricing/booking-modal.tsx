"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { PlanItem } from "@/data/pricing.data";
import { packageBookingService } from "@/services/booking.service";

interface BookingModalProps {
  plan: PlanItem;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ plan, isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    companyName: "",
    companyEmail: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const billingCycle =
        plan.period.replace("/", "").replace("per", "").trim() || "month";

      await packageBookingService.createBooking({
        ...formData,
        billingCycle,
        packageId: plan.id,
      });

      alert("Booking successful! We will contact you soon.");
      onClose();
      setFormData({
        name: "",
        userEmail: "",
        companyName: "",
        companyEmail: "",
      });
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#111622] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-2xl font-bold text-foreground mb-2 font-sans">
          Book {plan.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 font-sans">
          ${plan.price.toLocaleString()} {plan.period}. Fill out the form below
          and we&apos;ll get in touch with you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
              Your Name
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
              Your Email
            </label>
            <input
              required
              type="email"
              value={formData.userEmail}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, userEmail: e.target.value }))
              }
              className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
              Company Name
            </label>
            <input
              required
              type="text"
              value={formData.companyName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, companyName: e.target.value }))
              }
              className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Acme Corp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
              Company Email
            </label>
            <input
              required
              type="email"
              value={formData.companyEmail}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  companyEmail: e.target.value,
                }))
              }
              className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="contact@acme.com"
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-3.5 bg-primary hover:brightness-110 disabled:opacity-50 text-foreground rounded-lg font-medium transition-all mt-6 shadow-[0_0_20px_rgba(248,88,0,0.35)]"
          >
            {isSubmitting ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
