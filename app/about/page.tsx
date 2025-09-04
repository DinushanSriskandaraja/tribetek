"use client";

// import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaBullseye, FaEye } from "react-icons/fa6";
import Image from "next/image";
import AboutUsImage from "../../assets/AboutUs.webp";
// import Dinushan from "../../assets/Dinushan.jpg";
// import Kenisan from "../../assets/Kenisan.jpg";
// import Thigshi from "../../assets/Thigshi.jpg";

// const team = [
//   {
//     name: "Dinushan Sriskandaraja",
//     role: "Founder & Tech Lead",
//     image: Dinushan,
//     socials: {
//       linkedin: "https://www.linkedin.com/in/dinushansriskandaraja/",
//       github: "https://github.com/DinushanSriskandaraja",
//       twitter: "https://x.com/sri_dinu",
//     },
//   },
//   {
//     name: "Kenisan Sanmugathasan",
//     role: "Co-Founder & Business Lead",
//     image: Kenisan,
//     socials: {
//       linkedin: "https://www.linkedin.com/in/kenisan-sanmugathasan-585646320/",
//       github: "https://github.com/Ken7373",
//     },
//   },
//   {
//     name: "Thigshi Vigneswaramoorthy",
//     role: "Intern - Full Stack Developer",
//     image: Thigshi,
//     socials: {
//       linkedin:
//         "https://www.linkedin.com/in/thigshicca-vigneshwaramoorthy-a5aa7823a/",
//       github: "https://github.com/THIGSHICCA",
//     },
//   },
// ];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-6 sm:p-16 space-y-20 mt-20">
      {/* Hero Section */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-16 text-center space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          About <span className="md:text-left text-[#ED4716]">TribeTek</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We are a bootstrap-born agency that builds digital solutions for
          clients while crafting our own innovations.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-8 sm:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            TribeTek began as a bootstrap agency, building digital products for
            clients while working hard to create our own innovations. As
            engineers first, we’ve always focused on crafting clean, scalable
            solutions that solve real problems. Without outside funding, we
            relied on grit and passion, turning late nights and simple spaces
            into powerful technology. Today, while continuing to serve as a
            trusted digital agency, we’re also committed to building our own
            products and partnering with innovators and entrepreneurs who share
            our drive.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md">
          <Image
            width={1200}
            height={800}
            src={AboutUsImage}
            alt="About TribeTek"
            className="object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-8 sm:p-16 space-y-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Mission & Vision
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="bg-[#f2f2f2] rounded-3xl p-10 shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <FaBullseye className="text-5xl text-[#ED4716] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver scalable, impactful, and clean digital solutions that
              empower businesses and individuals to succeed.
            </p>
          </div>
          <div className="bg-[#f2f2f2] rounded-3xl p-10 shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <FaEye className="text-5xl text-[#ED4716] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a global tech partner known for innovation, integrity, and
              transforming bold ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white rounded-4xl shadow-lg border border-gray-100 p-8 sm:p-16 space-y-10">
        <h2 className="text-3xl font-bold text-black  text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Innovation",
              desc: "We thrive on creativity and forward thinking.",
            },
            {
              title: "Collaboration",
              desc: "We believe teamwork sparks great solutions.",
            },
            {
              title: "Integrity",
              desc: "We stay true to our values and commitments.",
            },
          ].map((value, idx) => (
            <div
              key={idx}
              className="bg-[#f2f2f2] rounded-3xl p-8 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
