"use client";

import { motion, useScroll, useTransform, useSpring, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { useLeadGen } from "../hooks/useLeadGen";

const marqueeItems = [
  "Business Process Automation",
  "Custom Web Systems",
  "AI-Powered Workflows",
  "API Integrations",
  "Legacy Modernization",
  "Growth-Ready Software",
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { setShowPopup, draftEmail, setDraftEmail } = useLeadGen();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  return (
    <section ref={ref} className="relative min-h-screen w-full flex flex-col bg-[var(--c-white)] overflow-hidden">
      {/* Background Decor — Extremely Subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(var(--c-black) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <motion.div
        style={{ y: springY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 md:px-12 pt-32 pb-20 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="badge-elite">
              <span className="badge-dot" />
              Elite Automation for Growing Businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-[6rem] font-black leading-[1] tracking-[-0.04em] text-[var(--c-black)]">
              Recover <span className="text-[var(--c-accent)]">15+ Hours</span> <br className="hidden md:block" />
              Every Single Week.
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-[var(--c-muted)] text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Stop losing money to repetitive manual tasks. We build 
            <span className="text-[var(--c-black)]"> elite web systems</span> that connect your tools and automate your growth on autopilot.
          </motion.p>

          {/* Lead Capture */}
          <motion.div variants={itemVariants} className="w-full max-w-xl mx-auto mb-16">
            <form 
              onSubmit={(e) => { e.preventDefault(); setShowPopup(true); }}
              className="flex flex-col sm:flex-row gap-3 p-2 bg-white border border-[var(--c-border)] rounded-2xl sm:rounded-full shadow-elite"
            >
              <input 
                type="email" 
                placeholder="Your work email..." 
                required
                value={draftEmail}
                onChange={(e) => setDraftEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-transparent text-[var(--c-black)] placeholder:text-[var(--c-muted)] focus:outline-none text-lg font-medium"
              />
              <button type="submit" className="btn btn-primary btn-lg rounded-xl sm:rounded-full px-10">
                Get Free Audit
                <ArrowRight size={20} />
              </button>
            </form>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-2 text-[11px] font-bold text-[var(--c-muted)] uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-[var(--c-accent)]" />
                100% Free Consultation
              </span>
              <span className="flex items-center gap-2 text-[11px] font-bold text-[var(--c-muted)] uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-[var(--c-accent)]" />
                No Commitment Required
              </span>
            </div>
          </motion.div>

          {/* Integration Bar */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            <span className="text-[10px] font-bold text-[var(--c-muted)] uppercase tracking-[0.25em]">We automate your favorite tools</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-20 grayscale">
              {["Zapier", "Make", "Slack", "Stripe", "HubSpot", "OpenAI"].map((tool) => (
                <span key={tool} className="text-lg font-black text-[var(--c-black)] tracking-tighter italic">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="w-full py-6 border-y border-[var(--c-border)] overflow-hidden">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-10 text-[11px] font-bold text-[var(--c-muted)] whitespace-nowrap uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
