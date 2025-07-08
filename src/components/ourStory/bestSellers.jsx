import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { products } from "../../data/products";

export default function BestSellers() {
  const dispatch = useDispatch();

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
      <div className="cardWrapper flex flex-wrap gap-3 sm:gap-5">
        {products.map((product) => {
          const oneLitre =
            product.sizes?.find((s) => s.label === "1 Litre") ||
            product.sizes?.[0];

          return (
            <div
              key={product.id}
              className="card w-full sm:w-[48%] lg:w-[31%] bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full transition-transform duration-300 hover:scale-105"
              />

              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 mr-2">
                    <FaStar />
                  </span>
                  <span className="text-gray-600 text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Title + View Details */}
                <div className="details flex items-center justify-between mb-2 line-clamp-2">
                  <h2 className="text-lg font-light text-green-800">
                    {product.title} {'- '} ({oneLitre.label})
                  </h2>

                  <Link
                    to={`/product/${product.id}`}
                    className="hover:underline text-[14px] font-light"
                  >
                    View Details
                  </Link>
                </div>

                {/* Price + Add to Cart */}
                <div className="flex items-center justify-between font-light mb-2">
                  <div className="price">
                    <span className="text-green-800 font-semibold text-2xl">
                      रु {oneLitre?.price}
                    </span>
                    {oneLitre?.originalPrice && (
                      <span className="text-gray-500 line-through ml-2">
                        रु {oneLitre.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...product,
                          selectedSize: oneLitre.label,
                          price: oneLitre.price,
                          quantity: 1,
                          totalPrice: oneLitre.price,
                        })
                      )
                    }
                    className="flex items-center border border-green-500 text-green-700 px-3 py-1.5 rounded-md hover:bg-green-500 hover:text-white transition duration-300"
                  >
                    Add <FaShoppingCart className="ml-2" />
                  </button>
                </div>

                {/* Extra Info */}
                <ul className="text-xs sm:text-sm text-gray-500 list-disc list-inside">
                  <li>Free shipping (Only Butwal)</li>
                </ul>
              </div>
            </div>
          );
        })}
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
