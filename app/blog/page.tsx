import Link from "next/link";
import { getAllPostSlugs, getPostData } from "../../lib/post";

export default async function BlogsListPage() {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));

  return (
    <main className="relative min-h-screen  text-white overflow-hidden">
      {/* --- Gradient Glows in Corners --- */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-gradient-to-br from-[#ED4716]/40 via-[#FF6B2C]/20 to-transparent blur-[220px] rounded-full -z-10" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-tr from-[#FF6B2C]/30 via-[#ED4716]/15 to-transparent blur-[220px] rounded-full -z-10" />

      {/* --- Hero Section --- */}
      <section className="relative flex flex-col justify-center items-center h-[60vh] text-center">
        {/* Grid background overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-[#ED4716] via-[#FF6B2C] to-[#ED4716] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,107,44,0.4)]">
            Insights & Innovation
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our thoughts, strategies, and stories shaping the future of digital innovation.
          </p>
        </div>
      </section>

      {/* --- Blog List --- */}
      <section className="relative container mx-auto px-6 sm:px-12 lg:px-20 pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative block bg-gradient-to-b from-[#121212] to-[#0d0d0d] border border-[#1e1e1e] rounded-3xl overflow-hidden hover:border-[#ED4716]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,107,44,0.25)]"
            >
              {/* Thumbnail placeholder (add real cover if needed) */}
              

              {/* Content */}
              <div className="p-8 flex flex-col justify-between ">
                <div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-[#ED4716] transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                  <span className="text-gray-500">{post.date || "Coming soon"}</span>
                  <span className="font-semibold text-[#ED4716] group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
