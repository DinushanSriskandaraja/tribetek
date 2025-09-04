export default function HeroSection() {
  return (
    <section className="container mx-auto  pt-10">
      <div className="bg-white rounded-4xl px-6 md:px-16 py-10 md:py-20 shadow-lg border border-gray-100 transition-all duration-300">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 max-w-xl md:max-w-5xl mx-auto md:mx-0 text-center md:text-left">
          AI Software Solutions, Mobile Apps & Digital Transformation Solutions for Businesses
        </h1>

        <p className="text-base md:text-xl text-gray-600 mb-8 max-w-md md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Build Faster, Smarter, and Scalable Solutions with Tribetek
        </p>

        <div className="flex flex-col sm:flex-row  gap-4 justify-center md:justify-start">
          <a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-[#ED4716] to-[#FF6B2C] text-white font-bold rounded-full shadow-md hover:bg-orange-600 transition duration-200 text-center">
            Lets Talk
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
