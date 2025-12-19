// "use client";

import { motion } from "framer-motion";
import HeroSection from "@/Components/HeroSection";
import ServicesSection from "@/Components/ServicesSection";
import BlogSection from "@/Components/BlogSection";
// import TestimonialSection from "@/Components/TestimonialSection";
import MilestonesPage from "@/Components/milestones";
// import BrandsSection from "@/Components/BrandSection";
// import OurProducts from "@/Components/OurProducts";
// import CTASection from "@/Components/cta";
import Image from "next/image";
import WorldMap from "@/assets/WorldMap.svg";
import OurProducts from "@/Components/OurProducts";
import WhyChooseSection from "@/Components/WhyChooseSection";
import TaglineSection from "@/Components/TaglineSection";
import CTASection from "@/Components/cta";
import ProblemsSection from "@/Components/ProblemSection";
import ProcessStepsSection from "@/Components/ProcessStepSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TribeTek | Automation-Driven Web Systems for Growing Businesses",
  description:
    "TribeTek helps startups and growing businesses replace manual work with automation-driven web systems that improve efficiency and control.",

  openGraph: {
    title: "Automation-Driven Web Systems | TribeTek",
    description:
      "We design structured web systems that automate workflows, connect tools, and simplify business operations.",
    url: "https://tribetek.info",
    siteName: "TribeTek",
    type: "website",
    images: [
      {
        url: "/TribeTek-Icon.png", // add this image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Automation-Driven Web Systems by TribeTek",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Automation-Driven Web Systems | TribeTek",
    description:
      "We design structured web systems that automate workflows, connect tools, and simplify business operations.",
    images: ["/TribeTek-Icon.png"],
  },

  alternates: {
    canonical: "https://tribetek.info",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col  w-full  text-white overflow-x-hidden transition-all duration-500">
      {/* Hero Section - Full width */}
      <section className="w-full">
        <HeroSection />
      </section>
      {/* Services Section */}
      <section className="w-full">
        <ServicesSection />
      </section>
      <section className="w-full">
        <WhyChooseSection />
      </section>
      <CTASection />
      {/* Milestones Section */}
      <section className="w-full">
        <ProblemsSection />
      </section>
      <section className="w-full">
        <MilestonesPage />
      </section>
      <section className="w-full">
        <ProcessStepsSection />
      </section>{" "}
      <section className="w-full">
        <TaglineSection />
      </section>
      {/* Milestones Section */}
      {/* <section className="w-full">
        <OurProducts />
      </section> */}
      {/* Blog Section */}
      <section className="w-full">
        <BlogSection />
      </section>
      {/* <section className="w-full">
        <Image
          src={WorldMap}
          alt="About TribeTek"
          width={1200}
          height={800}
          className="object-cover mx-auto my-20"
        />{" "}
      </section> */}
      {/* Divider for CTA (optional) */}
      {/* <div className="w-full border-t border-[#2a2a2a] opacity-70" /> */}
    </main>
  );
}
