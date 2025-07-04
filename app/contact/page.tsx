'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] text-black flex flex-col items-center py-12 px-6 md:px-16">
      <motion.h1 
        className="text-4xl mt-20 font-extrabold mb-8 text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-6">
          {[{ icon: FaEnvelope, text: 'contact@tribetek.com' }, { icon: FaPhoneAlt, text: '+94 77 123 4567' }, { icon: FaMapMarkerAlt, text: 'Colombo, Sri Lanka' }].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-orange-500 text-2xl" />
              <span className="text-lg">{item.text}</span>
            </motion.div>
          ))}
        </div>
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-4 bg-gray-800 p-6 rounded-2xl shadow-xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full p-3 bg-[#f2f2f2] text-black rounded-md focus:ring-2 focus:ring-orange-500" />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="w-full p-3 bg-[#f2f2f2] text-black rounded-md focus:ring-2 focus:ring-orange-500" />
          <textarea name="message" placeholder="Your Message" required rows={4} onChange={handleChange} className="w-full p-3 bg-[#f2f2f2] text-black rounded-md focus:ring-2 focus:ring-orange-500" />
          <motion.button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-[#F2F2F2] p-3 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
