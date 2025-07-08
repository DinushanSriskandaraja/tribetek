export default function HeroSection() {
  return (
    <section className="container mx-auto  pt-10">
      <div className="bg-white rounded-4xl px-6 md:px-16 py-10 md:py-20 shadow-lg border border-gray-100 transition-all duration-300">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 max-w-xl md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Let’s transform your business into a digital powerhouse.
        </h1>

        <p className="text-base md:text-xl text-gray-600 mb-8 max-w-md md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          We build software that grows with your business
          <br className="hidden md:block" />
          custom systems, brand impact, and real results.
        </p>

        <div className="flex flex-col sm:flex-row  gap-4 justify-center md:justify-start">
          <a
            href="/contact"
            className="px-6 py-3 bg-[#ED4716] text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-200 text-center">
            Contact Us
          </a>
          <a
            href="/products"
            className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-full hover:bg-gray-100 transition duration-200 text-center">
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}
