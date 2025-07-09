import React from "react";
import LogoNepali from "../../assets/images/croppedNepali.png"
import { FaWhatsapp, FaCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const products = [
  { name: "Organic Mustard Oil (500 ml)", link: "/shop" },
  { name: "Organic Mustard Oil (1l)", link: "/shop" },
  { name: "Organic Mustard Oil (5l)", link: "/shop" },
  { name: "Organic Mustard Oil (10l)", link: "/shop" },
  { name: "Organic Mustard Oil (20l)", link: "/shop" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      {/* Top Footer Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Logo and Promo */}
          <div className="flex items-center gap-1 md:gap-4">
            <img
              src={LogoNepali}
              alt="Logo of GauGhar"
              className=" w-24 h-24 md:w-32 md:h-32 object-contain"
            />
            <div>
              <h2 className=" text-2xl md:text-4xl font-thin mb-4">
                From Our Village To Your Kitchen!
              </h2>
              <p className="text-gray-600 text-sm">
                We'll share a sattvik recipe and a customised discount with you
                every month. No spam.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-sm text-gray-700 space-y-4">
            <h2 className="text-3xl md:text-4xl font-thin mb-2">Contact Us</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gaungharorganic@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition duration-200"
              >
                <MdEmail size={18} />
                <span>gaungharorganic@gmail.com</span>
              </a>

              <a
                href="https://wa.me/9779847925779"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition duration-200"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 md:flex md:justify-end">
          <div className="text-left md:text-right">
            <h2 className="text-xl font-medium mb-3">Our Products</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {products.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-black hover:font-medium hover:underline transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t bg-gray-100 text-left md:text-center text-sm text-gray-600 py-4 px-4">
        <ul className="flex flex-col md:flex-row md:justify-center items-start md:items-center gap-2 md:gap-24">
          <li>
            <a href="/return-policy" className="hover:underline">
              Return & Cancellation Policy
            </a>
          </li>
          <li>
            <a href="/shipping-policy" className="hover:underline">
              Shipping Policy
            </a>
          </li>
          <li className="flex items-center gap-1">
            <FaCopyright size={14} />
            <span>GaunGhar Organic   - All Rights Reserved!</span>
          </li>
          <li>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
