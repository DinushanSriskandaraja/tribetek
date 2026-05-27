// "use client";

import SecondaryHero from "@/Components/SecondaryHero";
import ServicesSection from "@/Components/ServicesSection";
import ProblemsSection from "@/Components/ProblemSection";
import ProcessStepsSection from "@/Components/ProcessStepSections";
import WhyChooseSection from "@/Components/WhyChooseSection";
import MilestonesPage from "@/Components/milestones";
import CTASection from "@/Components/cta";
import BlogSection from "@/Components/BlogSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | Automation-Driven Web Systems by TribeTek",
  description:
    "Explore TribeTek’s services — automation-driven web systems, workflow optimization, custom web applications, and integrations.",

  openGraph: {
    title: "What We Do | Automation-Driven Web Systems",
    description:
      "We build structured web systems that automate workflows, reduce manual work, and support scalable business growth.",
    url: "https://tribetek.info/services",
    siteName: "TribeTek",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "What We Do | Automation-Driven Web Systems",
    description:
      "We build structured web systems that automate workflows, reduce manual work, and support scalable business growth.",
  },

  alternates: {
    canonical: "https://tribetek.info/services",
  },
};
export default function ServicePage() {
  return (
    <main className="bg-white min-h-screen w-full text-[var(--c-text)] overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 space-y-32">
        <SecondaryHero
          title="Automation-Driven Web"
          highlight="Systems That Scale."
          subtitle="We design and build structured web systems that automate workflows, connect tools, and give you better control over daily operations."
        />

        {/* Core Services */}
        <section className="w-full">
          <ServicesSection />
        </section>

        {/* Problems We Solve */}
        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <ProblemsSection />
        </section>

        {/* How We Deliver */}
        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <ProcessStepsSection />
        </section>

        {/* Why Choose TribeTek */}
        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <WhyChooseSection />
        </section>

        {/* Proof */}
        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <MilestonesPage />
        </section>
      </div>
    </main>
  );
}
