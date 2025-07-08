import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

const team = [
  {
    name: "Dinushan Sriskandaraja",
    role: "Founder & Tech Lead",
    image: "/team/dinushan.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/dinushan",
      github: "https://github.com/dinushan",
      twitter: "https://github.com/dinushan",
    },
  },
  {
    name: "Shan Kavinthan",
    role: "UI/UX Designer",
    image: "/team/shan.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/shank",
    },
  },
  {
    name: "Kavisha Perera",
    role: "Project Manager",
    image: "/team/kavisha.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/kavisha",
    },
  },
  {
    name: "Imesh Jayasinghe",
    role: "Full Stack Developer",
    image: "/team/imesh.jpg",
    socials: {
      github: "https://github.com/imesh",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto mt-28 mb-20  space-y-12">
      {/* Section 1: Story */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-8 sm:p-16 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About <span>TribeTek</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            TribeTek was founded to empower businesses through custom software,
            branding, and smart automation. We believe digital transformation
            should be simple, accessible, and designed for real-world growth.
            Our tribe is made of curious builders who care deeply about every
            project we touch.TribeTek was founded to empower businesses through
            custom software, branding, and smart automation. We believe digital
            transformation should be simple, accessible, and designed for
            real-world growth. Our tribe is made of curious builders who care
            deeply about every project we touch.TribeTek was founded to empower
            businesses through custom software, branding, and smart automation.
            We believe digital transformation should be simple, accessible, and
            designed for real-world growth. Our tribe is made of curious
            builders who care deeply about every project we touch.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/about/tribe-illustration.svg"
            alt="About TribeTek"
            className="w-full max-w-sm mx-auto"
          />
        </div>
      </section>

      {/* Section 2: Team */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-8 sm:p-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Meet Our Core Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-3xl p-6 shadow text-center hover:shadow-lg transition-all duration-300">
              <Image
                src="/path/to/image.jpg"
                alt="description"
                width={500}
                height={300}
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-500 text-xl">
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-[#ED4716]" />
                  </a>
                )}
                {member.socials?.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub className="hover:text-[#ED4716]" />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaTwitter className="hover:text-[#ED4716]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
