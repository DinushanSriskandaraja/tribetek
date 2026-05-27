"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import { useLeadGen } from "../hooks/useLeadGen";

interface PromoHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export default function PromoHero({ badge, title, subtitle, ctaText }: PromoHeroProps) {
  const { setShowPopup, draftEmail, setDraftEmail } = useLeadGen();

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-[var(--c-white)]">
      {/* Background Decor — Animated Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-[var(--c-accent)]/10 to-transparent blur-[160px] rounded-full pointer-events-none opacity-40" />
      
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-10">
            <span className="badge-elite !py-2 !px-6 !text-sm">
              <span className="badge-dot" />
              {badge}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[6.5rem] font-black tracking-[-0.05em] text-[var(--c-black)] mb-10 leading-[0.95]">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'automation' || word.toLowerCase() === 'scalable' || word.toLowerCase() === 'ai-powered' ? 'text-[var(--c-accent)]' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--c-muted)] font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Direct Lead Capture in Hero for High Conversion */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <form 
              onSubmit={(e) => { e.preventDefault(); setShowPopup(true); }}
              className="flex flex-col sm:flex-row gap-4 p-3 bg-white border border-[var(--c-border)] rounded-3xl shadow-elite hover:shadow-2xl transition-shadow duration-500"
            >
              <input 
                type="email" 
                placeholder="Enter your work email..." 
                required
                value={draftEmail}
                onChange={(e) => setDraftEmail(e.target.value)}
                className="flex-1 px-8 py-5 bg-transparent text-[var(--c-black)] placeholder:text-[var(--c-muted)] focus:outline-none text-xl font-medium"
              />
              <button type="submit" className="btn btn-primary btn-lg rounded-2xl px-12 text-lg">
                {ctaText}
                <ArrowRight size={22} />
              </button>
            </form>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
              <span className="flex items-center gap-3 text-[12px] font-black text-[var(--c-muted)] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[var(--c-accent)]" />
                Free 30-Min Audit
              </span>
              <span className="flex items-center gap-3 text-[12px] font-black text-[var(--c-muted)] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[var(--c-accent)]" />
                Zero Commitment
              </span>
              <span className="flex items-center gap-3 text-[12px] font-black text-[var(--c-muted)] uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[var(--c-accent)]" />
                24hr Response
              </span>
            </div>
          </div>
          
          {/* Trust Bar */}
          <div className="mt-12 flex flex-col items-center gap-8">
            <span className="text-[11px] font-black text-[var(--c-muted)] uppercase tracking-[0.3em] opacity-60">Trusted by modern companies</span>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {["ZAPIER", "MAKE", "SLACK", "STRIPE", "HUBSPOT"].map((tool) => (
                <span key={tool} className="text-2xl font-black text-[var(--c-black)] tracking-tighter italic">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


