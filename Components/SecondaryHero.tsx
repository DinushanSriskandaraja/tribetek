"use client";

import { motion } from "framer-motion";
type SecondaryHeroProps = {
  title: string;
  highlight?: string; // brand-colored text
  subtitle: string;
  className?: string;
};

export default function SecondaryHero({
  title,
  highlight,
  subtitle,
  className = "h-[40vh]",
}: SecondaryHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`relative max-w-5xl mx-auto flex flex-col justify-center items-center text-center ${className}`}>
      {/* Grid background overlay */}
      {/* <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" /> */}

      <div
        className="relative z-10 px-6
      ">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-white">
          {title}{" "}
          {highlight && <span className="text-[#ED4716]  ">{highlight}</span>}
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.section>
  );
}
