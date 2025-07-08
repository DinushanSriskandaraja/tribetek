import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto  px-6 sm:px-16 py-12 bg-white rounded-t-4xl shadow-md">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">TribeTek</h3>
          <p className="text-sm text-gray-700">
            We build digital experiences that drive results — from systems to
            strategy.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-gray-700">
            <li>
              <Link
                href="/services"
                className="hover:text-[#ED4716] transition">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-[#ED4716] transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#ED4716] transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#ED4716] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact</h4>
          <p className="text-sm text-gray-700 mb-1">Colombo, Sri Lanka</p>
          <p className="text-sm text-gray-700 mb-1">hello@tribetek.tech</p>
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Instagram">
              <svg
                className="w-5 h-5 fill-gray-600 hover:fill-[#ED4716] transition"
                viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-xs text-gray-500 text-center mt-10 pt-6 border-t border-gray-300">
        © {new Date().getFullYear()} TribeTek. All rights reserved.
      </div>
    </footer>
  );
}
