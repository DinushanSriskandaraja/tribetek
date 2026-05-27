import { LucideIcon, Target, Cpu, Code2, Rocket, Zap, Clock, Shield, BarChart3, Users, MessageSquare } from "lucide-react";

export type PromoData = {
  title: string;
  subtitle: string;
  heroBadge: string;
  heroCta: string;
  problems: {
    title: string;
    description: string;
  }[];
  solutionTitle: string;
  solutionDescription: string;
  benefits: {
    title: string;
    description: string;
    icon: string; // Icon name from lucide
  }[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBulletPoints: string[];
};

export const promoData: Record<string, PromoData> = {
  "lead-generation": {
    title: "High-Converting Landing Pages That Actually Close Leads",
    subtitle: "Stop wasting ad spend on pages that don't convert. We build performance-driven landing pages designed to turn visitors into booked calls.",
    heroBadge: "Lead Gen & Landing Pages",
    heroCta: "Build My Landing Page",
    problems: [
      { title: "High Traffic, Low Conversion", description: "You're getting visitors but they leave without taking action." },
      { title: "Generic Templates", description: "Your site looks like everyone else's and doesn't build trust." },
      { title: "Confusing UX", description: "Users can't find how to contact you or what you actually do." }
    ],
    solutionTitle: "Psychology-Backed Design That Sells",
    solutionDescription: "We don't just build pages; we build conversion funnels. Every element is placed to guide the user toward your primary goal.",
    benefits: [
      { title: "Rapid Load Times", description: "Faster pages mean higher conversion and better SEO.", icon: "Zap" },
      { title: "A/B Ready Structure", description: "Built for easy testing and optimization.", icon: "BarChart3" },
      { title: "Mobile Optimized", description: "Flawless experience on every device.", icon: "Target" }
    ],
    process: [
      { title: "Strategy Session", description: "We define your target audience and core offer." },
      { title: "Copy & Wireframe", description: "We write persuasive copy and map the user journey." },
      { title: "Design & Build", description: "Premium, high-performance page construction." },
      { title: "Launch & Optimize", description: "Going live and monitoring performance." }
    ],
    faqs: [
      { question: "How long does it take?", answer: "A typical high-conversion landing page takes 1-2 weeks from start to finish." },
      { question: "Do you write the copy?", answer: "Yes, we handle the strategy and copywriting to ensure maximum conversion." }
    ],
    ctaTitle: "Stop losing leads today.",
    ctaSubtitle: "Get a free conversion audit of your current page.",
    ctaBulletPoints: [
      "Psychology-driven layout",
      "Lead capture optimization",
      "Speed & SEO performance",
      "30-minute strategy call"
    ]
  },
  "custom-software": {
    title: "Scalable Software Built for Your Unique Business Needs",
    subtitle: "Off-the-shelf software doesn't fit your workflow. We build custom internal tools and SaaS products that grow with you.",
    heroBadge: "Custom Software Development",
    heroCta: "Discuss My Project",
    problems: [
      { title: "Manual Data Entry", description: "Spending hours moving data between spreadsheets." },
      { title: "Fragmented Systems", description: "Your tools don't talk to each other, creating silos." },
      { title: "Limited Scalability", description: "Current systems are breaking as you grow." }
    ],
    solutionTitle: "Engineered for Efficiency",
    solutionDescription: "We build robust, scalable architectures that solve your specific bottlenecks and automate your internal operations.",
    benefits: [
      { title: "Ownership", description: "You own the code and the intellectual property.", icon: "Shield" },
      { title: "Seamless Integration", description: "Connect all your existing tools into one ecosystem.", icon: "Cpu" },
      { title: "Future-Proof", description: "Built with modern tech that scales easily.", icon: "Rocket" }
    ],
    process: [
      { title: "Discovery", description: "Deep dive into your business logic and requirements." },
      { title: "Architecture", description: "Planning a secure and scalable system design." },
      { title: "Agile Development", description: "Rapid iterations with regular feedback loops." },
      { title: "Deployment", description: "Smooth transition to your new custom system." }
    ],
    faqs: [
      { question: "What tech stack do you use?", answer: "We primarily use Next.js, Node.js, and PostgreSQL for modern, scalable apps." },
      { question: "Can you maintain it?", answer: "Yes, we offer ongoing support and maintenance packages." }
    ],
    ctaTitle: "Build your competitive edge.",
    ctaSubtitle: "Get a custom software roadmap for your business.",
    ctaBulletPoints: [
      "Scalable system architecture",
      "Full IP ownership",
      "Seamless API integrations",
      "Dedicated development team"
    ]
  },
  "ai-automation": {
    title: "AI-Powered Automation That Saves You 20+ Hours a Week",
    subtitle: "Stop doing the same tasks over and over. We implement intelligent AI workflows that handle the heavy lifting for you.",
    heroBadge: "AI & Automation",
    heroCta: "Automate My Business",
    problems: [
      { title: "Repetitive Tasks", description: "Drowning in admin work that could be automated." },
      { title: "Slow Response Times", description: "Leads waiting hours for a reply while you're busy." },
      { title: "Data Overload", description: "Too much information to process manually." }
    ],
    solutionTitle: "Your Business on Autopilot",
    solutionDescription: "We integrate LLMs and automation tools like Zapier/Make to create systems that think, respond, and execute without manual input.",
    benefits: [
      { title: "Instant Response", description: "AI agents that handle inquiries 24/7.", icon: "Clock" },
      { title: "Error Reduction", description: "Automated systems don't make human mistakes.", icon: "Zap" },
      { title: "Intelligent Insights", description: "AI that analyzes data and gives you the answers.", icon: "BarChart3" }
    ],
    process: [
      { title: "Audit", description: "Identifying your most time-consuming manual tasks." },
      { title: "Workflow Design", description: "Mapping out the AI-powered automated path." },
      { title: "Implementation", description: "Building and connecting the automation tools." },
      { title: "Refinement", description: "Testing and tuning for maximum reliability." }
    ],
    faqs: [
      { question: "Is my data safe?", answer: "We implement enterprise-grade security and data privacy protocols." },
      { question: "Which AI models do you use?", answer: "We use OpenAI, Anthropic, and open-source models depending on the need." }
    ],
    ctaTitle: "Reclaim your time.",
    ctaSubtitle: "Book an automation audit to see what you can put on autopilot.",
    ctaBulletPoints: [
      "Custom AI workflow design",
      "Zapier & Make integration",
      "24/7 AI lead responders",
      "Full automation roadmap"
    ]
  },
  "web-development": {
    title: "Modern Web Applications for High-Growth Startups",
    subtitle: "A website is more than just a digital brochure. We build fast, beautiful, and functional web apps that drive business growth.",
    heroBadge: "Premium Web Development",
    heroCta: "Start My Project",
    problems: [
      { title: "Outdated Look", description: "Your website looks like it's from 2015, losing you trust." },
      { title: "Slow Performance", description: "Users bounce because your site takes too long to load." },
      { title: "Hard to Manage", description: "You can't update content without calling a developer." }
    ],
    solutionTitle: "Elite Digital Experiences",
    solutionDescription: "We combine world-class design with cutting-edge technology to create web applications that wow your users and deliver results.",
    benefits: [
      { title: "Elite Aesthetics", description: "Modern, minimalist design that feels premium.", icon: "Users" },
      { title: "CMS Control", description: "Easily update your own content anytime.", icon: "MessageSquare" },
      { title: "SEO Optimized", description: "Built from the ground up to rank on Google.", icon: "BarChart3" }
    ],
    process: [
      { title: "UI/UX Design", description: "Visualizing the user experience and brand feel." },
      { title: "Frontend Build", description: "Developing with Next.js for ultimate speed." },
      { title: "Backend & CMS", description: "Powering the app with a robust data layer." },
      { title: "Testing & QA", description: "Ensuring perfection across all devices." }
    ],
    faqs: [
      { question: "Do you use WordPress?", answer: "No, we build with Next.js for better performance, security, and flexibility." },
      { question: "Is the site responsive?", answer: "Absolutely. Every site we build is mobile-first and fully responsive." }
    ],
    ctaTitle: "Ready for an elite website?",
    ctaSubtitle: "Let's build something that sets you apart from the competition.",
    ctaBulletPoints: [
      "Next.js high-performance build",
      "Custom UI/UX design",
      "Full CMS integration",
      "Ongoing support & hosting"
    ]
  }
};
