"use client";

import { motion } from "framer-motion";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import BlogSection from "../Components/BlogSection";
// import TestimonialSection from "../Components/TestimonialSection";
import MilestonesPage from "../Components/milestones";
// import BrandsSection from "../Components/BrandSection";
// import OurProducts from "../Components/OurProducts";
// import CTASection from "../Components/cta";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full  text-white overflow-x-hidden transition-all duration-500">
      
      
      {/* Hero Section - Full width */}
      <section className="w-full">
        <HeroSection />
      </section>

      
      {/* Services Section */}
      <section className="w-full">
        <ServicesSection />
      </section>

      
      {/* Milestones Section */}
      <section className="w-full">
        <MilestonesPage />
      </section>

      
      {/* Blog Section */}
      <section className="w-full">
        <BlogSection />
      </section>

      {/* Divider for CTA (optional) */}
      {/* <div className="w-full border-t border-[#2a2a2a] opacity-70" /> */}
      {/* <CTASection /> */}
    </main>
  );
}
