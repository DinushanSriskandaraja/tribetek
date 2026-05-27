"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Clock } from "lucide-react";
import { useLeadGen } from "../hooks/useLeadGen";

export default function LeadGenCalculator() {
  const { draftEmail, setDraftEmail, submitLead } = useLeadGen();
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(25);
  const [yearlyCost, setYearlyCost] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setYearlyCost(hours * rate * 52);
  }, [hours, rate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      submitLead(draftEmail);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="badge-elite">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-black)] leading-tight tracking-tighter">
            The Hidden Cost of <br /> <span className="text-[var(--c-accent)]">Manual Work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Calculator */}
          <div className="card-elite card-elite-lg">
            <h3 className="text-2xl font-bold text-[var(--c-black)] mb-10 flex items-center gap-3 tracking-tight">
              <Clock className="text-[var(--c-accent)]" />
              Impact Assessment
            </h3>

            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-sm font-bold text-[var(--c-black)] uppercase tracking-widest">Manual Hours / Week</label>
                <span className="text-3xl font-black text-[var(--c-accent)]">{hours}h</span>
              </div>
              <input 
                type="range" min="5" max="100" step="5" value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-1.5 bg-[var(--c-border)] rounded-full appearance-none cursor-pointer accent-[var(--c-accent)]"
              />
            </div>

            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-sm font-bold text-[var(--c-black)] uppercase tracking-widest">Hourly Value</label>
                <span className="text-3xl font-black text-[var(--c-accent)]">${rate}</span>
              </div>
              <input 
                type="range" min="15" max="150" step="5" value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1.5 bg-[var(--c-border)] rounded-full appearance-none cursor-pointer accent-[var(--c-accent)]"
              />
            </div>

            <div className="p-8 bg-[var(--c-black)] rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-2">Estimated Yearly Loss</p>
                <p className="text-4xl font-black text-white tracking-tighter">${yearlyCost.toLocaleString()}</p>
              </div>
              <TrendingUp size={40} className="text-[var(--c-accent)]" />
            </div>
          </div>

          {/* Capture */}
          <div className="flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-[var(--c-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} className="text-[var(--c-accent)]" />
                </div>
                <h3 className="text-3xl font-black text-[var(--c-black)] mb-4">Roadmap Requested.</h3>
                <p className="text-[var(--c-muted)] text-lg font-medium">Check your email for your custom ROI and automation strategy.</p>
              </div>
            ) : (
              <>
                <h3 className="text-3xl md:text-4xl font-black text-[var(--c-black)] mb-6 leading-tight tracking-tight">
                  Stop the bleed. <br /> Get your custom roadmap.
                </h3>
                <p className="text-[var(--c-muted)] text-lg font-medium mb-10 leading-relaxed">
                  Enter your email to receive a detailed analysis of where you can win back those <span className="text-[var(--c-black)] font-bold">{hours} hours a week.</span>
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email" required placeholder="Your work email..."
                    value={draftEmail}
                    onChange={(e) => setDraftEmail(e.target.value)}
                    className="input-elite"
                  />
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-lg w-full">
                    {isSubmitting ? "Generating..." : "Get My Free Roadmap"}
                    <ArrowRight size={20} />
                  </button>
                </form>
                <div className="mt-8 space-y-3">
                  {["100% Free & Customized", "No Commitment Required", "Delivered within 24 Hours"].map(t => (
                    <div key={t} className="flex items-center gap-3 text-sm font-bold text-[var(--c-muted)] uppercase tracking-wider">
                      <CheckCircle2 size={16} className="text-[var(--c-accent)]" />
                      {t}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
