'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, Cloud, Layers, Zap } from 'lucide-react';
import SecondaryHero from "@/Components/SecondaryHero";

const products = [
  {
    id: 1,
    title: 'AI-Powered Analytics',
    description: 'Leverage machine learning to uncover hidden patterns and make data-driven decisions that propel your business forward.',
    icon: BarChart3,
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Seamless Integrations',
    description: 'Connect your favorite tools effortlessly and build a unified operational ecosystem.',
    icon: Layers,
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Cloud Scalability',
    description: 'Robust infrastructure that grows infinitely with your demand without breaking a sweat.',
    icon: Cloud,
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Automated Workflows',
    description: 'Eliminate manual data entry and let intelligent triggers handle your repetitive daily tasks.',
    icon: Zap,
    colSpan: 'md:col-span-3 md:row-span-1',
  },
];

export default function ProductShowcase() {
  return (
    <main className="bg-white min-h-screen w-full text-[var(--c-text)] overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-24">

        <SecondaryHero
          title="Elite Systems &"
          highlight="Operational Assets."
          subtitle="Discover our cutting-edge solutions designed to transform your workflows, optimize productivity, and scale your operations effortlessly."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)] md:auto-rows-[250px]">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`card-elite group relative overflow-hidden ${product.colSpan} flex flex-col`}
            >
              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-auto relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--c-black)] text-white flex items-center justify-center group-hover:bg-[var(--c-accent)] transition-colors duration-500 shadow-sm">
                  <product.icon size={24} strokeWidth={1.5} />
                </div>
                <div className="w-10 h-10 rounded-full border border-[var(--c-border)] bg-white flex items-center justify-center text-[var(--c-muted)] group-hover:bg-[var(--c-accent)] group-hover:text-white group-hover:border-[var(--c-accent)] transition-all duration-300 shadow-sm cursor-pointer">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom Row: Text */}
              <div className="relative z-10 mt-12 md:mt-8">
                <div className="mb-4">
                  <span className="badge-elite">System.{product.id.toString().padStart(2, '0')}</span>
                </div>
                <h3 className="text-2xl font-black text-[var(--c-black)] mb-3 tracking-tight group-hover:text-[var(--c-accent)] transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-[var(--c-muted)] font-medium leading-relaxed max-w-md">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
