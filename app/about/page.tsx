import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";
import AboutUsImage from "../../assets/AboutUs.webp";
import Dinushan from "../../assets/Dinushan.jpg";
import Kenisan from "../../assets/Kenisan.jpg";
import Thigshi from "../../assets/Thigshi.jpg";

const team = [
  {
    name: "Dinushan Sriskandaraja",
    role: "Founder & Tech Lead",
    image: Dinushan,
    socials: {
      linkedin: "https://www.linkedin.com/in/dinushansriskandaraja/",
      github: "https://github.com/DinushanSriskandaraja",
      twitter: "https://x.com/sri_dinu",
    },
  },
  {
    name: "Kenisan Sanmugathasan",
    role: "Co-Founder & Business Lead",
    image: Kenisan,
    socials: {
      linkedin: "https://www.linkedin.com/in/kenisan-sanmugathasan-585646320/",
      github: "https://github.com/Ken7373",
    },
  },
  {
    name: "Thigshi Vigneswaramoorthy",
    role: "Intern - Full Stack Developer",
    image: Thigshi,
    socials: {
      linkedin:
        "https://www.linkedin.com/in/thigshicca-vigneshwaramoorthy-a5aa7823a/",
      github: "https://github.com/THIGSHICCA",
    },
  },
  // {
  //   name: "Imesh Jayasinghe",
  //   role: "Full Stack Developer",
  //   image: "/team/imesh.jpg",
  //   socials: {
  //     github: "https://github.com/imesh",
  //   },
  // },
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
            TribeTek began as a bootstrap agency, building digital products for
            clients while working hard to create our own innovations. As
            engineers first, we’ve always focused on crafting clean, scalable
            solutions that solve real problems. Without outside funding, we
            relied on grit and passion, turning late nights and simple spaces
            into powerful technology. Today, while continuing to serve as a
            trusted digital agency, we’re also committed to building our own
            products and partnering with innovators and entrepreneurs who share
            our drive. If you have a bold idea and a real challenge to solve,
            we’re ready to build it with you.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <Image
            width={1200}
            height={10000}
            src={AboutUsImage}
            alt="About TribeTek"
            className="object-cover rounded-3xl"
          />
        </div>
      </section>

      {/* Section 2: Team */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-8 sm:p-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Meet Our Core Team
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-3xl p-6 shadow text-center hover:shadow-lg transition-all duration-300">
              <Image
                src={member.image}
                alt="description"
                // width={500}
                // height={300}
                className=" rounded-2xl  grayscale mb-4 object-cover"
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
