"use client";

import { useState } from "react";

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

  // Type-safe handleChange for inputs, select, textarea, checkbox
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
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
    <section className="mt-20 bg-[#f2f2f2] py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        {submitted ? (
          <p className="text-green-600 font-medium text-center text-lg">
            Thank you! We will contact you shortly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 flex flex-col gap-6"
          >
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Contact Us & Share Your Requirements
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out your details and let us know your purpose. We will respond promptly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#f2f2f2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#f2f2f2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 bg-[#f2f2f2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
            />

            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 bg-[#f2f2f2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Software Development">Software Development</option>
              <option value="AI Solutions">AI Solutions</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Digital Transformation">Digital Transformation</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message / Requirements"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 bg-[#f2f2f2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED4716]"
            />

            <label className="flex items-start gap-3 text-gray-700 text-sm">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 w-4 h-4 accent-[#ED4716]"
              />
              <span>
                I agree to give the above personal data to TRIBETEK. TRIBETEK may use the
                data to evaluate, store for further processing, and use anonymized data
                to train our models to improve our processes.
              </span>
            </label>

            <button
              type="submit"
              className="bg-[#ED4716] hover:bg-[#d63f0f] text-white px-6 py-3 rounded-xl font-semibold text-lg transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
