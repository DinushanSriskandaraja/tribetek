import Link from "next/link";
import { getAllPostSlugs, getPostData } from "../../lib/post";

export default async function BlogsListPage() {
  const slugs = getAllPostSlugs(); // [{ slug: string }, ...]
  const posts = await Promise.all(slugs.map(({ slug }) => getPostData(slug)));

  return (
    <main className="container mx-auto py-10 px-6 sm:p-16 space-y-20 ">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] rounded-4xl flex items-center justify-center text-center text-black" // <-- mt-20 pushes below nav
        style={{
          backgroundImage: `url('/blog-hero.jpg')`, // Replace with your own hero image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white rounded-4xl mt-20"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold mb-4">Our Blogs</h1>
          <p className="text-lg text-black">
            Insights, stories, and ideas to inspire your next big step.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="">
        {/* <h2 className="text-4xl font-bold mb-12 text-gray-900">Latest Posts</h2> */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Thumbnail */}
              {/* <div className="h-56 bg-gray-200">
                <img
                  src={post.coverImage || "/default-blog.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div> */}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#ED4716] transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-3 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date || "Coming soon"}</span>
                  <span className="font-medium text-[#ED4716] group-hover:underline">
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
