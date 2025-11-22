import Image from "next/image";

const products = [
  {
    name: "G-POS",
    description: "A modern cloud-based POS for retail and restaurants.",
    image: "/products/gpos.jpg", // Replace with your actual path
    link: "/products/gpos",
  },
  {
    name: "Avers LMS",
    description: "Smart LMS powered by AI for modern student engagement.",
    image: "/products/avers.jpg",
    link: "/products/avers",
  },
  {
    name: "Love Insurance",
    description: "A unique policy platform for couples before marriage.",
    image: "/products/love-insurance.jpg",
    link: "/products/love-insurance",
  },
  {
    name: "Hortiiv",
    description:
      "Connecting farmers with direct customers via mobile-first UX.",
    image: "/products/hortiiv.jpg",
    link: "/products/hortiiv",
  },
  {
    name: "Ruuter",
    description: "AI-led virtual teaching assistant and classroom automation.",
    image: "/products/ruuter.jpg",
    link: "/products/ruuter",
  },
  {
    name: "GroundBookr",
    description: "Indoor sports ground booking system with calendar UI.",
    image: "/products/groundbookr.jpg",
    link: "/products/groundbookr",
  },
];

export default function ProductsSection() {
  return (
    <section className="container mx-auto py-16 px-6 sm:px-16 bg-white rounded-4xl shadow-lg border border-gray-100">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-left text-gray-900">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="bg-[#f2f2f2] rounded-3xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <span className="text-[#ED4716] font-medium hover:underline">
                  View Product →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
