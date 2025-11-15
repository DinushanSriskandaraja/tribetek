"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center  text-white overflow-hidden">
      {/* Background Accent */}
  {/* <div className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-[#ED4716]/40 blur-[140px] rounded-full animate-pulse-slow" /> */}
  {/* <div className="absolute -right-80 w-[850px] h-[450px] bg-[#FF6B2C]/20 blur-[120px] rounded-full animate-pulse-slow" />
       */}

      {/* --- Subtle Grid Texture --- */}
      <div className="absolute inset-0 opacity-[0.04] 
        bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),
        linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] 
        bg-[size:70px_70px]" />

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left max-w-4xl"
        >
          <span className="uppercase tracking-[0.35em] text-[#ED4716] text-sm md:text-base mb-5">
            Empowering Innovation
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight 
            drop-shadow-[0_0_25px_rgba(255,107,44,0.35)]">
            Building{" "}
            <span className="text-[#ED4716] ">
              AI Software
            </span>{" "}
            & Digital Experiences
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed 
            drop-shadow-[0_0_20px_rgba(255,107,44,0.25)]">
            We craft scalable, data-driven, and design-focused digital
            solutions — helping brands innovate faster, smarter, and stronger.
          </p>

          {/* --- CTA Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-[#ED4716] to-[#ED4716] rounded-full font-semibold 
                       shadow-[0_0_30px_rgba(255,107,44,0.4)] hover:shadow-[0_0_60px_rgba(255,107,44,0.8)] 
                       hover:scale-105 transition-all duration-300 text-lg"
            >
              Start a Project
            </a>
            <a
              href="/about"
              className="px-10 py-4 border border-[#2b2b2b] rounded-full text-gray-200 
                       hover:text-[#ED4716] hover:border-[#ED4716] transition duration-300
                       hover:shadow-[0_0_30px_rgba(255,107,44,0.5)] text-lg"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center"
      >
        <span>Scroll Down</span>
        <div className="w-[1px] h-6 bg-[#ED4716] mt-2 rounded-full" />
      </motion.div>
    </section>
  );
}
