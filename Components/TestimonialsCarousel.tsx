"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "TribeTek transformed our order management. 3 hours of manual data entry now runs automatically. Our team focuses on growth instead of admin work.", name: "Sarah Mitchell", role: "Ops Manager", industry: "E-Commerce" },
  { quote: "We needed systems that actually talked to each other. TribeTek connected our CRM, invoicing, and scheduling into one seamless workflow.", name: "James Perera", role: "Founder & CEO", industry: "SaaS" },
  { quote: "Their automation-first approach saved us from building unnecessary features. They identified exactly what needed automating and delivered a scalable system.", name: "Amara De Silva", role: "Managing Director", industry: "Logistics" },
  { quote: "We went from juggling spreadsheets to a fully automated reporting dashboard. The ROI was visible within the first month.", name: "David Chen", role: "Head of Ops", industry: "Professional Services" },
  { quote: "They didn't just build a website — they built an operational system. Bookings, notifications, and follow-ups happen without us lifting a finger.", name: "Priya Rajapakse", role: "Business Owner", industry: "Health & Wellness" },
  { quote: "I was sceptical about automation for a small business, but TribeTek made it accessible. We've saved over 20 hours a week on repetitive tasks.", name: "Tom Richards", role: "Co-Founder", industry: "Service Business" },
];

const allTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsCarousel() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="badge-elite">Client Success</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[var(--c-black)] leading-tight tracking-tighter">
              Trusted by Teams <br /> <span className="text-[var(--c-accent)]">Scaling Fast.</span>
            </h2>
          </div>
          <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed max-w-sm">
            Real results from businesses that replaced manual workflows with elite automated systems.
          </p>
        </div>
      </div>

      {/* Track 1 */}
      <div className="relative flex overflow-hidden mb-8">
        <div className="marquee-track">
          {allTestimonials.slice(0, 12).map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Track 2 */}
      <div className="relative flex overflow-hidden">
        <div className="marquee-track-reverse">
          {allTestimonials.slice(0, 12).map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, role, industry }: { quote: string, name: string, role: string, industry: string }) {
  return (
    <div className="card-elite w-[400px] flex-shrink-0 mx-4 flex flex-col justify-between">
      <div className="flex items-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={14} className="fill-[var(--c-accent)] text-[var(--c-accent)]" />
        ))}
      </div>

      <div className="mb-8 relative">
        <Quote size={24} className="text-[var(--c-accent)]/20 absolute -top-4 -left-4" />
        <p className="text-[var(--c-black)] text-lg font-bold leading-relaxed tracking-tight relative z-10">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-[var(--c-border)]">
        <div>
          <p className="text-[var(--c-black)] font-bold text-sm">{name}</p>
          <p className="text-[var(--c-muted)] text-[11px] font-bold uppercase tracking-widest">{role}</p>
        </div>
        <span className="text-[10px] font-black text-[var(--c-muted)] uppercase tracking-widest px-3 py-1 bg-[var(--c-black)]/5 rounded-full">
          {industry}
        </span>
      </div>
    </div>
  );
}
