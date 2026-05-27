"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Target, Shield, BarChart3 } from "lucide-react";

interface PromoBentoProps {
  benefits: string[];
  solutions: string[];
}

export default function PromoBento({ benefits, solutions }: PromoBentoProps) {
  return (
    <section className="py-40 px-6 bg-[var(--c-white)] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <div className="mb-6">
            <span className="badge-elite !bg-[#FAFAFA]">The TribeTek Advantage</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-[var(--c-black)] tracking-[-0.04em] leading-[0.95]">
            Engineered for <br /> <span className="text-[var(--c-accent)]">Maximum Impact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Solution Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 card-elite !p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--c-accent)]/5 blur-3xl group-hover:opacity-100 transition-opacity" />
            <h3 className="text-4xl font-black text-[var(--c-black)] mb-6">Our Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--c-accent)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={14} className="text-[var(--c-accent)]" />
                  </div>
                  <span className="text-lg font-bold text-[var(--c-black)]">{s}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
               <button className="btn btn-primary btn-md">
                 Explore All Solutions
                 <ArrowRight size={18} />
               </button>
            </div>
          </motion.div>

          {/* Metric/Small Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 card-elite !bg-[var(--c-black)] text-white flex flex-col justify-center items-center text-center !p-10"
          >
            <div className="text-6xl font-black text-[var(--c-accent)] mb-4 italic">99%</div>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs leading-relaxed">
              Automation Accuracy & System Reliability
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 card-elite !bg-[#FAFAFA] !border-none flex flex-col justify-between"
          >
            <h3 className="text-2xl font-black text-[var(--c-black)] mb-6">Why us?</h3>
            <ul className="space-y-4">
              {benefits.slice(0, 3).map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--c-muted)] font-medium">
                  <Zap size={16} className="text-[var(--c-accent)]" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Large Benefit Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 card-elite group !p-12 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-24 h-24 rounded-3xl bg-[var(--c-accent)] flex items-center justify-center text-white flex-shrink-0 shadow-2xl group-hover:rotate-6 transition-transform">
               <BarChart3 size={40} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-[var(--c-black)] mb-4 tracking-tight">Data-Driven Growth</h3>
              <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed">
                We don't just build tools; we build growth engines. Every system we deploy is optimized for scale, speed, and measurable business impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
