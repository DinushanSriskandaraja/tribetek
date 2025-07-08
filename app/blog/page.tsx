import Link from "next/link";
import { getAllPostSlugs, getPostData } from "@/lib/post";

export default async function BlogsListPage() {
  const slugs = getAllPostSlugs(); // [{ slug: string }, ...]

  const posts = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));

  return (
    <section className="container bg-white px-6 sm:p-16 rounded-4xl mx-auto mt-20 mb-20  min-h-screen ">
      <h1 className="text-4xl font-bold mb-12">All Blogs</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 bg-[#f2f2f2] rounded-3xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
