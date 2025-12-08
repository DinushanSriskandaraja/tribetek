"use client";

import { motion } from "framer-motion";

type SecondaryHeroProps = {
  title: string;
  subtitle: string;
  className?: string; // optional extra class for height/customization
};

export default function SecondaryHero({
  title,
  subtitle,
  className = "h-[40vh]",
}: SecondaryHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`relative flex flex-col justify-center items-center text-center ${className}`}>
      {/* Grid background overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-[#ED4716] via-[#FF6B2C] to-[#ED4716] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,107,44,0.4)]">
          {title}
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}
