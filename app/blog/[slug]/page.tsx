import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostData } from "../../../lib/post";
import Head from "next/head";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs; // [{ slug: "abc" }, ...]
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // await here to get the slug string

  const postData = await getPostData(slug);

  if (!postData) return notFound();

  return (
    <>
      <Head>
        <title>{postData.title} | TribeTek</title>
        <meta name="description" content={postData.description || ""} />
        <meta name="keywords" content={postData.keywords?.join(", ") || ""} />
      </Head>

      <section className="container mx-auto mt-28 mb-20 px-4 sm:px-10 py-16 bg-white rounded-4xl shadow-lg border border-gray-100">
        <article className="max-w-4xl mx-auto prose prose-orange prose-img:rounded-lg">
          <h1>{postData.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{postData.description}</p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </section>
    </>
  );
}
