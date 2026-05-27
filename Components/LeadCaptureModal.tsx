"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLeadGen } from "../hooks/useLeadGen";

export default function LeadCaptureModal() {
  const {
    isInitialized,
    showPopup,
    dismissPopup,
    triggerPopup,
    draftEmail,
    setDraftEmail,
    submitLead,
    hasSubmittedLead,
    hasDismissedPopup
  } = useLeadGen();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isInitialized) return;

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // Also trigger after 30 seconds if they haven't left
    const timer = setTimeout(() => {
      triggerPopup();
    }, 30000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && (scrollY / docHeight) * 100 > 70) {
        triggerPopup();
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isInitialized, triggerPopup]);

  if (!isInitialized) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftEmail) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      submitLead(draftEmail);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        dismissPopup();
        setSubmitted(false);
      }, 2000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {showPopup && !hasSubmittedLead && !hasDismissedPopup && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={dismissPopup}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden bg-white border border-gray-200 rounded-2xl pointer-events-auto shadow-2xl shadow-[#ED4716]/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ED4716] to-transparent opacity-50"
              />

              <button
                onClick={dismissPopup}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 bg-[#ED4716]/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} className="text-[#ED4716]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Audit Requested!</h3>
                    <p className="text-gray-600 text-sm">
                      Check your email. We will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <span className="inline-block px-3 py-1 bg-[#ED4716]/10 text-[#ED4716] text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-[#ED4716]/20">
                        Free ROI Audit
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                        Stop wasting 15+ hours a week on manual work.
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Find out exactly how much time and money you can save with a custom automation system. Enter your email for a free 2-minute ROI audit.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        type="email"
                        required
                        placeholder="Enter your work email"
                        value={draftEmail}
                        onChange={(e) => setDraftEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#ED4716]/50 focus:ring-1 focus:ring-[#ED4716]/50 transition-all"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting || !draftEmail}
                        className="w-full py-4 bg-[#ED4716] hover:bg-[#d63d10] text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? "Processing..." : "Get My Free Audit"}
                        {!isSubmitting && (
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-6">
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CheckCircle2 size={12} className="text-[#ED4716]" />
                        100% Free
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CheckCircle2 size={12} className="text-[#ED4716]" />
                        No Commitment
                      </span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
