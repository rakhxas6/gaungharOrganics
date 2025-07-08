import { useState } from "react";
import Slider from "react-slick";
import { FaEye, FaEyeSlash, FaStar, FaWhatsapp } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineLocalOffer } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { LuLeaf } from "react-icons/lu";
import { products, benefits, offers } from "../../data/products";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

export default function DetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || {});
  const [toggleViewIcon, setToggleViewIcon] = useState(false);
  const [quantity, setQuantity] = useState(1); // use local state

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <h1 className="text-xl font-medium">Product not found!</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        selectedSize: selectedSize.label,
        price: selectedSize.price,
        totalPrice: selectedSize.price * quantity,
        quantity,
      })
    );
    setQuantity(1); // optional reset
  };

  const renderOfferCard = (offer) => (
    <div
      key={offer.id}
      className="p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800 font-medium shadow"
    >
      <p className="text-xs text-gray-500 font-semibold mb-1">
        <span className="text-green-600">{offer.code}</span>
      </p>
      <p className="mb-2 text-sm">{offer.description}</p>
      <div className="text-xs flex items-center gap-1">
        Save{" "}
        <span className="text-base font-bold text-green-700">
          रु{offer.discount}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Image Section */}
        <div className="h-full bg-gray-50 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-lg shadow"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="flex flex-row items-center w-fit bg-green-100 text-green-700 px-4 py-2 gap-1 rounded-full text-sm">
            <LuLeaf />
            <span className="font-medium">Fresh Batches Daily</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-600">{product.subtitle}</p>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-400 ${
                  i < Math.floor(product.rating) ? "opacity-100" : "opacity-30"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-green-700">
                रु{selectedSize.price}
              </span>
              <h3 className="font-thin text-sm text-gray-500 line-through">
                MRP रु{selectedSize.originalPrice}
              </h3>
              <span className="text-xs bg-green-400 font-semibold px-2 py-1 rounded-3xl">
                {selectedSize.discount}% Off
              </span>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-col" id="b1-Title">
            <h4 className="text-sm text-gray-500 font-light mb-2">
              Choose Size
            </h4>
            <div className="flex flex-col gap-3">
              {product.sizes.map((size, idx) => {
                const isSelected = size.label === selectedSize.label;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`border px-6 py-4 rounded-md text-left text-sm transition-colors duration-200 ${
                      isSelected
                        ? "bg-zinc-100 text-slate-800 border-slate-400"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between text-xs">
                      <div className="font-semibold text-base mb-1">
                        {size.label}
                        <div className="text-sm font-medium">
                          रु{size.pricePerLitre}/L
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-3">
                        <span className="text-green-600 bg-slate-300 px-2 py-1 rounded-3xl font-medium">
                          {size.discount}% OFF
                        </span>
                        <span className="line-through text-gray-400 text-sm">
                          MRP रु{size.originalPrice}
                        </span>
                        <span className="text-xl font-semibold">
                          रु{size.price}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm text-gray-500 font-light mb-1">Quantity</h4>
            <div className="flex justify-between items-start">
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  className="w-16 text-center border-l border-r outline-none"
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <div className="flex justify-end items-center gap-1">
                  <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
                  <span className="text-xs font-semibold">In Stock</span>
                </div>
                <div>
                  <span className="text-xs">200/380 sold today</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={handleAddToCart}
              className="flex flex-col items-center justify-center bg-green-700 hover:bg-green-800 text-white px-6 py-5 rounded-md font-medium transition text-center"
            >
              <div className="flex items-center gap-2">
                <MdOutlineShoppingCart size={22} />
                <span className="text-lg font-medium">Add to Cart</span>
              </div>
              <span className="text-xs font-normal opacity-90">
                Ship my fresh bottle today
              </span>
            </button>

            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-4 bg-gray-100 hover:bg-gray-200 px-6 py-5 rounded-md font-medium transition text-left"
            >
              <div className="pt-1 text-green-700">
                <FaWhatsapp size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-medium text-green-700">
                  Buy on WhatsApp
                </span>
                <span className="text-sm text-gray-600 font-normal">
                  Need help? Chat with us
                </span>
              </div>
            </button>
          </div>

          {/* Special Offers */}
          <div className="specialOffers p-4 border rounded-md bg-white shadow-sm">
            <div className="flex justify-between mb-3">
              <div className="flex items-center gap-2">
                <MdOutlineLocalOffer className="text-green-600" />
                <span className="font-medium text-gray-800">
                  Special Offers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs">{offers.length} available</span>
                <button
                  onClick={() => setToggleViewIcon((prev) => !prev)}
                  className="flex items-center gap-1 px-3 py-1 text-xs bg-slate-200 bg-opacity-50 rounded-[16px]"
                >
                  {toggleViewIcon ? <FaEyeSlash /> : <FaEye />}
                  {toggleViewIcon ? "Hide All" : "View All"}
                </button>
              </div>
            </div>

            {/* Offers */}
            <div>
              {toggleViewIcon ? (
                <div className="grid grid-cols-1 gap-2">
                  {offers.map((offer) => renderOfferCard(offer))}
                </div>
              ) : (
                <Slider {...settings}>
                  {offers.map((offer) => (
                    <div key={offer.id} className="px-2">
                      {renderOfferCard(offer)}
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <ul className="list-disc list-inside text-gray-700">
            {product.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Benefits */}
          <div className="py-4 w-full flex flex-col sm:flex-row items-center justify-center gap-5 text-sm">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-gray-700"
              >
                {benefit.icon}
                <div className="flex flex-col leading-tight">
                  <span className="font-medium">{benefit.title}</span>
                  <span className="text-xs">{benefit.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
