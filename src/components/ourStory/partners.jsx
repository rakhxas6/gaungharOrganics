import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    name: "Apple",
    tagline: "Think Different",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Nike",
    tagline: "Just Do It",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Google",
    tagline: "Organize the world’s information",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    tagline: "From A to Z",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    tagline: "Empowering every person and every organization",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
];

const PartnersCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-green-600">
          Trusted By Industry Leaders
        </h2>
      </div>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center shadow hover:shadow-lg transition">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{partner.name}</h3>
              <p className="text-sm text-gray-500 italic text-center">
                "{partner.tagline}"
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
