import HeroSection from "@/Components/HeroSection";
import ServicesSection from "@/Components/ServicesSection";
import WhyChooseSection from "@/Components/WhyChooseSection";
import ProblemsSection from "@/Components/ProblemSection";
import ProcessStepsSection from "@/Components/ProcessStepSections";
import LeadGenCalculator from "@/Components/LeadGenCalculator";
import TestimonialsCarousel from "@/Components/TestimonialsCarousel";
import MilestonesPage from "@/Components/milestones";
import FAQSection from "@/Components/FAQSection";
import TaglineSection from "@/Components/TaglineSection";
import BlogSection from "@/Components/BlogSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TribeTek | Automation-Driven Web Systems for Growing Businesses",
  description:
    "TribeTek builds automation-driven web systems that eliminate repetitive tasks, connect your tools, and help startups and growing businesses operate at a higher level. From workflow automation to custom software — we design systems that run themselves.",

  openGraph: {
    title: "Automation-Driven Web Systems | TribeTek",
    description:
      "Replace manual work with intelligent web systems. TribeTek automates workflows, connects tools, and simplifies operations for growing businesses.",
    url: "https://tribetek.info",
    siteName: "TribeTek",
    type: "website",
    images: [
      {
        url: "/TribeTek-Icon.png",
        width: 1200,
        height: 630,
        alt: "TribeTek — Automation-Driven Web Systems for Growing Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Automation-Driven Web Systems | TribeTek",
    description:
      "Replace manual work with intelligent web systems. TribeTek automates workflows, connects tools, and simplifies operations for growing businesses.",
    images: ["/TribeTek-Icon.png"],
  },

  alternates: {
    canonical: "https://tribetek.info",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col w-full text-[var(--c-text)] overflow-x-hidden transition-all duration-500">
      {/* 1. Hero — Emotional hook + CTA */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* 2. Milestones — Immediate social proof */}
      <section className="w-full">
        <MilestonesPage />
      </section>

      {/* 3. Problems We Solve — Agitate pain points */}
      <section className="w-full">
        <ProblemsSection />
      </section>

      {/* 4. Services — Present the solution */}
      <section className="w-full">
        <ServicesSection />
      </section>

      {/* 5. Why Choose — Trust + differentiation */}
      <section className="w-full">
        <WhyChooseSection />
      </section>

      {/* 6. Process Steps — Show how easy it is */}
      <section className="w-full">
        <ProcessStepsSection />
      </section>

      {/* 7. Lead Generation — Interactive ROI Calculator for general visitors */}
      <section className="w-full">
        <LeadGenCalculator />
      </section>

      {/* 8. Testimonials — Deep social proof */}
      <section className="w-full">
        <TestimonialsCarousel />
      </section>

      {/* 8. FAQ — Address objections */}
      <section className="w-full">
        <FAQSection />
      </section>

      {/* 9. Blog — Content + SEO value */}
      <section className="w-full">
        <BlogSection />
      </section>

      {/* 10. Vision / Tagline — Aspirational close before footer */}
      <section className="w-full">
        <TaglineSection />
      </section>

      {/* CTA is rendered in layout.tsx — no duplicate */}
    </main>
  );
}
