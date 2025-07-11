export async function GET() {
  const baseUrl = "https://tribetek.vercel.app";

  const urls = ["", "/about", "/blog", "/contact"];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <changefreq>monthly</changefreq>
      <priority>${url === "" ? "1.0" : "0.8"}</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
