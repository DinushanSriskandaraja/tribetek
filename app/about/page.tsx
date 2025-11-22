"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa6";
import Image from "next/image";
import AboutUsImage from "../../assets/AboutUs.jpg";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full  text-white overflow-hidden">
      {/* 🔥 Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-[#ED4716]/30 via-[#FF6B2C]/20 to-transparent blur-[240px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-tr from-[#FF6B2C]/25 via-[#ED4716]/15 to-transparent blur-[200px] rounded-full" />
      </div>

      {/* --- Container --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-28">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED4716] via-[#FF6B2C] to-[#ED4716]">
              TribeTek
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We are a bootstrap-born digital innovation agency — merging design,
            code, and strategy to create intelligent digital experiences that
            empower businesses to grow.
          </p>
        </motion.section>

        {/* STORY SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-16 bg-gradient-to-br from-[#121212]/50 to-[#1a1a1a]/40 rounded-3xl border border-[#2a2a2a] p-10 md:p-16 backdrop-blur-md shadow-[0_0_50px_rgba(237,71,22,0.05)]">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Story
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              TribeTek started as a humble, bootstrap-powered idea — building
              reliable, efficient digital products for businesses while crafting
              our own innovations. With no external funding, just pure passion
              and grit, we grew through code, creativity, and collaboration.
              <br />
              <br />
              Today, TribeTek stands as both a trusted digital partner and a
              creator of homegrown tech solutions that redefine possibilities
              for modern businesses.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-[#2a2a2a] shadow-[0_0_40px_rgba(255,107,44,0.15)]">
              <Image
                src={AboutUsImage}
                alt="About TribeTek"
                width={1200}
                height={800}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </motion.section>

        {/* CORE VALUES */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-32 px-6 md:px-12  overflow-hidden">
          {/* Subtle Background Glow */}
          {/* <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/5 w-[300px] h-[300px] bg-[#ED4716]/20 blur-[120px] rounded-full animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/6 w-[250px] h-[250px] bg-[#FF6B2C]/15 blur-[100px] rounded-full animate-pulse-slow" />
          </div> */}

          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-20">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Innovation",
                desc: "We think beyond trends to shape what’s next in tech.",
                icon: "💡",
              },
              {
                title: "Collaboration",
                desc: "We believe powerful ideas come from diverse minds.",
                icon: "🤝",
              },
              {
                title: "Integrity",
                desc: "We act with honesty, consistency, and transparency.",
                icon: "🛡️",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative   p-10 flex flex-col bg-[#090302]/20 items-center text-center shadow-lg shadow-[#ED4716]/20">
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#ED4716] to-[#FF6B2C] text-white text-2xl mb-5 shadow-md">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#ED4716] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {value.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-[#ED4716] to-[#FF6B2C]" />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
