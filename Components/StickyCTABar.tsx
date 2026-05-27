"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLeadGen } from "../hooks/useLeadGen";
import { ArrowRight } from "lucide-react";

export default function StickyCTABar() {
  const { isInitialized, hasSubmittedLead, setShowPopup } = useLeadGen();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (e.g., 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isInitialized || hasSubmittedLead) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 flex justify-center pointer-events-none"
        >
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-4 max-w-4xl w-full flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-gray-900 font-bold text-sm md:text-base">Ready to automate your workflows?</h4>
              <p className="text-gray-500 text-xs md:text-sm">Get a free automation audit and ROI calculation.</p>
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className="flex-shrink-0 px-6 py-2.5 bg-[#ED4716] hover:bg-[#d63d10] text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2 group"
            >
              Get Free Audit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
