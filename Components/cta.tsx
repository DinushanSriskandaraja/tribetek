"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useLeadGen } from "../hooks/useLeadGen";
import { usePathname } from "next/navigation";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bulletPoints?: string[];
  isGlobal?: boolean;
}

export default function CTASection({ title, subtitle, bulletPoints, isGlobal }: CTASectionProps) {
  const pathname = usePathname();
  const { draftEmail, setDraftEmail, submitLead } = useLeadGen();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Hide the global CTA on promotional landing pages to avoid duplication
  if (isGlobal && pathname?.startsWith("/promo/")) {
    return null;
  }

  const defaultBulletPoints = [
    "30-Minute Expert Automation Audit",
    "Custom ROI & Savings Roadmap",
    "Zero Commitment Consultation",
    "24-Hour Response Guarantee"
  ];

  const displayBulletPoints = bulletPoints || defaultBulletPoints;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      submitLead(draftEmail);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-32 px-6 bg-[var(--c-black)] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--c-accent)] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--c-accent)] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <span className="badge-elite !bg-white/10 !border-white/10 !text-white">
                <span className="badge-dot !bg-[var(--c-accent)]" />
                Next Steps — Ready to Scale?
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8">
              {title || "Stop losing hours to manual work."}
            </h2>
            <div className="space-y-4">
              {displayBulletPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80 font-medium">
                  <CheckCircle2 size={18} className="text-[var(--c-accent)]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[var(--c-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-[var(--c-accent)]" />
                </div>
                <h3 className="text-2xl font-black text-[var(--c-black)] mb-3">Audit Requested!</h3>
                <p className="text-[var(--c-muted)] font-medium">
                  We've received your request. Check your inbox shortly for your custom automation strategy.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-black text-[var(--c-black)] mb-6 leading-tight">
                  {subtitle || "Get your free automation roadmap."}
                </h3>
                <p className="text-[var(--c-muted)] font-medium mb-8">
                  Enter your email and we'll send you a detailed audit of where you can save the most time.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Your work email..."
                    value={draftEmail}
                    onChange={(e) => setDraftEmail(e.target.value)}
                    className="input-elite"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || !draftEmail}
                    className="btn btn-primary btn-lg w-full"
                  >
                    {isSubmitting ? "Processing..." : "Claim My Free Audit"}
                    <ArrowRight size={20} />
                  </button>
                </form>
                <p className="mt-6 text-center text-[10px] font-bold text-[var(--c-muted)] uppercase tracking-widest">
                  No credit card required · Trusted by 50+ businesses
                </p>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

