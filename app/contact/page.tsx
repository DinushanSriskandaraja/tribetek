import Newsletter from "@/Components/Newsletter";
import SecondaryHero from "@/Components/SecondaryHero";

export default function ContactSection() {
  return (
    <>
      {/* Contact / Newsletter Section */}
      <SecondaryHero
        title="Let’s Understand "
        highlight="Your Workflow"
        subtitle="Share a few details about your current process, and we’ll help you identify where automation can reduce manual work and improve efficiency."
      />
      <Newsletter />
    </>
  );
}
