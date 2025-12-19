import Dinu from "@/assets/Dinushan.jpg";
export type Employee = {
  username: string;
  name: string;
  role: string;
  image: string;
  location?: string;
  bio: string;
  links: {
    label: string;
    url: string;
  }[];
  socials: {
    platform: string;
    url: string;
  }[];
  skills: string[];
};

export const employees = [
  {
    username: "dinushan",
    name: "Dinushan Sriskandaraja",
    role: "Founder & Engineer",
    location: "Sri Lanka",
    image: Dinu,
    email: "hello@tribetek.com",
    portfolio: "https://tribetek.com",
    bio: "Passionate tech entrepreneur focused on building scalable AI-powered software solutions for startups and enterprises.",
    skills: ["Next.js", "AI Automation", "UI/UX", "System Design"],
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "GitHub", url: "https://github.com" },
      { platform: "Instagram", url: "https://instagram.com" },
    ],
  },
];
