import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { FaSeedling, FaUsers, FaLeaf, FaSmile, FaStar } from "react-icons/fa"; // Icons
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FiAlertTriangle } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function OurStory() {
  const navigate = useNavigate();
  const journeyRef = useRef(null);

  const stats = [
    {
      value: 4,
      suffix: "+",
      label: "Years of Research",
      icon: <FaSeedling size={36} className="text-green-700 mb-2" />,
    },
    {
      value: 1000,
      suffix: "+",
      label: "Farmer Partners",
      icon: <FaUsers size={36} className="text-green-700 mb-2" />,
    },
    {
      value: 100,
      suffix: "%",
      label: "Organic Certified",
      icon: <FaLeaf size={36} className="text-green-700 mb-2" />,
    },
    {
      value: 10000,
      suffix: "+",
      label: "Happy Customers",
      icon: <FaSmile size={36} className="text-green-700 mb-2" />,
    },
  ];

  const clickHandle = () => {
    navigate("/shop");
  };

  return (
    <div className="text-gray-800 font-sans">
      <section className="hero flex flex-col md:flex-row items-center px-4 md:px-8 lg:px-16 py-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-2 md:px-6 lg:px-12 py-6 md:py-10">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 bg-green-200 bg-opacity-60 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              <FaStar size={16} />
              Our Mission
            </span>
          </div>
          <div className="mb-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 font-mono leading-tight mb-3">
              Bringing Real Food Back to Nepal
            </h1>
            <div className="h-1.5 bg-green-500 w-24 md:w-32"></div>
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            We're on a mission to restore the authenticity of Nepali food, one
            ingredient at a time, through traditional methods and direct farmer
            partnerships.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                journeyRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition text-sm md:text-base"
            >
              Read Our Story
            </button>
            <button
              onClick={clickHandle}
              className="border border-green-600 text-green-600 px-5 py-3 rounded-md hover:bg-green-50 transition text-sm md:text-base"
            >
              Shop Pure Foods
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative group overflow-hidden rounded-xl shadow-md h-[280px] sm:h-[320px] md:h-[400px]">
          <img
            src="https://www.vedikaorganics.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1596040033229-a9821ebd058d%3Fq%3D80%26w%3D2940&w=640&q=75"
            alt="masala"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-white text-center py-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm md:text-base font-medium">
              Discover the authentic taste of traditional Nepali ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-green-50 rounded-2xl shadow-lg p-6 hover:scale-105 transition transform duration-300"
              >
                {item.icon}
                <h4 className="text-4xl md:text-5xl font-bold text-green-800 mb-1">
                  <CountUp end={item.value} duration={3} />
                  {item.suffix}
                </h4>
                <p className="text-md text-gray-600 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={journeyRef}>
        <div className="py-16 px-6">
          {/* Header */}
          <div className="max-w-6xl mx-auto text-center mb-12">
            <div className="flex justify-center mb-6">
              <button className="flex items-center justify-center gap-2 bg-amber-200 text-black hover:bg-amber-500 px-4 py-2 rounded-full transition duration-300">
                <IoInformationCircleOutline size={18} className="text-black" />
                Our Journey
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Story Behind{" "}
              <span className="text-amber-800">GaunGhar Organics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey from realization to revolution in Nepali food
            </p>
          </div>

          {/* First Card */}
          <div className="flex flex-col md:flex-row items-center border-b border-gray-100  border-opacity-65 gap-4 max-w-6xl mx-auto rounded-2xl px-4 md:px-20 py-10">
            {/* Left Text */}
            <div className="md:w-[45%] px-6 ">
              <div className="flex items-center gap-4 mb-6">
                <FiAlertTriangle
                  size={42}
                  className="text-red-600 bg-gray-200 p-2 rounded-lg"
                />
                <h3 className="text-2xl font-medium">
                  The <span className="text-red-600">Problem</span>
                </h3>
              </div>
              <p className="mb-6 mt-6 text-gray-700 text-lg font-light">
                Eating real food has become a luxury. From{" "}
                <span className="text-red-600 font-thin">fake ketchup</span> to{" "}
                <span className="text-red-600 font-thin">
                  adulterated spices
                </span>
                , our daily food is far from what it should be.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "Widespread food adulteration",
                  "Loss of traditional methods",
                  "Profit over health mindset",
                  "Compromised food quality",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0"></div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-[55%] relative overflow-hidden">
              <div className="relative w-full h-full md:h-[60vh] sm:aspect-video rounded-tr-[30px] rounded-br-[30px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1920"
                  alt="Modern Food Processing"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-lg p-4 text-center">
                  Modern food processing has compromised quality
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col md:flex-row items-center border-b border-gray-100  border-opacity-65 gap-4 max-w-6xl mx-auto rounded-2xl px-4 md:px-20 py-10">
            {/* Left Image */}
            <div className="md:w-[55%] relative overflow-hidden">
              <div className="relative w-full h-full md:h-[60vh] sm:aspect-video rounded-bl-[30px] rounded-tl-[30px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1920"
                  alt="Traditional Methods"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-lg p-4 text-center">
                  Traditional methods preserved food quality
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="md:w-[45%] px-6">
              <div className="flex items-center gap-4 mb-6">
                <AiOutlineThunderbolt
                  size={42}
                  className="text-yellow-500 bg-gray-200 p-2 rounded-lg"
                />
                <h3 className="text-2xl font-medium">
                  The <span className="text-yellow-500">Wake-Up Call</span>
                </h3>
              </div>
              <p className="mb-6 mt-6 text-gray-700 text-lg font-light">
                Health crises often serve as our wake-up calls. When{" "}
                <span className="text-yellow-600">loved ones fall ill</span>, we
                realize the true cost of compromising on food quality.
              </p>
              <p className="bg-pink-100 bg-opacity-70 border-l-8 border-yellow-400 p-7 mt-8 rounded-l-3xl">
                "No amount of money is too much when health is at stake. Yet, we
                compromise daily on the quality of our food."
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex flex-col md:flex-row items-center border-b border-gray-100  border-opacity-65 gap-4 max-w-6xl mx-auto rounded-2xl px-4 md:px-20 py-10">
            {/* Left Text */}
            <div className="md:w-[45%] px-6">
              <div className="flex items-center gap-4 mb-6">
                <FaRegCircleCheck
                  size={42}
                  className="text-green-500 bg-gray-200 p-2 rounded-lg"
                />
                <h3 className="text-2xl font-medium">
                  Our <span className="text-green-500">Solution</span>
                </h3>
              </div>
              <p className="mb-6 mt-6 text-gray-700 text-lg font-light">
                We're bringing back{" "}
                <span className="text-green-600 font-light">
                  traditional cold-pressed oils
                </span>
                , working directly with farmers, and ensuring every product
                meets the highest quality standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "100% organic certification",
                  "Traditional wood pressing",
                  "Direct farmer partnerships",
                  "Rigorous quality testing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-[55%] relative overflow-hidden">
              <div className="relative w-full h-full md:h-[60vh]  sm:aspect-video rounded-tr-[30px] rounded-br-[30px] overflow-hidden">
                <img
                  src="https://www.vedikaorganics.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1593179241557-bce1eb92e47e%3Fq%3D80%26w%3D2940&w=1920&q=75"
                  alt="Organic Oils"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-lg p-4 text-center">
                  Traditional methods preserve nutrients and authenticity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section>
        <div className="bg-gray-100 py-16 px-6 ">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <span className="flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-900 px-4 py-2 rounded-full transition duration-300">
                <AiOutlineThunderbolt size={18} className="text-yellow-400" />
                Join the Revolution
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              This Is More Than Business
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We're fighting for the future of Nepali food. Every purchase is a
              vote for better, healthier, more authentic ingredients.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <button
                onClick={clickHandle}
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300"
              >
                Explore Our Products
              </button>
              <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
