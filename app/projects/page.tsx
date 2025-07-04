'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Leverage AI to make smarter decisions.',
      image: 'https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=AI+Analytics',
    },
    {
      id: 2,
      title: 'Seamless Integrations',
      description: 'Integrate tools effortlessly.',
      image: 'https://via.placeholder.com/600x400/1E90FF/FFFFFF?text=Integrations',
    },
    {
      id: 3,
      title: 'Cloud Scalability',
      description: 'Grow with robust cloud solutions.',
      image: 'https://via.placeholder.com/600x400/32CD32/FFFFFF?text=Cloud+Scalability',
    },
  ];

  return (
    <>
      {/* Landing Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div className="max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6">
            Empower Your Business with <span className="text-orange-500">Innovation</span>
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Discover our cutting-edge solutions designed to transform your workflows, optimize productivity, and scale your operations effortlessly.
          </p>
          <motion.a
            href="#products"
            className="px-6 py-3 bg-orange-500 text-[#FFFFFF] rounded-full font-semibold shadow-lg hover:bg-orange-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Solutions
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Product Showcase Section */}
      <section id="products" className="min-h-screen bg-[#FFFFFF] py-20">
        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Explore Our Cutting-Edge Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative bg-[#FFFFFF] backdrop-blur-lg border border-gray-300 shadow-lg rounded-xl overflow-hidden p-6 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className="text-center">
                  <motion.h3
                    className="text-2xl font-bold text-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  >
                    {product.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-gray-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.4 }}
                    viewport={{ once: true }}
                  >
                    {product.description}
                  </motion.p>
                  <motion.div
                    className="flex items-center justify-center text-orange-500 font-semibold cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ProductShowcase;
