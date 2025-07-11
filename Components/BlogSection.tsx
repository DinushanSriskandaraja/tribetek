import Image from "next/image";
import BizAutomation from "../assets/BizAutomation.jpg";
import Branding from "../assets/Brandings.jpg";
import SocialMedia from "../assets/SocialMedia.jpg";
import TechStack from "../assets/TechStack.jpg";

export default function BlogSection() {
  const blogs = [
    {
      title: "How Business Automation Can Save You Time and Boost Profits",
      tagline:
        "Discover how business automation saves time, cuts costs, and boosts profits by streamlining your workflows with smart technology.",
      image: BizAutomation,
      href: "/blog/automate-business-workflow",
    },
    {
      title: "Why Branding Is More Than Just a Logo",
      tagline: "Build trust and stand out.",
      image: Branding,
      href: "/blog/branding-trust",
    },
    {
      title: "Top Tech Stacks for Scalable Applications",
      tagline: "Choose the right tools from day one.",
      image: TechStack,
      href: "/blog/top-tech-stacks",
    },
    {
      title: "Social Media Strategies for B2B",
      tagline: "Reach and convert the right audience.",
      image: SocialMedia,
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
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.href}
              className={`relative rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}>
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
                width={800}
                height={256}
                placeholder="blur"
              />
              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-6">
                <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm">{blog.tagline}</p>
              </div>
            </a>
          ))}

          {/* Read All */}
          <a
            href="/blogs"
            className="bg-[#f2f2f2] rounded-3xl shadow-md flex flex-col items-center justify-center text-center p-6 hover:shadow-xl transition-all duration-300">
            {/* <Image
              src=
              alt="View more"
              className="w-16 h-16 mb-4"
            /> */}
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
