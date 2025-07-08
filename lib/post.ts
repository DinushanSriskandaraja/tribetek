import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Define the PostData type including frontmatter and contentHtml
export interface PostData {
  slug: string;
  title: string;
  description?: string;
  keywords?: string[];
  date?: string;
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "posts");

// Get all slugs (filenames without .md)
export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

// Read and parse a single post by slug
export async function getPostData(slug: string): Promise<PostData> {
  console.log("Reading slug:", slug);

  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    date: data.date,
  };
}
