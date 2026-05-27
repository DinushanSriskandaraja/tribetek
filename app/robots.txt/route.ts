export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

User-agent: Googlebot
Allow: /

Sitemap: https://tribetek.info/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
