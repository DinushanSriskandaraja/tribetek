// data/servicesData.ts
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

// data/servicesData.ts
// import { JSX } from "react";
// import {
//   FaCode,
//   FaCogs,
//   FaBullhorn,
//   FaSyncAlt,
//   FaLightbulb,
//   FaMobileAlt,
//   FaRobot,
// } from "react-icons/fa";
// data/servicesData.ts
import { LucideIcon } from "lucide-react";
import {
  Bot,
  RefreshCcw,
  Settings,
  Smartphone,
  Code2,
  Lightbulb,
} from "lucide-react";

export type ServiceData = {
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  whatWeDo: string[];
  process: string[];
  techStack: string[];
  results?: { label: string; value: string }[];
};

export type ServiceSlug =
  | "website-development"
  | "software-development"
  | "digital-marketing"
  | "digital-transformation"
  | "consulting"
  | "ai-solutions"
  | "mobile-app-development";

export const services: Record<ServiceSlug, ServiceData> = {
  "digital-transformation": {
    title: "Business Process Automation",
    tagline: "Turn manual operations into automated systems",
    description:
      "We analyze your business workflows and build automation-driven systems that eliminate repetitive tasks, reduce errors, and improve operational efficiency.",
    benefits: [
      "Reduced manual workload",
      "Faster operations",
      "Fewer errors",
      "Scalable processes",
    ],
    whatWeDo: [
      "Workflow analysis & automation design",
      "Internal process automation",
      "System integrations",
      "Automation dashboards",
    ],
    process: [
      "Process audit",
      "Automation strategy",
      "System development",
      "Optimization & scaling",
    ],
    techStack: [
      "Django",
      "MySQL",
      "Zapier",
      "Cloud APIs",
      "Python AI Libraries",
    ],
  },

  "software-development": {
    title: "Custom Automation Software",
    tagline: "Software built to reduce work, not add complexity",
    description:
      "We build custom software solutions focused on automating business operations, internal tools, and data workflows.",
    benefits: [
      "Automation-ready architecture",
      "Custom-built for your workflows",
      "Secure & scalable",
      "Long-term flexibility",
    ],
    whatWeDo: [
      "Internal tools & dashboards",
      "CRM & management systems",
      "API & system integrations",
      "Automation logic development",
    ],
    process: [
      "Requirement analysis",
      "System architecture",
      "Development & testing",
      "Deployment & support",
    ],
    techStack: ["Node.js", "PostgreSQL", "MongoDB", "React", "Firebase"],
  },

  "website-development": {
    title: "Automation-Focused Web Development",
    tagline: "Web applications that simplify operations",
    description:
      "We build fast, scalable web applications designed to automate tasks, manage data, and support business operations.",
    benefits: [
      "Operational efficiency",
      "SEO-friendly architecture",
      "Fast & responsive UI",
      "Automation-ready systems",
    ],
    whatWeDo: [
      "Automation-enabled web apps",
      "Admin panels & dashboards",
      "CMS & data-driven systems",
      "Performance optimization",
    ],
    process: [
      "Planning & UX design",
      "Development",
      "Testing & optimization",
      "Launch & scaling",
    ],
    techStack: ["Next.js", "Tailwind CSS", "React", "Vercel", "Strapi"],
  },

  "ai-solutions": {
    title: "AI-Powered Automation",
    tagline: "Smarter systems with intelligent automation",
    description:
      "We implement AI-driven solutions to automate decision-making, data processing, and customer interactions.",
    benefits: [
      "Intelligent automation",
      "Predictive insights",
      "Faster decision-making",
      "Reduced human dependency",
    ],
    whatWeDo: [
      "AI assistants & chat systems",
      "Predictive analytics",
      "Automated data processing",
      "AI workflow integration",
    ],
    process: [
      "AI opportunity identification",
      "Model & workflow design",
      "Implementation",
      "Monitoring & optimization",
    ],
    techStack: ["Python AI Libraries", "AI Assistants", "Cloud APIs"],
  },

  "mobile-app-development": {
    title: "Automation-Enabled Mobile Apps",
    tagline: "Mobile apps connected to your systems",
    description:
      "We develop mobile applications that integrate with your automation systems and business software.",
    benefits: [
      "System-connected apps",
      "Cross-platform development",
      "Operational control on mobile",
      "Scalable performance",
    ],
    whatWeDo: [
      "iOS & Android apps",
      "Cross-platform solutions",
      "System & API integration",
      "Maintenance & updates",
    ],
    process: [
      "Concept & planning",
      "UI/UX design",
      "Development & testing",
      "Launch & support",
    ],
    techStack: ["React Native", "Firebase", "Node.js"],
  },

  consulting: {
    title: "Automation & Tech Consulting",
    tagline: "Strategic guidance before you build",
    description:
      "We help businesses plan automation strategies, system architecture, and scalable technology roadmaps.",
    benefits: [
      "Clear automation roadmap",
      "Cost-effective decisions",
      "Risk reduction",
      "Future-ready systems",
    ],
    whatWeDo: [
      "Automation planning",
      "System architecture design",
      "MVP & scaling strategy",
      "Technical decision support",
    ],
    process: [
      "Discovery session",
      "Strategy & roadmap",
      "Execution support",
      "Review & optimization",
    ],
    techStack: ["Notion", "Agile", "Trello"],
  },
  "digital-marketing": {
    title: "",
    tagline: "",
    description: "",
    benefits: [],
    whatWeDo: [],
    process: [],
    techStack: [],
    results: undefined,
  },
};

