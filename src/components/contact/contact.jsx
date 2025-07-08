import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react"; // Add to top with other imports
import toast, { Toaster } from "react-hot-toast";
import {
  FaLandmark,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";
import {
  MdEmail,
  MdOutlineMailOutline,
  MdAccessTimeFilled,
  MdLocationPin,
} from "react-icons/md";
import Newsletter from "./NewsLetter";

const Contact = () => {
  // const form = useRef();
  // const [message, setMessage] = useState(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_7xdr5ff", // replace with your EmailJS service ID
  //       "template_y213bwv", // replace with your EmailJS template ID
  //       form.current,
  //       "Gtqw3gCWMS92iu-ew" // replace with your EmailJS public key
  //     )
  //     .then(
  //       (result) => {
  //           toast.success("Thanks for subscribing! 🎉");
  //         form.current.reset();
  //         setTimeout(() => setMessage(null), 4000);
  //       },
  //       (error) => {
  //           toast.error("Something went wrong. Please try again.");
  //         setTimeout(() => setMessage(null), 4000);
  //       }
  //     );
  // };

  return (
    <section className="bg-white">
      {/* Intro Section */}
      <div className="frontPage flex flex-col items-center justify-center max-w-2xl mx-auto p-6 mt-20 mb-20">
        <div className="dialog flex flex-col items-center justify-center text-center">
          <button className="flex items-center justify-center gap-2 mt-6 bg-green-200 text-gray-600 hover:text-green-700 px-3 py-2 rounded-full border">
            <MdEmail size={20} />
            Get in Touch
          </button>
          <h1 className="text-4xl text-green-700 font-bold text-center mt-10 mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-gray-600 text-lg font-serif max-w-xl text-center mb-8">
            We're here to help with any questions about our{" "}
            <span className="text-green-400">products</span>,{" "}
            <span className="text-orange-400">process</span>, or{" "}
            <span className="text-blue-500">partnership</span> opportunities.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="buttons mt-5">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/9779847925779"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-semibold gap-2 px-6 py-4 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition duration-200"
            >
              <FaPhone size={20} />
              <span>+977 9847925779</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gaungharorganic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition duration-200"
            >
              <MdEmail size={18} />
              <span>gaungharorganic@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact ">
        <div className="flex flex-col items-center justify-center mt-10 mb-10">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg font-serif max-w-xl text-center mb-6">
            Choose the most convenient way to connect with our team
          </p>
        </div>

        <div className="cards flex flex-row flex-wrap justify-between items-stretch gap-6 max-w-6xl mx-auto p-6">
          {/* WhatsApp Card */}
          <div className="flex flex-col justify-between items-center text-center bg-white shadow-md rounded-lg p-6 w-72 min-h-[320px]">
            <FaWhatsapp size={50} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">WhatsApp Support</h3>
            <p className="text-gray-500">Quick responses, 24/7 support</p>
            <span className="font-semibold">+977 9847925779</span>
            <a
              href="https://wa.me/9779847925779"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center font-semibold gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition duration-200"
            >
              <FaPhone size={18} />
              <span>Chat Now</span>
            </a>
          </div>

          {/* Email Support Card */}
          <div className="flex flex-col justify-between items-center text-center bg-white shadow-md rounded-lg p-6 w-72 min-h-[320px]">
            <MdOutlineMailOutline size={50} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Email Support</h3>
            <p className="text-gray-500">Fast replies during business hours</p>
            <span className="font-semibold">gaungharorganic@gmail.com</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gaungharorganic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition duration-200"
            >
              <MdEmail size={18} />
              <span>gaungharorganic@gmail.com</span>
            </a>
          </div>

          {/* Business Hours Card */}
          <div className="flex flex-col justify-between items-center text-center bg-white shadow-md rounded-lg p-6 w-72 min-h-[320px]">
            <MdAccessTimeFilled size={50} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Business Hours</h3>
            <span className="text-gray-500">Mon - Fri: 9 AM - 6 PM</span>
            <span>Saturday: 10:00 - 14:00</span>
            <span className="text-gray-500">Sun: Closed</span>
            <div className="flex items-center justify-center mt-4 text-gray-600">
              <MdAccessTimeFilled size={20} className="mr-2" />
              <span>NPT Time Zone</span>
            </div>
          </div>
        </div>

        {/* Last Portion: Social + Visit Us */}
        <div className="lastPortion flex flex-col lg:flex-row gap-6 justify-between max-w-6xl mx-auto p-6">
          {/* Social Card */}
          <div className="left flex-1 bg-white shadow-md rounded-2xl p-6 min-h-[360px]">
            <h1 className="text-3xl font-bold mb-4 text-green-800">
              Connect With Us
            </h1>
            <p className="text-gray-600 text-lg font-serif mb-6">
              Follow us on social media for updates and community events
            </p>

            <div className="buttons flex flex-col gap-4">
              {/* Twitter */}
              <a
                href="https://twitter.com/gaungharorg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
              >
                <div className="flex items-center gap-3">
                  <FaTwitter size={24} />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold">Twitter</span>
                    <span className="text-sm text-gray-600">@gaungharorg</span>
                  </div>
                </div>
                <FaArrowRight className="text-blue-600" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gaungharorganics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition duration-200"
              >
                <div className="flex items-center gap-3">
                  <FaInstagram size={24} />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold">Instagram</span>
                    <span className="text-sm text-gray-600">
                      @gaungharorganics
                    </span>
                  </div>
                </div>
                <FaArrowRight className="text-pink-600" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/GauGharOrganic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition duration-200"
              >
                <div className="flex items-center gap-3">
                  <FaFacebookF size={24} />
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold">Facebook</span>
                    <span className="text-sm text-gray-600">
                      /gaungharorganics
                    </span>
                  </div>
                </div>
                <FaArrowRight className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Visit Us Card */}
          <div className="right flex-1 bg-white shadow-md rounded-2xl p-6 sm:p-8 min-h-[360px]">
            <h1 className="text-3xl font-bold mb-6 text-green-800">
              Visit Our Office
            </h1>

            <div className="location  bg-gray-50 rounded-xl p-5 sm:p-6 flex flex-col gap-5 text-gray-700">
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-red-100">
                  <MdLocationPin size={28} className="text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-green-700 mb-1">
                    Corporate Office
                  </h2>
                  <p className="text-lg text-gray-600 font-thin leading-relaxed">
                    GaunGhar Organic <br />
                    Tamnagar, Butwal 32900 <br />
                    Nepal
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 pl-14">
                <a
                  href="https://www.google.com/maps/place/Saurav+Oil+Mill/@27.685223,83.3922229,17z/data=!3m1!4b1!4m6!3m5!1s0x39968974678fb5a7:0x97edc6e9e819a84d!8m2!3d27.6852183!4d83.3947978!16s%2Fg%2F11qzx6452l?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition"
                >
                  <FaLandmark size={18} />
                  <span>Get Directions</span>
                </a>

                <a
                  href="tel:+97771450026"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition"
                >
                  <FaPhone size={18} />
                  <span>Call Office</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter Section */}
        <Newsletter/>
        {/* <div className="newsletter bg-green-50 py-12 px-6 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Get the latest updates, offers, and community news directly in
              your inbox.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>

            {message && (
              <p className="mt-4 text-green-600 font-medium transition-all duration-300">
                {message}
              </p>
            )}
          </div>
        </div> */}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </section>
  );
};

export default Contact;
