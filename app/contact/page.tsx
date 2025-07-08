import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="container bg-white py-12 mx-auto mt-24 rounded-4xl mb-20 px-6 sm:px-16">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 text-left ">
        Get in Touch
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 mb-12 text-center">
        {/* Social Media - 1 column each */}
        <a
          href="https://instagram.com/tribetek"
          target="_blank"
          className="p-6 bg-[#f2f2f2] rounded-3xl shadow-md hover:shadow-lg transition">
          <FaInstagram size={36} className="text-[#ED4716]  mx-auto mb-3" />
          <h3 className="text-lg font-semibold">Instagram</h3>
          <p className="text-gray-600 text-sm">@tribetek</p>
        </a>

        <a
          href="https://linkedin.com/company/tribetek"
          target="_blank"
          className="p-6 bg-[#f2f2f2] rounded-3xl shadow-md hover:shadow-lg transition">
          <FaLinkedin size={36} className="text-[#ED4716] mx-auto mb-3" />
          <h3 className="text-lg font-semibold">LinkedIn</h3>
          <p className="text-gray-600 text-sm">TribeTek</p>
        </a>

        <a
          href="https://twitter.com/tribetek"
          target="_blank"
          className="p-6 bg-[#f2f2f2] rounded-3xl shadow-md hover:shadow-lg transition">
          <FaTwitter size={36} className="text-[#ED4716] mx-auto mb-3" />
          <h3 className="text-lg font-semibold">Twitter</h3>
          <p className="text-gray-600 text-sm">@tribetek</p>
        </a>

        <a
          href="https://facebook.com/tribetek"
          target="_blank"
          className="p-6 bg-[#f2f2f2] rounded-3xl shadow-md hover:shadow-lg transition">
          <FaFacebook size={36} className="text-[#ED4716] mx-auto mb-3" />
          <h3 className="text-lg font-semibold">Facebook</h3>
          <p className="text-gray-600 text-sm">TribeTek Official</p>
        </a>

        {/* Email block - spans all 4 columns */}
        <div className="col-span-2 sm:col-span-4 p-6 bg-[#f2f2f2] rounded-3xl shadow-md text-center">
          <FaEnvelope size={36} className="text-[#ED4716] mx-auto mb-3" />
          <h3 className="text-lg font-semibold">Email Us</h3>
          <p className="text-gray-600 text-sm">hello@tribetek.tech</p>
        </div>
      </div>
    </section>
  );
}
