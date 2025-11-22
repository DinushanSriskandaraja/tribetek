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
import Image from "next/image";
import WorldMap from "../assets/WorldMap.svg";
import OurProducts from "@/Components/OurProducts";
import WhyChooseSection from "@/Components/WhyChooseSection";
import TaglineSection from "@/Components/TaglineSection";
export default function HomePage() {
  return (
    <main className="flex flex-col  w-full  text-white overflow-x-hidden transition-all duration-500">
      {/* Hero Section - Full width */}
      <section className="w-full">
        <HeroSection />
      </section>
      <section className="w-full">
        <WhyChooseSection />
      </section>
      {/* Services Section */}
      <section className="w-full">
        <ServicesSection />
      </section>
      {/* Milestones Section */}
      <section className="w-full">
        <TaglineSection />
      </section>
      {/* Milestones Section */}
      <section className="w-full">
        <MilestonesPage />
      </section>
      {/* <section className="w-full">
        <OurProducts />
      </section> */}
      {/* Blog Section */}
      <section className="w-full">
        <BlogSection />
      </section>
      <section className="w-full">
        <Image
          src={WorldMap}
          alt="About TribeTek"
          width={1200}
          height={800}
          className="object-cover mx-auto my-20"
        />{" "}
      </section>

      {/* Divider for CTA (optional) */}
      {/* <div className="w-full border-t border-[#2a2a2a] opacity-70" /> */}
      {/* <CTASection /> */}
    </main>
  );
}
