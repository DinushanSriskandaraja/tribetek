"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  description?: string;
  slug: string;
  date?: string;
  index?: number; // for animation delay
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  index = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-3xl bg-[#161616]/60 border border-[#2b2b2b] backdrop-blur-xl overflow-hidden
        transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
        hover:-translate-y-2 ">
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute -bottom-[60px] -right-[60px] w-[200px] h-[200px] bg-[#ED4716] blur-[100px] opacity-30" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white group-hover:text-[#ED4716] transition">
            {title}
          </h3>
          <p className="text-gray-400 mt-3 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span className="text-gray-500">{date || "Coming soon"}</span>
          <Link
            href={`/blog/${slug}`}
            className="font-semibold text-[#ED4716] group-hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
