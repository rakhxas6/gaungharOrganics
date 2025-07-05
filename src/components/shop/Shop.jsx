import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import DemoImg from "../../assets/images/Wood_Pressed_xe62sr.webp";
import FAQ from "../footer/faq";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import DemoProduct from "../../assets/images/Wood_Pressed_xe62sr.webp"

// Product data
const products = [
  {
    id: 1,
    title: "Organic Cold Pressed Mustard Oil",
    basePrice: 250,
    totalReviews: 120,
    rating: 4.5,
    image: DemoProduct,
    pricesBySize: {
      "1 litre": 380,
      "500 ml": 200,
      "5 litre": 1950,
    },
  },
];

// Slugify for URLs
const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedSizes, setSelectedSizes] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = "1 litre";
      return acc;
    }, {})
  );

  const handleSizeClick = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const clickHandler = (title) => {
    navigate(`/shop/${toSlug(title)}`);
  };

  return (
    <section className="py-16 px-6 min-h-screen max-w-7xl mx-auto ">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-100 text-green-600 font-semibold text-lg rounded-full border border-green-200 mb-4">
          <RiStarFill size={18} />
          Our Collection
          <RiStarFill size={18} />
        </div>
        <h1 className="text-3xl md:text-4xl text-green-800 font-extrabold leading-tight font-serif mb-4">
          Discover Our Collection of Premium Organic Oils
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Each product is crafted with care using traditional wooden cold-press
          methods to preserve nature’s richness.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-0  justify-center">
        {products.map((p) => {
          const selectedSize = selectedSizes[p.id];
          const price = p.pricesBySize[selectedSize] ?? p.basePrice;

          return (
            <div
              key={p.id}
              className="w-full max-w-[560px] bg-white rounded-2xl shadow-md transition-shadow duration-300 p-6 flex flex-col sm:flex-row gap-6 mx-auto"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-full sm:w-[185px] h-[280px] rounded-xl overflow-hidden border border-gray-100 mx-auto sm:mx-0">
                <img
                  src={DemoImg}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Info Section */}
              <div className="flex flex-col justify-between flex-1">
                {/* Title & Rating */}
                <div>
                  <button
                    onClick={() => clickHandler(p.title)}
                    className="text- font-semibold text-green-800 mb-3 hover:underline flex items-center gap-1"
                  >
                    {p.title}
                    <GoArrowUpRight size={18} />
                  </button>
                  <div className="star mb-4 flex items-center gap-2 whitespace-nowrap">
                    <span className="text-2xl text-yellow-500 leading-none">
                      ★★★★★
                    </span>
                    <p className="font-semibold text-sm mt-1">
                      {p.rating} ({p.totalReviews})
                    </p>
                  </div>

                  {/* Size Selection */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {Object.keys(p.pricesBySize).map((size) => (
                      <button
                        key={size}
                        onClick={() => handleSizeClick(p.id, size)}
                        className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                          selectedSize === size
                            ? "bg-green-700 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-green-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price & Buttons */}
                <div>
                  <p className="text-2xl font-medium text-green-800 mb-4">
                    <span className="font-semibold">रु </span>
                    {price}/-
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => clickHandler(p.title)}
                      className="flex-1 text-center border border-gray-300 text-gray-700 py-2 rounded-lg hover:text-black hover:border-gray-500 transition font-medium"
                    >
                      Open
                    </button>
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            ...p,
                            price: price,
                            selectedSize: selectedSize,
                          })
                        );
                      }}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <FAQ />
      </div>
    </section>
  );
};

export default Shop;
