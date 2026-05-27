"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Building2, User, Mail, Phone, Target, Calendar, Wallet } from "lucide-react";

interface OnboardData {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  scope: string;
  timeline: string;
  budget: string;
  consent: boolean;
}

export default function OnboardingForm() {
  const [formData, setFormData] = useState<OnboardData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    scope: "",
    timeline: "1-3 Months",
    budget: "$5k - $10k",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the data processing terms.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-elite text-center py-32"
        >
          <div className="w-24 h-24 bg-[var(--c-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} className="text-[var(--c-accent)]" />
          </div>
          <h2 className="text-5xl font-black text-[var(--c-black)] mb-6 tracking-tighter">Brief Received.</h2>
          <p className="text-[var(--c-muted)] text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Our strategic team is now auditing your operational landscape. We will initialize communication within 24 business hours.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="card-elite card-elite-lg !p-0 overflow-hidden"
        >
          <div className="bg-[var(--c-black)] p-12 md:p-16 text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-px bg-[var(--c-accent)]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--c-accent)]">Onboarding Protocol v2.5</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                  Initialize <br /> <span className="text-[var(--c-accent)]">System Deployment.</span>
                </h2>
                <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl">
                  Precision engineering begins with a detailed brief. Provide the operational context required for your transition to automated web systems.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 rounded-3xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl">
                  <Target size={48} className="text-[var(--c-accent)]" />
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-16 space-y-20">
            
            {/* Section 1: Identity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-black text-[var(--c-black)] tracking-tight mb-4">Professional <br /> Identity</h3>
                <p className="text-[var(--c-muted)] font-medium text-sm leading-relaxed">
                  Identify the lead contact and the organization undergoing system initialization.
                </p>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Identify Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-muted)] group-focus-within:text-[var(--c-accent)] transition-colors" size={18} />
                    <input
                      type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="e.g. Alexander Pierce" className="input-elite pl-12 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Digital Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-muted)] group-focus-within:text-[var(--c-accent)] transition-colors" size={18} />
                    <input
                      type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="work@company.com" className="input-elite pl-12 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Organization</label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-muted)] group-focus-within:text-[var(--c-accent)] transition-colors" size={18} />
                    <input
                      type="text" name="company" required value={formData.company} onChange={handleChange}
                      placeholder="Enterprise Inc." className="input-elite pl-12 bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Strategic Role</label>
                  <input
                    type="text" name="role" required value={formData.role} onChange={handleChange}
                    placeholder="CEO / Operations Lead" className="input-elite bg-gray-50/50 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Scope */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-black text-[var(--c-black)] tracking-tight mb-4">Operational <br /> Scope</h3>
                <p className="text-[var(--c-muted)] font-medium text-sm leading-relaxed">
                  Define the friction points and target systems for automation deployment.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Technical Brief (Details)</label>
                  <textarea
                    name="scope" required value={formData.scope} onChange={handleChange}
                    placeholder="Describe your current manual workflows and the ideal automated state..."
                    rows={5} className="input-elite bg-gray-50/50 focus:bg-white pt-6"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Target Timeline</label>
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-muted)] group-focus-within:text-[var(--c-accent)] transition-colors" size={18} />
                      <select
                        name="timeline" value={formData.timeline} onChange={handleChange}
                        className="input-elite pl-12 appearance-none cursor-pointer bg-gray-50/50 focus:bg-white"
                      >
                        <option>Under 1 Month</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Long-term Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-1">Estimated Investment</label>
                    <div className="relative group">
                      <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--c-muted)] group-focus-within:text-[var(--c-accent)] transition-colors" size={18} />
                      <select
                        name="budget" value={formData.budget} onChange={handleChange}
                        className="input-elite pl-12 appearance-none cursor-pointer bg-gray-50/50 focus:bg-white"
                      >
                        <option>Under $5k</option>
                        <option>$5k - $10k</option>
                        <option>$10k - $25k</option>
                        <option>$25k+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer: Submission */}
            <div className="pt-12 border-t border-[var(--c-border)] flex flex-col md:flex-row md:items-center justify-between gap-12">
              <label className="flex items-center gap-4 cursor-pointer group max-w-md">
                <div className="relative">
                  <input
                    type="checkbox" name="consent" checked={formData.consent} onChange={handleChange}
                    className="w-6 h-6 rounded border-[var(--c-border)] accent-[var(--c-black)] cursor-pointer"
                  />
                </div>
                <span className="text-[11px] font-bold text-[var(--c-muted)] uppercase tracking-widest group-hover:text-[var(--c-black)] transition-colors leading-relaxed">
                  I authorize TribeTek to audit my operational brief and contact me for system initialization.
                </span>
              </label>

              <button
                type="submit" disabled={loading}
                className="btn btn-primary btn-lg min-w-[320px] !py-6"
              >
                {loading ? "Processing Transmission..." : "Deploy Technical Brief"}
                {!loading && <Send size={20} />}
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}

