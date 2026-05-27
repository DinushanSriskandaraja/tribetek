"use client";

import { motion } from "framer-motion";

type SecondaryHeroProps = {
  title: string;
  highlight?: string;
  subtitle: string;
  className?: string;
};

export default function SecondaryHero({
  title,
  highlight,
  subtitle,
  className = "py-24",
}: SecondaryHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col justify-center items-center text-center ${className}`}
    >
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-[var(--c-black)] leading-[1.05]">
          {title}<br />
          {highlight && <span className="text-[var(--c-accent)]">{highlight}</span>}
        </h1>

        <p className="text-[var(--c-muted)] text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}
