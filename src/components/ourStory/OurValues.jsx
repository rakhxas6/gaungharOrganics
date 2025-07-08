import React, { useEffect } from "react";
import { cards, core } from "../../data/products";
import AOS from "aos";
import "aos/dist/aos.css";

const OurValues = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      {/* Hero */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1612002714637-5936f7757295?q=80&w=1032")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-white px-6" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Values</h1>
          <p className="max-w-xl mx-auto text-lg">
            Guided by nature, crafted with care, reaching hearts and homes.
          </p>
        </div>
      </section>

      {/* SVG Divider */}
      <svg viewBox="0 0 1440 100" className="-mt-1">
        <path fill="#ffffff" d="M0,32L60,48C120,64,240,96,360,101..."></path>
      </svg>

      {/* Mission/Vision/Promise */}
      <section className="py-20 bg-gradient-to-r from-[#fefce8] to-[#fef9c3] px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            className="text-4xl font-serif text-yellow-900 mb-4"
            data-aos="fade-down"
          >
            Rooted Beliefs, Bold Commitments
          </h2>
          <p
            className="text-lg text-yellow-800 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our foundation lies in purpose, purity, and promise. Here’s what
            fuels our every step.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-xl border border-yellow-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-yellow-100 rounded-full mb-6 shadow-sm">
                <Icon className="text-yellow-600 text-4xl" />
              </div>
              <div className="text flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SVG Divider */}
      <svg className="-mb-1" viewBox="0 0 1440 100">
        <path
          fill="#f7fafc"
          d="M0,32L60,48C120,64,240,96,360,101C480,107,600,85,720,69.3C840,53,960,43,1080,53.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* Core Values */}
      <section className="py-20 bg-[#f7fafc] px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2
            className="text-4xl font-serif text-green-900 mb-4"
            data-aos="fade-down"
          >
            What We Stand For
          </h2>
          <p
            className="text-lg text-green-800 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Beyond the bottle or the bag lies intention — sustainable, soulful,
            and sincere.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {core.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-green-100 rounded-full mb-6 shadow-sm">
                <Icon className="text-green-600 text-4xl" />
              </div>
              <div className="text flex flex-col items-center justify-center">
                <h3 className="text-2xl font-semibold text-yellow-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white text-center px-6">
        <h2 className="text-3xl mb-4" data-aos="fade-down">
          Join Our Green Journey
        </h2>
        <p className="max-w-lg mx-auto mb-8" data-aos="fade-up">
          Be part of a mindful, sustainable future. Together we grow.
        </p>
        <button
          className="px-8 py-3 bg-yellow-500 rounded-full font-semibold hover:bg-yellow-600 transition"
          data-aos="zoom-in"
        >
          Get Involved
        </button>
      </section>
    </div>
  );
};

export default OurValues;
