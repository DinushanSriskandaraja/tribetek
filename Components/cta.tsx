"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-[#111] via-[#0a0a0a] to-[#000] overflow-hidden text-white">
      {/* Background glow accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#FF6B2C]/10 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#ED4716]/10 blur-[200px] rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Ready to <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED4716] via-[#FF6B2C] to-[#ED4716]">
            Build Something Extraordinary?
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl">
          Whether you’re launching a startup or scaling your business, our
          expert team transforms ideas into cutting-edge software, mobile apps,
          and digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-10 py-4 bg-gradient-to-r from-[#ED4716] to-[#FF6B2C] text-white font-semibold rounded-full 
                      shadow-[0_0_25px_rgba(255,107,44,0.4)] hover:shadow-[0_0_45px_rgba(255,107,44,0.6)] 
                      hover:scale-105 transition duration-300"
          >
            Start Your Project
          </a>
          <a
            href="/portfolio"
            className="px-10 py-4 border border-[#2b2b2b] text-gray-200 font-medium rounded-full 
                      hover:border-[#ED4716] hover:text-[#ED4716] transition duration-300"
          >
            View Our Work
          </a>
        </div>
      </motion.div>

      {/* Decorative gradient line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ED4716] via-[#FF6B2C] to-transparent opacity-60" />
    </section>
  );
}
