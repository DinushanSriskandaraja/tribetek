"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  message: string;
  consent: boolean;
}

export default function ContactNewsletter() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    purpose: "General Inquiry",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("You must agree to provide your personal data.");
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Submission failed. Try again.");
        return;
      }

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        purpose: "General Inquiry",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-elite text-center py-20"
            >
              <div className="w-20 h-20 bg-[var(--c-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} className="text-[var(--c-accent)]" />
              </div>
              <h2 className="text-3xl font-black text-[var(--c-black)] mb-4">Transmission Successful.</h2>
              <p className="text-[var(--c-muted)] text-lg font-medium leading-relaxed">
                We've received your brief. An automation strategist will reach out within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="card-elite card-elite-lg"
            >
              <div className="mb-12">
                <div className="mb-6">
                  <span className="badge-elite">Direct Consultation</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[var(--c-black)] leading-[1.1] tracking-tighter">
                  Let’s Build Your <span className="text-[var(--c-accent)]">Elite System.</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-2">Identify Name</label>
                    <input
                      type="text" name="name" placeholder="Full Name"
                      value={formData.name} onChange={handleChange} required
                      className="input-elite"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-2">Contact Link (Phone)</label>
                    <input
                      type="tel" name="phone" placeholder="+00 000 000 000"
                      value={formData.phone} onChange={handleChange} required
                      className="input-elite"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-2">Digital Address (Email)</label>
                    <input
                      type="email" name="email" placeholder="work@company.com"
                      value={formData.email} onChange={handleChange} required
                      className="input-elite"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-2">Project Classification</label>
                    <select
                      name="purpose" value={formData.purpose} onChange={handleChange}
                      className="input-elite appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Software Development</option>
                      <option>AI Solutions</option>
                      <option>Mobile App Development</option>
                      <option>Digital Transformation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[var(--c-black)] uppercase tracking-[0.2em] ml-2">Operational Context (Message)</label>
                  <textarea
                    name="message" placeholder="Briefly describe your current friction points..."
                    value={formData.message} onChange={handleChange} rows={5}
                    className="input-elite"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-4">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox" name="consent" checked={formData.consent}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-[var(--c-border)] accent-[var(--c-accent)] transition-all"
                    />
                    <span className="text-[11px] font-bold text-[var(--c-muted)] uppercase tracking-widest group-hover:text-[var(--c-black)] transition-colors">
                      I agree to the processing of personal data.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg min-w-[240px]"
                  >
                    Deploy Inquiry <Send size={18} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
