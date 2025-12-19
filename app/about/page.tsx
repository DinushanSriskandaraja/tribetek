"use client";

import SecondaryHero from "@/Components/SecondaryHero";
import OurStoryCard from "@/Components/OurStoryCard";
import GoalCard from "@/Components/GoalCard";
import MilestonesPage from "@/Components/milestones";
import ProcessStepsSection from "@/Components/ProcessStepSections";
import ProblemsSection from "@/Components/ProblemSection";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-28">
        <SecondaryHero
          title="Building Automation-Driven Systems"
          highlight="That Simplify Work"
          subtitle="Automation, Web Development & Smart Systems for Modern Businesses"
        />
        {/* --- Our Story Section --- */}
        <OurStoryCard
          title="Why TribeTek Exists"
          description={`Most growing businesses don’t struggle because of a lack of effort — they struggle because their operations are held together by manual work, disconnected tools, and inefficient workflows.

We saw teams spending hours on tasks that should take minutes. Data entered multiple times. Systems that don’t talk to each other. Websites that look good but don’t actually support daily operations.

TribeTek was created to fix that gap.

We exist to help businesses move from manual processes to structured, automation-driven web systems — systems that reduce workload, improve visibility, and scale with the business.

Instead of building one-off websites or tools, we focus on how your business actually runs, then design and develop systems that support it.`}
        />
        <GoalCard />
        <section className="w-full">
          <ProblemsSection />
        </section>
        <section className="w-full">
          <ProcessStepsSection />
        </section>{" "}
        <section className="w-full">
          <MilestonesPage />
        </section>
      </div>
    </div>
  );
}
