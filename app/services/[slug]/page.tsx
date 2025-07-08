import { notFound } from "next/navigation";
import { JSX } from "react";
import {
  FaCode,
  FaTools,
  FaBullhorn,
  FaCogs,
  FaChartLine,
  FaNodeJs,
  FaReact,
  FaShopify,
  FaFigma,
  FaGoogle,
  FaMailBulk,
  FaCloud,
  FaTrello,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiStrapi,
  SiDjango,
  SiZapier,
  //   SiPowerbi,
  SiVercel,
  SiNotion,
  //   SiLucidchart,
  SiCanva,
  SiMysql,
} from "react-icons/si";

type ServiceData = {
  title: string;
  whatWeDo: string[];
  techStack: string[];
};

const services: Record<
  | "website-development"
  | "software-development"
  | "digital-marketing"
  | "digital-transformation"
  | "consulting",
  ServiceData
> = {
  "website-development": {
    title: "Custom Website Development",
    whatWeDo: [
      "Responsive & mobile-first designs",
      "SEO-ready architecture",
      "Conversion-focused landing pages",
      "CMS & eCommerce integration",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Strapi",
      "Shopify",
    ],
  },
  "software-development": {
    title: "Custom Software Development",
    whatWeDo: [
      "Business automation systems",
      "Internal dashboards and CRMs",
      "Secure, scalable architecture",
      "Mobile & web-based platforms",
    ],
    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "React Native",
      "Firebase",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & Branding",
    whatWeDo: [
      "Social media strategy & creatives",
      "Ad campaign optimization",
      "Brand identity and design systems",
      "Content planning & email marketing",
    ],
    techStack: ["Meta Ads", "Google Analytics", "Canva", "Figma", "Mailchimp"],
  },
  "digital-transformation": {
    title: "End-to-End Digital Transformation",
    whatWeDo: [
      "Manual-to-system migration",
      "Process automation",
      "Digitized customer & staff flows",
      "Performance insights and dashboards",
    ],
    techStack: [
      "Django",
      "MySQL",
      "Cloud APIs",
      "AI Assistants",
      "Zapier",
      "Power BI",
    ],
  },
  consulting: {
    title: "Tech Consulting",
    whatWeDo: [
      "System architecture planning",
      "MVP roadmap design",
      "Cost-efficient tech solutions",
      "Growth & scaling strategies",
    ],
    techStack: ["Business Canvas", "Notion", "Lucidchart", "Agile", "Trello"],
  },
};

// Icon mappings
const techIconMap: Record<string, JSX.Element> = {
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Framer Motion": <FaCode />,
  Vercel: <SiVercel />,
  Strapi: <SiStrapi />,
  Shopify: <FaShopify />,
  "Node.js": <FaNodeJs />,
  Express: <FaCode />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  "React Native": <FaReact />,
  Firebase: <SiFirebase />,
  "Meta Ads": <FaBullhorn />,
  "Google Analytics": <FaGoogle />,
  Canva: <SiCanva />,
  Figma: <FaFigma />,
  Mailchimp: <FaMailBulk />,
  Django: <SiDjango />,
  MySQL: <SiMysql />,
  "Cloud APIs": <FaCloud />,
  "AI Assistants": <FaCode />,
  Zapier: <SiZapier />,
  //   "Power BI": <SiPowerbi />,
  "Business Canvas": <FaChartLine />,
  Notion: <SiNotion />,
  //   Lucidchart: <SiLucidchart />,
  Agile: <FaTools />,
  Trello: <FaTrello />,
};

const iconMap: Record<string, JSX.Element> = {
  "website-development": <FaCode size={48} className="text-[#ED4716]" />,
  "software-development": <FaTools size={48} className="text-[#ED4716]" />,
  "digital-marketing": <FaBullhorn size={48} className="text-[#ED4716]" />,
  "digital-transformation": <FaCogs size={48} className="text-[#ED4716]" />,
  consulting: <FaChartLine size={48} className="text-[#ED4716]" />,
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: keyof typeof services }>;
}) {
  const resolvedParams = await params;
  const service = services[resolvedParams.slug];
  if (!service) return notFound();

  const icon = iconMap[resolvedParams.slug];

  return (
    <section className="container mx-auto mb-24 mt-32 py-16 px-6 sm:px-16 bg-white rounded-4xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Our <span className="text-[#ED4716]">Service</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Icon */}
        <div className="bg-[#f2f2f2] rounded-3xl p-6 flex items-center justify-center shadow-sm">
          {icon}
        </div>

        {/* Title + What We Do */}
        <div className="md:col-span-2 bg-[#f2f2f2] rounded-3xl p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {service.title}
          </h1>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {service.whatWeDo.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack with Icons */}
        <div className="md:col-span-2 bg-[#f2f2f2] rounded-3xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4">
            {service.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-sm text-gray-700">
                {techIconMap[tech] || <FaTools />}
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Know More */}
        <div className="bg-[#f2f2f2] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Want to explore more?
          </h2>
          <a
            href="/blogs"
            className="text-[#ED4716] text-sm font-medium hover:underline">
            Read Related Blogs →
          </a>
        </div>
      </div>
    </section>
  );
}
