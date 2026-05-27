"use client";
import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

export default function BenefitsSection({ benefits }: { benefits: string[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-20">
      <div className="text-center">
        <div className="mb-6">
          <span className="badge-elite !bg-white">Core Benefits</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-[var(--c-black)] tracking-[-0.04em] leading-[0.95]">
          Why Partner With <span className="text-[var(--c-accent)]">TribeTek?</span>
        </h2>
        <p className="mt-8 text-[var(--c-muted)] text-xl font-medium max-w-2xl mx-auto">
          We combine elite engineering with business logic to deliver systems that drive measurable ROI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="card-elite group relative overflow-hidden flex flex-col !p-10 min-h-[300px] justify-between">
            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--c-accent)]/5 blur-3xl group-hover:bg-[var(--c-accent)]/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[var(--c-black)] text-white flex items-center justify-center mb-8 group-hover:bg-[var(--c-accent)] group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-[var(--c-accent)]/20">
                <CheckCircle2 size={28} strokeWidth={1.5} />
              </div>
              <p className="text-[var(--c-black)] text-2xl font-black leading-[1.2] tracking-tight">
                {b}
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-[var(--c-border)] pt-6">
              <span className="text-[10px] font-black text-[var(--c-muted)] uppercase tracking-[0.3em]">Benefit 0{i+1}</span>
              <div className="w-6 h-1 rounded-full bg-[var(--c-border)] group-hover:bg-[var(--c-accent)] group-hover:w-12 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}


