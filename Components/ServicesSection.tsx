import {
  FaCode,
  FaCogs,
  FaBullhorn,
  FaSyncAlt,
  FaLightbulb,
  FaPencilRuler,
} from "react-icons/fa";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Beautiful, fast, and responsive websites tailored for your brand.",
    href: "/services/website-development",
    icon: <FaCode className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Custom Software Development",
    description:
      "We build scalable and secure software that powers businesses.",
    href: "/services/software-development",
    icon: <FaCogs className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Digital Marketing & Branding",
    description:
      "Grow your online presence with smart strategy and stunning design.",
    href: "/services/digital-marketing",
    icon: <FaBullhorn className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "End-to-End Digital Transformation",
    description:
      "We systemize your manual operations and optimize performance.",
    href: "/services/digital-transformation",
    icon: <FaSyncAlt className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Tech Consulting",
    description:
      "Expert guidance to help you choose the right digital solutions.",
    href: "/services/consulting",
    icon: <FaLightbulb className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Modern interfaces that keep users engaged and experiences intuitive.",
    href: "/services/ui-ux",
    icon: <FaPencilRuler className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="container rounded-4xl mx-auto py-10 px-6 sm:p-16  bg-white shadow-lg border border-gray-100 transition-all duration-300">
      <div className="mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-left text-gray-900">
          We are experts in
        </h2>

        <div className="grid gap-12 grid-flow-row md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="bg-[#f2f2f2] rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between max-w-[600px] w-auto hover:bg-gray-100 cursor-pointer">
              <div className="flex flex-col gap-4 h-full">
                <div className="flex justify-between items-end">
                  {/* <h3 className="text-3xl font-semibold text-gray-800">
                    {service.title}
                  </h3> */}
                  {service.icon}
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  {/* {service.icon} */}
                </div>
                <p className="text-gray-600 text-xl">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
