"use client";
import { motion } from "framer-motion";

export default function TechStackSection({ techStack, techIconMap }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-10">
      <h2 className="text-4xl font-bold">Tech Stack</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((tech: string, i: number) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 bg-[#151515]/70 border border-[#2a2a2a] rounded-full hover:bg-[#ED4716]/10 hover:border-[#ED4716]/50 transition">
            {techIconMap[tech]}
            <span className="text-sm font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
