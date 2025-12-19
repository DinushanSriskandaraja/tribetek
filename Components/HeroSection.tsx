"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white overflow-hidden">
      {/* --- Subtle Grid Texture --- */}
      <div
        className="absolute inset-0 opacity-[0.04] 
        bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),
        linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] 
        bg-[size:70px_70px]"
      />

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-[#ED4716] text-sm md:text-base mb-7">
          <span
            className="px-4 py-1 rounded-full text-[#ED4716] text-xs md:text-sm font-medium 
               bg-[#ED4716]/30 border border-[#ED4716]/20 backdrop-blur-sm">
            🚀 Limited Onboarding Slots Available
          </span>{" "}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 
          max-w-7xl 
                     ">
          Automation-Driven{" "}
          <span className="text-[#ED4716]">Web Solutions </span> That Reduce
          Manual Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed 
                     drop-shadow-[0_0_20px_rgba(255,107,44,0.25)]">
          TribeTek designs and develops custom web-based automation solutions
          that replace manual processes, reduce errors, and help businesses
          operate efficiently.
        </motion.p>

        {/* --- CTA Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-[#ED4716] to-[#ED4716] rounded-full font-semibold 
                       
                       hover:scale-105 transition-all duration-300 text-lg">
            Start a Project
          </a>
          <a
            href="/about"
            className="px-10 py-4 border border-[#2b2b2b] rounded-full text-gray-200 
                       hover:text-[#ED4716] hover:border-[#ED4716] transition duration-300 
                       hover:shadow-[0_0_30px_rgba(255,107,44,0.5)] text-lg">
            Learn More
          </a>
        </motion.div>
        {/* --- Stats Line --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-6 text-sm text-gray-300">
          {/* Item 1 */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ED4716] shadow-[0_0_10px_#ED4716]"></span>
            <span>Used by 15+ Sri Lankan brands</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ED4716] shadow-[0_0_10px_#ED4716]"></span>
            <span>2,400+ hours saved</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ED4716] shadow-[0_0_10px_#ED4716]"></span>
            <span>45+ projects delivered</span>
          </div>
        </motion.div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center">
        <span>Scroll Down</span>
        <div className="w-[1px] h-6 bg-[#ED4716] mt-2 rounded-full" />
      </motion.div>

      {/* Bottom Gradient Glow */}
    </section>
  );
}
