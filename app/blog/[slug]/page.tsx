import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostData } from "../../../lib/post";
import Head from "next/head";
// import { FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";
import "@/app/globals.css"; // 👈 Import markdown styles

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) return notFound();

  return (
    <>
      <Head>
        <title>{postData.title} | TribeTek</title>
        <meta name="description" content={postData.description || ""} />
        <meta name="keywords" content={postData.keywords?.join(", ") || ""} />
      </Head>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center shadow-lg mt-20 overflow-hidden">
        {/* Background Accent */}
        {/* <div className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-[#ED4716]/20 blur-[140px] rounded-full animate-pulse-slow" />
  <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#FF6B2C]/15 blur-[120px] rounded-full animate-pulse-slow" /> */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-32 flex flex-col items-center justify-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {postData.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#ED4716] font-medium max-w-3xl">
            {postData.description}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mt-5 mb-5 rounded-4xl mx-auto py-10 px-6 sm:p-16  bg-[#0a0a0a]  shadow-lg  transition-all duration-300">
        {/* Floating Social Bar */}

        {/* Markdown Article */}
        <article className="flex-1  mx-auto  markdown-body">
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </section>

      {/* Author Card */}
      {/* {postData.author && (
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl shadow p-8 flex gap-6 items-center">
          <img
            // src={postData.authorImage || "/default-avatar.png"}
            alt={postData.author}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{postData.author}</h3>
            <p className="text-gray-600 text-sm">{postData.authorBio}</p>
          </div>
        </div>
      )} */}

      {/* Related Posts */}
      {/* <section className="container mx-auto max-w-5xl mt-20 px-4 sm:px-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">You May Also Like</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
            <h3 className="font-semibold text-xl mb-2">Related Blog Title</h3>
            <p className="text-gray-600 text-sm">
              Short description of the related blog to spark curiosity...
            </p>
          </div>
        </div>
      </section> */}

      {/* Newsletter CTA */}
      {/* <section className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
        <p className="mb-6 text-lg">
          Subscribe to our newsletter for more insights and stories.
        </p>
        <form className="flex justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-xl text-black w-full"
          />
          <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition">
            Subscribe
          </button>
        </form>
      </section> */}
    </>
  );
}
