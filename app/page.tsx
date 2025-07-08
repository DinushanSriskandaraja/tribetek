"use client";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BlogSection from "../components/BlogSection";
import TestimonialSection from "../components/TestimonialSection";
import BrandsSection from "../components/BrandSection";
import OurProducts from "../components/OurProducts";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-[#f2f2f2] gap-12 px-4 md:px-20 py-16">
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <OurProducts />

      {/* Uncomment if you want to include the Brands section */}
      {/* <BrandsSection /> */}
      <BrandsSection />

      <BlogSection />
    </main>
  );
}
