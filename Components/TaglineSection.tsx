"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TaglineSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={ref} className="bg-white py-40 overflow-hidden relative border-t border-[var(--c-border)]">
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 text-center"
      >
        <div className="mb-10">
          <span className="badge-elite">Our Vision</span>
        </div>

        <h2 className="text-5xl md:text-8xl font-black text-[var(--c-black)] leading-[1] tracking-tighter max-w-4xl mx-auto mb-10">
          Turning Manual Work into <span className="text-[var(--c-accent)]">Autopilot Growth.</span>
        </h2>

        <p className="text-[var(--c-muted)] text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
          TribeTek blends elite engineering with automation to build web systems that perform, scale, and deliver measurable ROI.
        </p>
      </motion.div>
    </section>
  );
}
