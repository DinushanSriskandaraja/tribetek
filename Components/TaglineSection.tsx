"use client";

import { motion } from "framer-motion";

export default function TaglineSection() {
  return (
    <section className="relative w-full py-32 sm:py-56 text-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] 
        bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),
        linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:70px_70px]"
      />

      {/* Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
                      -translate-y-1/2 w-[700px] h-[200px]
                      bg-[#ED4716]/25 blur-[140px] rounded-full"
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-extrabold leading-tight
                     drop-shadow-[0_0_25px_rgba(255,107,44,0.35)]">
          Turning Ideas Into
          <span className="text-[#ED4716]"> Intelligent Products</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-6 max-w-3xl mx-auto text-lg md:text-xl 
                     leading-relaxed">
          TribeTek blends design, engineering, and AI to build digital
          experiences that perform, scale, and inspire.
        </motion.p>
      </div>
    </section>
  );
}
