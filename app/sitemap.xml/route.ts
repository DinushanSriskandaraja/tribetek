export async function GET() {
  const baseUrl = "https://tribetek.info";

  const staticUrls = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/blog", priority: "0.7", changefreq: "weekly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
  ];

  const servicePages = [
    "/services/digital-transformation",
    "/services/website-development",
    "/services/software-development",
    "/services/ai-solutions",
    "/services/mobile-app-development",
    "/services/consulting",
  ];

  const today = new Date().toISOString().split("T")[0];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls
      .map(
        (url) => `
    <url>
      <loc>${baseUrl}${url.path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`
      )
      .join("")}
    ${servicePages
      .map(
        (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
