"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description?: string;
  slug: string;
  date?: string;
  index?: number;
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
    >
      <Link href={`/blog/${slug}`} className="card-elite group h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="badge-elite">Perspective</span>
            <span className="text-[10px] font-black text-[var(--c-muted)] uppercase tracking-widest">{date || "Coming soon"}</span>
          </div>
          <h3 className="text-2xl font-black text-[var(--c-black)] group-hover:text-[var(--c-accent)] transition-colors duration-300 tracking-tight leading-tight mb-4">
            {title}
          </h3>
          <p className="text-[var(--c-muted)] font-medium leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-2 text-[var(--c-black)] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
          Analyze Insight <ArrowRight size={14} className="text-[var(--c-accent)]" />
        </div>
      </Link>
    </motion.div>
  );
}
