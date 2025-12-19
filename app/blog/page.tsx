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
    <main className="relative min-h-screen  text-white overflow-hidden">
      {/* --- Gradient Glows in Corners --- */}
      {/* <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-gradient-to-br from-[#ED4716]/40 via-[#FF6B2C]/20 to-transparent blur-[220px] rounded-full -z-10" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-[#FF6B2C]/30 via-[#ED4716]/15 to-transparent blur-[220px] rounded-full -z-10" /> */}
      <SecondaryHero
        title="Insights & Innovation"
        subtitle="Explore our thoughts, strategies, and stories shaping the future of digital innovation."
      />

      {/* <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-[#ED4716] via-[#FF6B2C] to-[#ED4716] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,107,44,0.4)]">
            Insights & Innovation
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our thoughts, strategies, and stories shaping the future of
            digital innovation.
          </p>
        </div> */}
      {/* </section> */}

      {/* --- Blog List --- */}
      <section className="relative container mx-auto px-6 sm:px-12 lg:px-20 pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
