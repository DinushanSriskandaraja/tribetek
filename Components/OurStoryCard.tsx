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
  description,
}: OurStoryCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col lg:flex-row items-center gap-16"
    >
      {/* Text */}
      <div className="flex-1">
        <div className="mb-6">
          <span className="badge-elite">Foundations</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] mb-8 tracking-tighter">
          {title}
        </h2>
        <p className="text-[var(--c-muted)] font-medium leading-relaxed text-xl whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 w-full">
        <div className="card-elite p-0 overflow-hidden group">
          <Image
            src={AboutUsImage}
            alt="Our Story"
            width={1200}
            height={800}
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}
