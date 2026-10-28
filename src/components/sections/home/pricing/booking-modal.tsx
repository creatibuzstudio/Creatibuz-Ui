"use client";

import { useState } from "react";
import { X, CheckCircle2, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { PlanItem } from "@/data/pricing.data";
import { packageBookingService } from "@/services/booking.service";

interface BookingModalProps {
  plan: PlanItem;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ plan, isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    whatsappNumber: "",
    companyName: "",
    companyEmail: "",
  });

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSuccess(false);
    setErrorMessage("");
    setFormData({
      name: "",
      userEmail: "",
      whatsappNumber: "",
      companyName: "",
      companyEmail: "",
    });
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      // API calling temporarily disconnected - preserve code for when backend is ready
      /*
      const billingCycle =
        plan.period.replace("/", "").replace("per", "").trim() || "month";

      await packageBookingService.createBooking({
        ...formData,
        billingCycle,
        packageId: plan.id,
      });
      */
      await new Promise((resolve) => setTimeout(resolve, 400));
      setIsSuccess(true);
    } catch (error) {
      console.error("Booking failed:", error);
      setErrorMessage("Something went wrong while submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success Modal View
  if (isSuccess) {
    const waText = encodeURIComponent(
      `Hi Creatibuz Studio, I just booked the ${plan.name} package ($${plan.price} ${plan.period}). My email is ${formData.userEmail}.`
    );

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
        <div className="bg-[#111622] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative text-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Glowing Success Icon */}
          <div className="relative mx-auto w-20 h-20 mb-5 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.35)]">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-2 font-sans tracking-tight">
            Booking Confirmed!
          </h3>

          <p className="text-gray-300 text-sm md:text-base mb-6 font-sans">
            Thank you, <strong className="text-white">{formData.name}</strong>. We have received your booking request for:
          </p>

          {/* Booked Plan Pill / Card */}
          <div className="bg-[#0b101d] border border-gray-800 rounded-xl p-4 mb-6 text-left flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                Booked Package
              </span>
              <div className="text-base font-bold text-white mt-0.5">
                {plan.name}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Confirmation sent to: <span className="text-gray-200 font-medium">{formData.userEmail}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-black text-primary">
                ${plan.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">{plan.period}</div>
            </div>
          </div>

          <div className="p-3.5 bg-gray-900/60 rounded-xl border border-gray-800/80 mb-6 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xs text-gray-300">
              Our team will review your project details and reach out within <strong className="text-white">2-4 business hours</strong>.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={`https://wa.me/+8801968657353?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] text-sm md:text-base"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp for Instant Setup
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="w-full py-3 px-4 bg-[#1b2234] hover:bg-[#242d45] text-gray-300 hover:text-white rounded-lg font-medium transition-colors text-sm"
            >
              Done / Close
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={formData.whatsappNumber}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, whatsappNumber: e.target.value }))
                }
                className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="+880 1968 657353"
              />
            </div>
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
          {errorMessage && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-center gap-2 text-rose-400 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

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
