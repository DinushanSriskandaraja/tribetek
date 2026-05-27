"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services, ServiceSlug, ServiceData, iconMap } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

const serviceCards = (
  Object.entries(services) as [ServiceSlug, ServiceData][]
)
  .filter(([slug]) => slug !== "digital-marketing")
  .map(([slug, service]) => ({
    title: service.title,
    description: service.description,
    href: `/services/${slug}`,
    icon: iconMap[slug],
  }));

export default function ServicesSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="badge-elite">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] leading-[1.1] tracking-tight">
              Systems Built for <br /> <span className="text-[var(--c-accent)]">Unstoppable Scale.</span>
            </h2>
          </div>
          <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed max-w-sm">
            We don't just build apps. We build automation-driven engines that run your business on autopilot.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={s.href} className="card-elite group h-full flex flex-col">
                <div className="w-12 h-12 bg-[var(--c-black)] text-white rounded-xl flex items-center justify-center group-hover:bg-[var(--c-accent)] transition-colors duration-300 mb-6">
                  {s.icon && <s.icon size={24} />}
                </div>
                <h3 className="text-xl font-bold text-[var(--c-black)] tracking-tight mb-3 group-hover:text-[var(--c-accent)] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-[var(--c-muted)] font-medium leading-relaxed mb-8 flex-1">
                  {s.description}
                </p>
                <div className="flex items-center gap-2 text-[var(--c-black)] font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                  Explore Service <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <Link href="/services" className="btn btn-primary btn-lg">
            View All Specialized Services
          </Link>
        </div>

      </div>
    </section>
  );
}