// Icons for tech stack (as functions to avoid JSX in .ts)
export const techIconMap: Record<string, () => JSX.Element> = {
  "Next.js": () => <SiNextdotjs />,
  "Tailwind CSS": () => <SiTailwindcss />,
  "Framer Motion": () => <FaCode />,
  Vercel: () => <SiVercel />,
  Strapi: () => <SiStrapi />,
  Shopify: () => <FaShopify />,
  "Node.js": () => <FaNodeJs />,
  Express: () => <FaCode />,
  MongoDB: () => <SiMongodb />,
  PostgreSQL: () => <SiPostgresql />,
  "React Native": () => <FaReact />,
  Flutter: () => <FaMobileAlt />,
  Firebase: () => <SiFirebase />,
  "Meta Ads": () => <FaBullhorn />,
  "Google Analytics": () => <FaGoogle />,
  Canva: () => <SiCanva />,
  Figma: () => <FaFigma />,
  Mailchimp: () => <FaMailBulk />,
  Django: () => <SiDjango />,
  MySQL: () => <SiMysql />,
  "Cloud APIs": () => <FaCloud />,
  "AI Assistants": () => <FaRobot />,
  Zapier: () => <SiZapier />,
  "Business Canvas": () => <FaChartLine />,
  Notion: () => <SiNotion />,
  Agile: () => <FaTools />,
  Trello: () => <FaTrello />,
  "Python AI Libraries": () => <FaRobot />,
};

// Main icons for each service page
// export const iconMap: Record<string, () => JSX.Element> = {
//   "website-development": () => <FaCode size={64} className="text-[#ED4716]" />,
//   "software-development": () => <FaCogs size={64} className="text-[#ED4716]" />,
//   "digital-marketing": () => (
//     <FaBullhorn size={64} className="text-[#ED4716]" />
//   ),
//   "digital-transformation": () => (
//     <FaSyncAlt size={64} className="text-[#ED4716]" />
//   ),
//   consulting: () => <FaLightbulb size={64} className="text-[#ED4716]" />,
//   "ai-solutions": () => <FaRobot size={64} className="text-[#ED4716]" />,
//   "mobile-app-development": () => (
//     <FaMobileAlt size={64} className="text-[#ED4716]" />
//   ),
// };
export const iconMap: Record<ServiceSlug, LucideIcon> = {
  "website-development": Code2,
  "software-development": Settings,
  "digital-marketing": Code2, // placeholder (hidden anyway)
  "digital-transformation": RefreshCcw,
  consulting: Lightbulb,
  "ai-solutions": Bot,
  "mobile-app-development": Smartphone,
};
