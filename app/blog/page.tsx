import Link from "next/link";
import { getAllPostSlugs, getPostData } from "../../lib/post";
import SecondaryHero from "@/Components/SecondaryHero";
import BlogCard from "@/Components/BlogCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles | Automation, Systems & Web | TribeTek",
  description:
    "Read insights from TribeTek on automation, workflow optimization, and building scalable web systems for modern businesses.",

  openGraph: {
    title: "Insights on Automation & Web Systems | TribeTek",
    description:
      "Practical thoughts and guides on automation, business systems, and smarter web solutions.",
    url: "https://tribetek.info/blog",
    siteName: "TribeTek",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Insights on Automation & Web Systems | TribeTek",
    description:
      "Practical thoughts and guides on automation, business systems, and smarter web solutions.",
  },

  alternates: {
    canonical: "https://tribetek.info/blog",
  },
};

export default async function BlogsListPage() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));

  return (
    <main className="bg-white min-h-screen w-full text-[var(--c-text)] overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24">
        <SecondaryHero
          title="Insights &"
          highlight="Operational Innovation."
          subtitle="Practical thoughts and strategies on building automation-driven systems for modern businesses."
        />

        {/* --- Blog List --- */}
        <section className="mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                slug={post.slug}
                date={post.date}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
