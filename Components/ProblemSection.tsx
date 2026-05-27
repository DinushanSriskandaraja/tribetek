"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, RotateCw, Database, Eye } from "lucide-react";

const problems = [
  { Icon: Cpu, title: "Manual Data Entry", description: "Re-entering the same information across systems wastes hours. We replace repetitive entry with seamless automated flows.", num: "01" },
  { Icon: RotateCw, title: "Disconnected Tools", description: "When tools don't talk to each other, teams lose time switching systems. We integrate your stack into one unified workflow.", num: "02" },
  { Icon: ShieldCheck, title: "Operational Bottlenecks", description: "Approval delays and individual dependencies stall growth. We design systems that keep operations moving 24/7.", num: "03" },
  { Icon: Database, title: "Repetitive Admin Work", description: "Routine tasks drain core productivity. We automate recurring admin so your team can focus on high-leverage growth.", num: "04" },
  { Icon: Eye, title: "Zero Operational Visibility", description: "Without data, decisions are guesses. We build dashboards that provide real-time control over your entire operation.", num: "05" },
];

export default function ProblemsSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <span className="badge-elite">What We Solve</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] leading-[1.1] tracking-tight mb-8">
              Eliminate the Friction <br /> Scaling Your Business.
            </h2>
            <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed">
              Every manual task is a hidden cost. We identify and eliminate operational friction systematically so you can scale without the linear headcount growth.
            </p>
          </div>

          {/* Problems List */}
          <div className="lg:w-2/3 space-y-6">
            {problems.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-elite group flex flex-col md:flex-row items-start gap-8"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-[var(--c-black)] text-white rounded-xl flex items-center justify-center group-hover:bg-[var(--c-accent)] transition-colors duration-300">
                  <p.Icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-[var(--c-black)] tracking-tight">{p.title}</h3>
                    <span className="text-[10px] font-black text-[var(--c-border)] group-hover:text-[var(--c-accent)] transition-colors duration-300">#{p.num}</span>
                  </div>
                  <p className="text-[var(--c-muted)] font-medium leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
