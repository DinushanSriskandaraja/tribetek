"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
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
  SiVercel,
  SiNotion,
  SiCanva,
  SiMysql,
} from "react-icons/si";
import { JSX } from "react";

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

const iconMap: Record<string, JSX.Element> = {
  "website-development": <FaCode size={64} className="text-[#ED4716]" />,
  "software-development": <FaCogs size={64} className="text-[#ED4716]" />,
  "digital-marketing": <FaBullhorn size={64} className="text-[#ED4716]" />,
  "digital-transformation": <FaSyncAlt size={64} className="text-[#ED4716]" />,
  consulting: <FaLightbulb size={64} className="text-[#ED4716]" />,
  "ai-solutions": <FaRobot size={64} className="text-[#ED4716]" />,
  "mobile-app-development": <FaMobileAlt size={64} className="text-[#ED4716]" />,
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: keyof typeof services }>;
}) {
  const { slug } = React.use(params);
  const service = services[slug];
  if (!service) return notFound();

  const icon = iconMap[slug];

 return (
    <main className="relative min-h-screen  text-white overflow-hidden">
  {/* Background Accent Circles */}
  <div className="absolute -top-40 -left-32 w-[450px] h-[450px] bg-[#ED4716]/15 blur-[160px] rounded-full" />
  <div className="absolute bottom-0 -right-40 w-[400px] h-[400px] bg-[#ED4716]/10 blur-[160px] rounded-full" />

  {/* Parent container with equal spacing */}
  <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-28 flex flex-col space-y-32">

    {/* HERO SECTION */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center md:text-left flex flex-col md:flex-row items-center gap-12 mt-16"
    >
      <div className="bg-gradient-to-br from-[#151515] to-[#1f1f1f] rounded-3xl p-10 shadow-lg shadow-black/30">
        {icon}
      </div>
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#ED4716] to-orange-400 bg-clip-text text-transparent mb-4">
          {service.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 italic mb-6">
          {service.tagline}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-12">
          {service.description}
        </p>
      </div>
    </motion.section>

    {/* BENEFITS */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
        Key Benefits
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {service.benefits.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ED4716] to-orange-500 mt-2" />
            <p className="text-gray-300 text-lg font-medium leading-relaxed mb-12">{b}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* SOLUTIONS */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#ED4716]/20 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#FF6B2C]/15 blur-[100px] rounded-full animate-pulse-slow" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Solutions We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-{{service.whatWeDo.length}} gap-8 mb-12">
        {service.whatWeDo.map((solution, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative bg-gradient-to-br from-[#1a1a1a]/80 to-[#121212]/80 backdrop-blur-md border border-[#2a2a2a] rounded-3xl p-8 flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#ED4716]/20"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-[#ED4716] to-[#FF6B2C]" />
            <h3 className="text-2xl md:text-3xl text-[#ED4716] font-bold mb-4">{solution}</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Our approach ensures performance, scalability, and elegant user experience. Each solution is carefully designed to deliver results.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* TECH STACK */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-10 h-[50px]"
    >
      <h2 className="text-4xl font-bold">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {service.techStack.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 bg-[#151515]/70 border border-[#2a2a2a] rounded-full hover:bg-[#ED4716]/10 hover:border-[#ED4716]/50 transition"
          >
            {techIconMap[tech] || <FaTools />}
            <span className="text-sm font-medium">{tech}</span>
          </div>
        ))}
      </div>
    </motion.section>

  </div>
</main>

  );
}