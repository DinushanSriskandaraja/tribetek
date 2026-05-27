"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BizAutomation from "../assets/BizAutomation.jpg";
import Branding from "../assets/Brandings.jpg";
import SocialMedia from "../assets/SocialMedia.jpg";
import TechStack from "../assets/TechStack.jpg";

const blogs = [
  { title: "Business Automation ROI", tagline: "How smart workflows directly impact your bottom line.", image: BizAutomation, href: "/blog/automate-business-workflow", tag: "Strategy" },
  { title: "The Branding Myth", tagline: "Why authority is built on systems, not just visual aesthetics.", image: Branding, href: "/blog/branding-trust", tag: "Authority" },
  { title: "Scalable Tech Stacks", tagline: "Choosing the right architecture for exponential growth.", image: TechStack, href: "/blog/top-tech-stacks", tag: "Engineering" },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="badge-elite">Insights</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--c-black)] leading-tight tracking-tighter">
              Latest <span className="text-[var(--c-accent)]">Thinking.</span>
            </h2>
          </div>
          <Link href="/blog" className="btn btn-primary">
            View All Articles <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={blog.href} className="card-elite group block h-full overflow-hidden p-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-elite !bg-[var(--c-black)] !text-white !border-transparent">
                      {blog.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--c-black)] mb-3 tracking-tight group-hover:text-[var(--c-accent)] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-[var(--c-muted)] font-medium leading-relaxed mb-6">
                    {blog.tagline}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--c-black)] font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    Read Article <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
