"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden text-white">
      {/* Background glow accents */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-[#ED4716]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-[#FF6B2C]/20 blur-[120px] rounded-full animate-pulse" />
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Card-like container */}
        <div className="group relative p-12 rounded-3xl bg-[#161616]/60 backdrop-blur-xl border border-[#2b2b2b] overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute -bottom-[60px] -right-[60px] w-[220px] h-[220px] bg-[#ED4716] blur-[100px] opacity-30" />
          </div>

          {/* Text content */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_0_20px_rgba(255,107,44,0.4)]">
            Let’s design an
            {/* <br className="sm:hidden" /> */}
            <span className="text-[#ED4716]"> automation system </span> that
            actually works for your business.{" "}
          </h2>

          {/* <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Whether you’re launching a startup or scaling your business, our
            expert team transforms ideas into cutting-edge software, mobile
            apps, and digital solutions.z
          </p> */}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-[#ED4716] to-[#FF6B2C] text-white font-semibold rounded-full 
                         ] 
                         transition duration-300">
              Request a Free Automation Consultation{" "}
            </a>
            {/* <a
              href="/portfolio"
              className="px-10 py-4 border border-[#2b2b2b] text-gray-200 font-medium rounded-full 
                         hover:border-[#ED4716] hover:text-[#ED4716] transition duration-300">
              View Our Work
            </a> */}
          </div>

          {/* Subtle border shimmer */}
          <span className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
