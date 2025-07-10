import Image from "next/image";
import C1 from "../assets/C1.jpg";
import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";

const testimonials = [
  {
    name: "Niranjan Fernando",
    role: "CEO, Nexon Tech",
    quote:
      "TribeTek helped us digitize our entire process. What used to take days now takes minutes. Their team truly understands business and tech.",
    avatar: C1,
  },
  {
    name: "Dilini Perera",
    role: "Marketing Head, Luxe Studios",
    quote:
      "Their branding and automation ideas were game-changing for us. Super easy to work with and delivers above expectations.",
    avatar: C2,
  },
  {
    name: "Shanaka Mendis",
    role: "Founder, AgroLink",
    quote:
      "Our entire farming supply chain is now online thanks to TribeTek. They’re not just developers—they’re true partners.",
    avatar: C3,
  },
  {
    name: "Hasan Rauf",
    role: "CTO, BizCore Global",
    quote:
      "We saw a 60% improvement in operational efficiency. They helped us scale with the right tools and clean interfaces.",
    avatar: C3,
  },
];

export default function TestimonialSection() {
  return (
    <section className="container mx-auto py-16 px-6 sm:px-16 bg-white rounded-4xl shadow-lg border border-gray-100">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-left text-gray-900">
          What our clients say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First testimonial - spans 2 cols */}
          <div className="md:col-span-2 bg-[#f2f2f2] rounded-3xl p-6 shadow-md flex flex-col justify-between">
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              “{testimonials[0].quote}”
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[0].avatar}
                alt={testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">
                  {testimonials[0].name}
                </p>
                <p className="text-sm text-gray-500">{testimonials[0].role}</p>
              </div>
            </div>
          </div>

          {/* Testimonials 2, 3, and 4 */}
          {testimonials.slice(1).map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[#f2f2f2] rounded-3xl p-6 shadow-md flex flex-col justify-between">
              <p className="text-gray-700 mb-4 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
