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
    title: "SEO-Friendly, Responsive Websites",
    description:
      "We design and develop lightning-fast websites optimized for performance, user experience, and SEO, tailored to elevate your brand online.",
    href: "/services/website-development",
    icon: <FaCode className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Scalable Business Software Solutions",
    description:
      "From internal tools to full-scale platforms, we build secure, custom software that simplifies workflows and fuels business growth.",
    href: "/services/software-development",
    icon: <FaCogs className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Digital Growth Through Marketing & Brand Strategy",
    description:
      "Boost your visibility with data-driven digital marketing and design. We help businesses craft a bold online identity and attract ideal customers.",
    href: "/services/digital-marketing",
    icon: <FaBullhorn className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Manual to Digital: Full Business Systemization",
    description:
      "We transform outdated processes into efficient digital systems, integrating custom solutions to improve performance and reduce effort.",
    href: "/services/digital-transformation",
    icon: <FaSyncAlt className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "Technology Strategy & Digital Advisory",
    description:
      " Get expert advice on choosing, planning, and implementing the right tech stack for your business needs and growth goals.",
    href: "/services/consulting",
    icon: <FaLightbulb className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
  {
    title: "AI-Powered Business Solutions",
    description:
      "We build smart AI tools and automations that streamline your operations — from predictive systems to chatbots, and business intelligence dashboards.",
    href: "/services/ui-ux",
    icon: <FaPencilRuler className="text-[#ED4716] w-10 h-10 ml-auto" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="container rounded-4xl mx-auto py-10 px-6 sm:p-16  bg-white shadow-lg border border-gray-100 transition-all duration-300">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-left text-gray-900">
          What TribeTek Can Do for Your Business
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
