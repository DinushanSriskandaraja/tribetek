"use client";
import HeroSection from "../Components/HeroSection";
import ServicesSection from "../Components/ServicesSection";
import BlogSection from "../Components/BlogSection";
import TestimonialSection from "../Components/TestimonialSection";
// import BrandsSection from "../Components/BrandSection";
// import OurProducts from "../Components/OurProducts";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-[#f2f2f2] gap-12 px-4 md:px-20 py-16">
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      {/* <OurProducts /> */}

      {/* Uncomment if you want to include the Brands section */}
      {/* <BrandsSection /> */}
      {/* <BrandsSection /> */}

      <BlogSection />
    </main>
  );
}
