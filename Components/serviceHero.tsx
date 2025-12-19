"use client";
import { motion } from "framer-motion";

export default function HeroSection({ icon, service }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center md:text-left flex flex-col md:flex-row items-center gap-12 mt-16">
      <div className="bg-gradient-to-br from-[#151515] to-[#1f1f1f] rounded-3xl p-10 shadow-lg shadow-black/30">
        {icon}
      </div>

      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#ED4716] to-orange-400 bg-clip-text text-transparent mb-4">
          {service.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 italic mb-6">
          {service.tagline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-12">
          {service.description}
        </p>
      </div>
    </motion.section>
  );
}
