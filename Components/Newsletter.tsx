"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <section className="relative py-24 overflow-hidden">
      {/* Glows */}
      {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FF6B2C]/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ED4716]/10 rounded-full blur-[180px]" /> */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {submitted ? (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#4ade80] font-medium text-center text-xl">
            ✅ Thank you for reaching out! We’ll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#121212]/30 border border-[#1f1f1f] backdrop-blur-2xl rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.3)] p-8 md:p-12 flex flex-col gap-6">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                Let’s <span className="text-[#ED4716]">Connect</span>
              </h2>
              <p className="text-[#b3b3b3] text-lg">
                Fill out your details and let us know your purpose. We will
                respond promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
            />

            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-[#ED4716]">
              <option>General Inquiry</option>
              <option>Software Development</option>
              <option>AI Solutions</option>
              <option>Mobile App Development</option>
              <option>Digital Transformation</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your project or requirements..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
            />

            <label className="flex items-start gap-3 text-[#b3b3b3] text-sm">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 accent-[#ED4716]"
              />
              <span>
                I agree to share my details with{" "}
                <span className="text-[#FF6B2C] font-medium">TribeTek</span> for
                communication and service purposes.
              </span>
            </label>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-4 w-full md:w-auto px-10 py-3 bg-gradient-to-r from-[#ED4716] to-[#FF6B2C] rounded-xl text-white font-semibold text-lg shadow-[0_0_25px_rgba(237,71,22,0.4)] hover:shadow-[0_0_35px_rgba(237,71,22,0.6)] transition-all">
              Send Message →
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
