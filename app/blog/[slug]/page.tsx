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
      <section
        className="relative flex items-center justify-center text-left text-white bg-[#f2f2f2] rounded-4xl shadow-lg mt-20"
        style={{
          // backgroundImage: `url(${postData.coverImage || "/default-cover.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white rounded-4xl mt-20"></div>
        <div className="relative z-10 max-w-3xl px-6 py-20">
          <h1 className="text-4xl text-black mt-10 sm:text-5xl font-extrabold mb-6 drop-shadow-lg">
            {postData.title}
          </h1>
          <p className="text-lg text-black mb-4">{postData.description}</p>
          <div className="text-sm text-black">
            {/* {postData.author && <span>By {postData.author} • </span>} */}
            {/* <span>{postData.date}</span> • <span>{postData.readTime} min read</span> */}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mt-5 mb-5 rounded-4xl mx-auto py-10 px-6 sm:p-16  bg-white shadow-lg border border-gray-100 transition-all duration-300">
        {/* Floating Social Bar */}
       

        {/* Markdown Article */}
        <article className="flex-1  mx-auto max-w-3xl markdown-body">
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
