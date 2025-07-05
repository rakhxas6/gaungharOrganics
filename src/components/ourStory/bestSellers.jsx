import React from "react";
import { FaStar, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import DemoImage from "../../assets/images/Wood_Pressed_xe62sr.webp";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function BestSellers() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      title: "Wood Pressed Groundnut Oil (1 litre)",
      price: 250,
      originalPrice: 300,
      image: DemoImage,
      rating: 4.8,
      reviews: 150,
    },
    {
      id: 2,
      title: "Wood Pressed Coconut Oil (1 litre)",
      price: 270,
      originalPrice: 320,
      image: DemoImage,
      rating: 4.7,
      reviews: 90,
    },
    {
      id: 3,
      title: "Wood Pressed Mustard Oil (1 litre)",
      price: 260,
      originalPrice: 310,
      image: DemoImage,
      rating: 4.9,
      reviews: 180,
    },
  ];

  return (
    <div className="bestSellerSection max-w-6xl mx-auto min-h-fit px-6 py-12 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        {/* Left Part */}
        <div className="flex flex-col items-start flex-1">
          <div className="text-white bg-green-500 text-xl border rounded-full px-3 py-1 ml-1 flex items-center">
            <FaStar size={18} />
            <h5 className="text-xs ml-1 uppercase tracking-wide">
              Best Seller
            </h5>
          </div>
          <div>
            <h1 className="text-3xl mt-4 font-b text-green-800">
              Our Best-Selling Products
            </h1>
            <p className="text-gray-600 mt-1">
              Discover our most loved wood-pressed oils, crafted with tradition
              and care.
            </p>
          </div>
        </div>

        {/* View All Button (Hidden on small screens) */}
        <div className="hidden md:block">
          <button className="flex items-center border md:px-6 md:py-2 px-3 py-1 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            View All Products
            <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="cardWrapper flex flex-wrap gap-5 px-6 md:px-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="card w-full sm:w-[48%] lg:w-[31%] bg-white  rounded-xl overflow-hidden transform transition-transform duration-300  "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:hover:scale-105"
            />
            <div className="p-4">
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 mr-2">
                  <FaStar />
                </span>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <h2 className="text-lg font-light text-green-800 mb-2">
                {product.title}
              </h2>

              <div className="flex items-center justify-between font-light mb-2">
                <div className="price">
                  <span className="text-green-800 font-semibold text-2xl">
                    रु {product.price}
                  </span>
                  <span className="text-gray-500 line-through ml-2">
                    रु {product.originalPrice}
                  </span>
                </div>
                <button
                  onClick={() => {
                    // ✅ debug
                    dispatch(addToCart(product));
                  }}
                  className="flex items-center border border-gray-400 px-3 py-1 rounded-md hover:bg-green-500 hover:border-0 hover:text-white transition duration-400"
                >
                  Add
                  <FaShoppingCart className="ml-1" />
                </button>
              </div>

              <span className="shipping sm:text-sm text-xs text-gray-500 mb-3 block">
                <li>Free shipping (Only Butwal)</li>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button (Visible on small screens) */}
      <div className="mt-6 md:hidden flex justify-center">
        <button className="flex items-center border px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          View All Products
          <FaLongArrowAltRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
