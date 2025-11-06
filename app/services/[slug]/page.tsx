import { notFound } from "next/navigation";
import { JSX } from "react";
import {
  FaCode,
  FaCogs,
  FaBullhorn,
  FaSyncAlt,
  FaLightbulb,
  FaMobileAlt,
  FaRobot,
  FaTools,
  FaChartLine,
  FaNodeJs,
  FaReact,
  FaShopify,
  FaFigma,
  FaGoogle,
  FaMailBulk,
  FaCloud,
  FaTrello,
} from "react-icons/fa"; // Font Awesome Icons
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiStrapi,
  SiDjango,
  SiZapier,
  SiVercel,
  SiNotion,
  SiCanva,
  SiMysql,
} from "react-icons/si";

type ServiceData = {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  whatWeDo: string[];
  process: string[];
  techStack: string[];
  results?: { label: string; value: string }[];
};

const services: Record<
  | "website-development"
  | "software-development"
  | "digital-marketing"
  | "digital-transformation"
  | "consulting"
  | "ai-solutions"
  | "mobile-app-development",
  ServiceData
> = {
  "website-development": {
    title: "Custom Website Development",
    tagline: "Your online presence, optimized for performance and conversions.",
    description:
      "We design and develop responsive, SEO-friendly, and high-performing websites tailored to your business goals.",
    benefits: [
      "Improve user experience and engagement",
      "Boost search engine rankings",
      "Increase leads and conversions",
      "Seamless CMS or eCommerce integration",
    ],
    whatWeDo: [
      "Responsive & mobile-first designs",
      "SEO-ready architecture",
      "Conversion-focused landing pages",
      "CMS & eCommerce integration",
    ],
    process: [
      "Requirement gathering and planning",
      "Wireframing and design",
      "Development and testing",
      "Deployment and optimization",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "Strapi", "Shopify"],
    results: [
      { label: "Projects Delivered", value: "120+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Avg Page Speed", value: "95/100" },
    ],
  },
  "software-development": {
    title: "Custom Software Development",
    tagline: "Build robust software to automate and scale your business.",
    description:
      "We deliver secure, scalable software solutions including dashboards, CRMs, and web/mobile apps to accelerate growth.",
    benefits: [
      "Automate manual processes",
      "Improve operational efficiency",
      "Secure and reliable architecture",
      "Custom solutions tailored to your needs",
    ],
    whatWeDo: [
      "Business automation systems",
      "Internal dashboards and CRMs",
      "Secure, scalable architecture",
      "Mobile & web-based platforms",
    ],
    process: [
      "Requirement analysis and strategy",
      "System architecture & design",
      "Development & QA",
      "Deployment & maintenance",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "React Native", "Firebase"],
    results: [
      { label: "Systems Built", value: "85+" },
      { label: "Operational Efficiency", value: "Avg +40%" },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & Branding",
    tagline: "Grow your brand and reach the right audience effectively.",
    description:
      "We create data-driven campaigns, brand strategies, and engaging content to drive awareness and conversions.",
    benefits: [
      "Reach your target audience effectively",
      "Optimize campaigns for ROI",
      "Strengthen brand identity",
      "Generate measurable results",
    ],
    whatWeDo: [
      "Social media strategy & creatives",
      "Ad campaign optimization",
      "Brand identity and design systems",
      "Content planning & email marketing",
    ],
    process: [
      "Research & audience analysis",
      "Campaign planning & design",
      "Execution & optimization",
      "Reporting & analytics",
    ],
    techStack: ["Meta Ads", "Google Analytics", "Canva", "Figma", "Mailchimp"],
    results: [
      { label: "Campaigns Managed", value: "200+" },
      { label: "Average ROI", value: "150%" },
    ],
  },
  "digital-transformation": {
    title: "End-to-End Digital Transformation",
    tagline: "Turn manual operations into efficient AI-driven systems.",
    description:
      "We help businesses automate processes, digitize workflows, and gain insights to enhance productivity and growth.",
    benefits: [
      "Streamline operations",
      "Reduce errors and delays",
      "Enable data-driven decisions",
      "Scalable workflows for growth",
    ],
    whatWeDo: [
      "Manual-to-system migration",
      "Process automation",
      "Digitized customer & staff flows",
      "Performance insights and dashboards",
    ],
    process: [
      "Audit current operations",
      "Identify automation opportunities",
      "Develop and implement solutions",
      "Monitor, optimize, and train staff",
    ],
    techStack: ["Django", "MySQL", "Cloud APIs", "AI Assistants", "Zapier"],
    results: [
      { label: "Processes Automated", value: "50+" },
      { label: "Time Saved", value: "Avg 30%" },
    ],
  },
  consulting: {
    title: "Tech Consulting",
    tagline: "Expert advice to maximize ROI and future-proof your business.",
    description:
      "We guide you through technology planning, digital strategies, and growth initiatives to help make informed decisions.",
    benefits: [
      "Get clear tech roadmap",
      "Save costs with efficient solutions",
      "Identify growth opportunities",
      "Make informed decisions",
    ],
    whatWeDo: [
      "System architecture planning",
      "MVP roadmap design",
      "Cost-efficient tech solutions",
      "Growth & scaling strategies",
    ],
    process: [
      "Initial consultation & analysis",
      "Strategic planning & recommendations",
      "Implementation support",
      "Monitoring & review",
    ],
    techStack: ["Business Canvas", "Notion", "Agile", "Trello"],
    results: [
      { label: "Projects Advised", value: "60+" },
      { label: "Client Satisfaction", value: "97%" },
    ],
  },
  "ai-solutions": {
    title: "AI-Powered Business Solutions",
    tagline: "Leverage AI to make smarter business decisions.",
    description:
      "We implement AI tools to automate tasks, generate insights, and enhance customer engagement for smarter operations.",
    benefits: [
      "Automate repetitive tasks",
      "Predict trends and customer behavior",
      "Improve decision-making",
      "Enhance customer experience",
    ],
    whatWeDo: [
      "AI-driven analytics & reporting",
      "Automated customer interactions",
      "Predictive insights for decision-making",
      "Smart workflow automation",
    ],
    process: [
      "Identify AI opportunities",
      "Data collection & modeling",
      "Deploy AI solutions",
      "Monitor & refine AI performance",
    ],
    techStack: ["AI Assistants", "Python AI Libraries", "Zapier", "Cloud APIs"],
    results: [
      { label: "Tasks Automated", value: "100+" },
      { label: "Decision Accuracy", value: "95%" },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    tagline: "High-performance apps to delight your users.",
    description:
      "We design and develop mobile apps for iOS and Android, focusing on performance, usability, and brand growth.",
    benefits: [
      "Reach users on their mobile devices",
      "High-performance and smooth UX",
      "Brand visibility and retention",
      "Cross-platform scalability",
    ],
    whatWeDo: [
      "iOS & Android native apps",
      "Cross-platform development",
      "Intuitive UX/UI design",
      "App store deployment & updates",
    ],
    process: [
      "Concept & requirement gathering",
      "Design & prototyping",
      "Development & testing",
      "Launch & maintenance",
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Node.js", "PostgreSQL"],
    results: [
      { label: "Apps Launched", value: "40+" },
      { label: "Avg App Rating", value: "4.8/5" },
    ],
  },
};

// Icons
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
  Flutter: <FaMobileAlt />,
  Firebase: <SiFirebase />,
  "Meta Ads": <FaBullhorn />,
  "Google Analytics": <FaGoogle />,
  Canva: <SiCanva />,
  Figma: <FaFigma />,
  Mailchimp: <FaMailBulk />,
  Django: <SiDjango />,
  MySQL: <SiMysql />,
  "Cloud APIs": <FaCloud />,
  "AI Assistants": <FaRobot />,
  Zapier: <SiZapier />,
  "Business Canvas": <FaChartLine />,
  Notion: <SiNotion />,
  Agile: <FaTools />,
  Trello: <FaTrello />,
  "Python AI Libraries": <FaRobot />,
};

// Service Icons
const iconMap: Record<string, JSX.Element> = {
  "website-development": <FaCode size={64} className="text-[#ED4716]" />,
  "software-development": <FaCogs size={64} className="text-[#ED4716]" />,
  "digital-marketing": <FaBullhorn size={64} className="text-[#ED4716]" />,
  "digital-transformation": <FaSyncAlt size={64} className="text-[#ED4716]" />,
  consulting: <FaLightbulb size={64} className="text-[#ED4716]" />,
  "ai-solutions": <FaRobot size={64} className="text-[#ED4716]" />,
  "mobile-app-development": <FaMobileAlt size={64} className="text-[#ED4716]" />,
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
    <section className="container mx-auto my-20 px-6 sm:px-16">
      {/* Hero */}
      <div className="bg-white mt-28 rounded-3xl shadow-lg border border-gray-100 p-6 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-shrink-0 flex justify-center items-center bg-white p-8 rounded-3xl shadow-lg">
          {icon}
        </div>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {service.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#ED4716] font-semibold mb-6">
            {service.tagline}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">{service.description}</p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-20 bg-white  rounded-4xl p-10 shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center ">Why Choose This Service?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="bg-[#f2f2f2]  p-6 rounded-3xl shadow hover:shadow-xl transition-all duration-300">
              <h3 className="font-semibold text-gray-800">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mt-20 bg-white rounded-4xl p-10 shadow-lg border border-gray-100">
        <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">Our Process</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.process.map((step, idx) => (
            <div key={idx} className="bg-[#f2f2f2] p-6 rounded-3xl shadow hover:shadow-xl transition-all duration-300">
              <h3 className="font-semibold text-gray-800">{`Step ${idx + 1}: ${step}`}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do */}
      <div className="mt-20 bg-white rounded-4xl p-10 shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {service.whatWeDo.map((point, idx) => (
            <div key={idx} className="bg-[#f2f2f2] p-8 rounded-3xl shadow hover:shadow-xl transition-all duration-300">
              <h3 className="font-semibold text-gray-800 mb-3">{point}</h3>
              <p className="text-gray-600 text-sm">
                Detailed explanation of how we implement this to deliver top results for your business.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-20 bg-white rounded-4xl p-10 shadow-lg border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tech Stack We Use</h2>
        <div className="flex flex-wrap gap-5">
          {service.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 bg-[#f2f2f2] border border-gray-200 rounded-xl shadow-sm text-gray-700 text-sm hover:bg-[#ED4716] hover:text-white transition-all duration-300">
              {techIconMap[tech] || <FaTools />}
              <span className="font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-white rounded-4xl p-10 shadow-lg border border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Want to explore more about our services?
        </h2>
        <div className="flex gap-6">
          <a
            href="/contact"
            className="px-7 py-4 border border-[#ED4716] text-[#ED4716] font-medium rounded-xl hover:bg-[#ED4716] hover:text-white transition-all">
            Book A Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
