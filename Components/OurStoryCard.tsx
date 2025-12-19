"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutUsImage from "@/assets/AboutUs.jpg";

type OurStoryCardProps = {
  title?: string;
  description?: string;
};

export default function OurStoryCard({
  title = "Our Story",
  description = `TribeTek started as a bootstrap-powered vision — building powerful
  systems for businesses while crafting our own innovations. Without investors,
  without shortcuts, just execution and obsession with quality.

  Today, TribeTek builds automation-first products that transform how modern
  businesses operate.`,
}: OurStoryCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-16 
        bg-[#161616]/70 border-[#2b2b2b]
        rounded-3xl border  p-10 md:p-16 
        backdrop-blur-md ">
      {/* Text */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h2>
        <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex-1">
        <div className="relative overflow-hidden rounded-3xl border border-[#2a2a2a] ">
          <Image
            src={AboutUsImage}
            alt="Our Story"
            width={1200}
            height={800}
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
