// "use client";

import SecondaryHero from "@/Components/SecondaryHero";
import OurStoryCard from "@/Components/OurStoryCard";
import GoalCard from "@/Components/GoalCard";
import MilestonesPage from "@/Components/milestones";
import ProcessStepsSection from "@/Components/ProcessStepSections";
import ProblemsSection from "@/Components/ProblemSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About TribeTek | Why We Build Automation-First Systems",
  description:
    "Learn why TribeTek exists and how we help businesses move from manual processes to structured, automation-driven web systems.",

  openGraph: {
    title: "Why TribeTek Exists | Automation-First Thinking",
    description:
      "TribeTek was created to eliminate operational friction by building automation-driven web systems, not just websites.",
    url: "https://tribetek.info/about",
    siteName: "TribeTek",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Why TribeTek Exists | Automation-First Thinking",
    description:
      "TribeTek was created to eliminate operational friction by building automation-driven web systems, not just websites.",
  },

  alternates: {
    canonical: "https://tribetek.info/about",
  },
};
export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen w-full text-[var(--c-text)] overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:pxwhy-12 lg:px-20 py-24 space-y-32">
        <SecondaryHero
          title="Building Automation-Driven"
          highlight="Systems That Scale."
          subtitle="We eliminate operational friction by building smart, automation-first web systems for modern businesses."
        />

        {/* --- Our Story Section --- */}
        <section className="w-full">
          <OurStoryCard
            title="Why TribeTek Exists"
            description={`Most growing businesses don’t struggle because of a lack of effort — they struggle because their operations are held together by manual work, disconnected tools, and inefficient workflows.

We saw teams spending hours on tasks that should take minutes. Data entered multiple times. Systems that don’t talk to each other.

TribeTek was created to fix that gap. We exist to help businesses move from manual processes to structured, automation-driven web systems — systems that reduce workload, improve visibility, and scale with the business.`}
          />
        </section>

        <section className="max-w-3xl">
          <GoalCard />
        </section>

        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <ProblemsSection />
        </section>

        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <ProcessStepsSection />
        </section>

        <section className="w-full border-t border-[var(--c-border)] pt-32">
          <MilestonesPage />
        </section>
      </div>
    </main>
  );
}
