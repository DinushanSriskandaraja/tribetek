"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import BizAutomation from "../assets/BizAutomation.jpg";
import Branding from "../assets/Brandings.jpg";
import SocialMedia from "../assets/SocialMedia.jpg";
import TechStack from "../assets/TechStack.jpg";

export default function BlogSection() {
  const blogs = [
    {
      title: "How Business Automation Can Save You Time and Boost Profits",
      tagline:
        "Streamline your workflows and scale effortlessly with the power of smart automation.",
      image: BizAutomation,
      href: "/blog/automate-business-workflow",
    },
    {
      title: "Why Branding Is More Than Just a Logo",
      tagline: "A powerful brand tells your story even before you do.",
      image: Branding,
      href: "/blog/branding-trust",
    },
    {
      title: "Top Tech Stacks for Scalable Applications",
      tagline: "Choosing the right stack determines your future velocity.",
      image: TechStack,
      href: "/blog/top-tech-stacks",
    },
    {
      title: "Social Media Strategies for B2B",
      tagline: "Make your brand visible where your customers actually are.",
      image: SocialMedia,
      href: "/blog/social-media-strategies",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 ">
      

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white mb-3">
            Latest <span className="text-[#ED4716]">Insights</span>
          </h2>
          <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto">
            Explore our stories, ideas, and lessons that inspire digital transformation.
          </p>
        </motion.div>

        {/* Blog Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto gap-10 scrollbar-hide snap-x snap-mandatory pb-6 px-2"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative flex-shrink-0 snap-center w-[320px] sm:w-[400px] rounded-3xl overflow-hidden bg-[#141414]/80 border border-[#1f1f1f] hover:border-[#ED4716]/50 transition-all duration-500 backdrop-blur-lg shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(237,71,22,0.2)]"
            >
              <div className="relative h-[240px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <h3 className="text-xl font-bold text-white mb-3 hover:text-[#ED4716] transition">
                  {blog.title}
                </h3>
                <p className="text-[#b3b3b3] text-sm mb-4">{blog.tagline}</p>
                <Link
                  href={blog.href}
                  className="text-[#ED4716] font-medium text-sm hover:underline mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/blogs"
            className="inline-block px-8 py-3 rounded-full border border-[#ED4716]/60 text-white hover:bg-[#ED4716] hover:shadow-[0_0_30px_rgba(237,71,22,0.4)] transition-all duration-300 font-semibold"
          >
            View All Articles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
