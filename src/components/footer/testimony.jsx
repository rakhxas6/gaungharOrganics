import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalf } from "react-icons/fa";

const testimonials = [
  {
    name: "Sita Rai",
    location: "Kathmandu",
    rating: 5,
    text: "GauGhar oils are pure and full of flavor. It reminds me of traditional homemade ghee.",
  },
  {
    name: "Ram Thapa",
    location: "Pokhara",
    rating: 4,
    text: "I’m impressed with the freshness of their cold-pressed coconut oil. Highly recommended!",
  },
  {
    name: "Anita Sharma",
    location: "Biratnagar",
    rating: 5,
    text: "Great products with excellent packaging. The mustard oil has a rich aroma I love.",
  },
  {
    name: "Hari Lama",
    location: "Lalitpur",
    rating: 4,
    text: "I use their herbal ghee daily. It's pure and tastes amazing on roti and rice.",
  },
  {
    name: "Hari Lama",
    location: "Lalitpur",
    rating: 4,
    text: "I use their herbal ghee daily. It's pure and tastes amazing on roti and rice.",
  },
  {
    name: "Hari Lama",
    location: "Lalitpur",
    rating: 4,
    text: "I use their herbal ghee daily. It's pure and tastes amazing on roti and rice.",
  },
];

const TestimonialCarousel = () => {
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
    <div className="testimonial-carousel max-w-6xl mx-auto px-4 py-8 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-green-600 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Thousands of families across Nepal have made the switch to our clean,
          nutritious oils. Here's what they have to say.
        </p>
      </div>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="p-4 h-full">
            <div className="bg-gray-50 rounded-lg p-6 h-full min-h-[200px] flex flex-col justify-between shadow hover:shadow-lg transition">
              <div>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) =>
                    star <= item.rating ? (
                      <FaStar key={star} className="text-yellow-400 w-5 h-5" />
                    ) : (
                      <FaStarHalf
                        key={star}
                        className="text-yellow-400 w-5 h-5 opacity-50"
                      />
                    )
                  )}
                </div>
                <p className="text-gray-700 italic mb-4">"{item.text}"</p>
              </div>
              <div className="text-sm text-gray-500 font-semibold mt-4">
                — {item.name}, {item.location}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
