import Image from "next/image";

export default function BlogSection() {
  const blogs = [
    {
      title: "5 Ways to Automate Your Business Workflow",
      tagline: "From spreadsheets to smart systems.",
      image: "/blog1.jpg",
      href: "/blog/automate-business-workflow",
    },
    {
      title: "Why Branding Is More Than Just a Logo",
      tagline: "Build trust and stand out.",
      image: "/blog2.jpg",
      href: "/blog/branding-trust",
    },
    {
      title: "Top Tech Stacks for Scalable Applications",
      tagline: "Choose the right tools from day one.",
      image: "/blog3.jpg",
      href: "/blog/top-tech-stacks",
    },
    {
      title: "Social Media Strategies for B2B",
      tagline: "Reach and convert the right audience.",
      image: "/blog4.jpg",
      href: "/blog/social-media-strategies",
    },
  ];

  return (
    <section className="container mx-auto py-16 px-4 sm:px-6 md:px-16 bg-white rounded-4xl shadow-lg border border-gray-100">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-left text-gray-900">
          Insights & Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Row 1 Blog 1 (col-span-2) */}
          <a
            href={blogs[0].href}
            className="md:col-span-2 bg-[#f2f2f2] rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <Image
              src={blogs[0].image}
              alt={blogs[0].title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blogs[0].title}
              </h3>
              <p className="text-gray-600 text-sm">{blogs[0].tagline}</p>
            </div>
          </a>

          {/* Row 1 Blog 2 (right-side) */}
          <a
            href={blogs[1].href}
            className="bg-[#f2f2f2] rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
            <Image
              src={blogs[1].image}
              alt={blogs[1].title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blogs[1].title}
              </h3>
              <p className="text-gray-600 text-sm">{blogs[1].tagline}</p>
            </div>
          </a>

          {/* Row 2 Blog 3 and 4 */}
          {blogs.slice(2).map((blog, index) => (
            <a
              key={index}
              href={blog.href}
              className="bg-[#f2f2f2] rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <Image
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.tagline}</p>
              </div>
            </a>
          ))}

          {/* Read All */}
          <a
            href="/blogs"
            className="bg-[#f2f2f2] rounded-3xl shadow-md flex flex-col items-center justify-center text-center p-6 hover:shadow-xl transition-all duration-300">
            <Image
              src="/read-more.svg"
              alt="View more"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Explore More Blogs
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay ahead with fresh insights & tips.
            </p>
            <span className="px-4 py-2 bg-[#ED4716] text-white rounded-full font-medium text-sm hover:bg-orange-600 transition">
              View All →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
