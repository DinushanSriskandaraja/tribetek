"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";

const testimonials = [
  {
    name: "Niranjan Fernando",
    role: "CEO, Nexon Tech",
    quote: "TribeTek helped us digitize our entire process. What used to take days now takes minutes. Their team truly understands business and tech.",
    avatar: C1,
  },
  {
    name: "Dilini Perera",
    role: "Marketing Head, Luxe Studios",
    quote: "Their branding and automation ideas were game-changing for us. Super easy to work with and delivers above expectations.",
    avatar: C2,
  },
  {
    name: "Shanaka Mendis",
    role: "Founder, AgroLink",
    quote: "Our entire farming supply chain is now online thanks to TribeTek. They’re not just developers—they’re true partners.",
    avatar: C3,
  },
  {
    name: "Hasan Rauf",
    role: "CTO, BizCore Global",
    quote: "We saw a 60% improvement in operational efficiency. They helped us scale with the right tools and clean interfaces.",
    avatar: C3,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="badge-elite">Client Success</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--c-black)] leading-tight tracking-tighter">
              Elite Results. <br /> <span className="text-[var(--c-accent)]">Direct from Founders.</span>
            </h2>
          </div>
          <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed max-w-sm">
            We build high-performance systems for leaders who demand operational excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`card-elite group flex flex-col justify-between ${
                i === 0 || i === 3 ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1'
              }`}
            >
              <div>
                <div className="flex items-center gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-[var(--c-accent)] text-[var(--c-accent)]" />
                  ))}
                </div>
                <div className="relative mb-8">
                  <Quote size={32} className="text-[var(--c-accent)]/20 absolute -top-4 -left-4" />
                  <p className={`text-[var(--c-black)] font-bold leading-relaxed tracking-tight relative z-10 ${
                    i === 0 || i === 3 ? 'text-2xl' : 'text-lg'
                  }`}>
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-[var(--c-border)]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--c-accent)]/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-[var(--c-black)] font-black text-sm">{t.name}</p>
                  <p className="text-[var(--c-muted)] text-[11px] font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
