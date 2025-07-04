// AboutUs.tsx
'use client';
import Image from "next/image";

export default function AboutUs() {
  const founders = [
    { name: "Dinushan Sriskandaraja", photo: "/images/dinushan.jpg" },
    { name: "Co-Founder 2", photo: "/images/cofounder2.jpg" },
    { name: "Co-Founder 3", photo: "/images/cofounder3.jpg" },
  ];

  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      {/* About TribeTek */}
      <div className="flex flex-col items-center mb-12">
        <Image
          src="/images/tribetek.jpg"
          alt="TribeTek"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h2 className="text-4xl font-bold text-orange-500 mt-6">About TribeTek</h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl">
          At TribeTek, we are passionate about innovation and collaboration. Our goal is to transform ideas into impactful solutions, helping businesses thrive in the digital age. Together, we transcend boundaries and achieve excellence.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {founders.map((founder, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
          >
            <Image
              src={founder.photo}
              alt={founder.name}
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-orange-500">{founder.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
