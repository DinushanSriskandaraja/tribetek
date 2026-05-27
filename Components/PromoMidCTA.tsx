"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoMidCTA() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[var(--c-black)] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-accent)]/20 to-transparent opacity-50" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Don't let manual work <br /> <span className="text-[var(--c-accent)]">slow down</span> your growth.
            </h2>
            <button className="btn btn-primary btn-lg rounded-2xl text-lg px-12">
              Secure Your Audit Now
              <ArrowRight size={22} />
            </button>
            <p className="mt-8 text-white/40 text-sm font-bold uppercase tracking-widest">
              No credit card required · 100% Confidential
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
