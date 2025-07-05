import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import DemoImage from "../../assets/images/Wood_Pressed_xe62sr.webp";
import {
  removeFromCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import EmptyCart from "./EmptyCart";
import PaymentKhalti from "../payment/PaymentKhalti";
import PaymentEsewa from "../payment/PaymentEsewa";
import KhaltiLogo from "../../assets/images/KhaltiLogo.webp";
import EsewaLogo from "../../assets/images/EsewaLogo.webp";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaTruck, FaSmile, FaShieldAlt } from "react-icons/fa";

const benefits = [
  {
    icon: <FaTruck size={16} className="text-green-600" />,
    title: "Free Delivery",
    subtitle: "On all orders",
  },
  {
    icon: <FaSmile size={16} className="text-green-600" />,
    title: "100% Satisfaction",
    subtitle: "30-day money back",
  },
  {
    icon: <FaShieldAlt size={16} className="text-green-600" />,
    title: "Secure Checkout",
    subtitle: "256-bit SSL encryption",
  },
];

const products = [
  {
    id: 1,
    title: "Wood Pressed Groundnut Oil (1 litre)",
    price: 380,
    originalPrice: 300,
    image: DemoImage,
    rating: 4.8,
    reviews: 150,
  },
];

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null); // "khalti" | "esewa" | null

  // const discountThreshold = 5;
  // const discountPercent = 10;
  // const isDiscountEligible = totalQuantity >= discountThreshold;
  // const itemsLeft = Math.max(discountThreshold - totalQuantity, 0);
  // const progressPercent = Math.min(
  //   (totalQuantity / discountThreshold) * 100,
  //   100
  // );
  // const discountedPrice = isDiscountEligible
  //   ? Math.round(totalPrice * (1 - discountPercent / 100))
  //   : totalPrice;
  // const savings = totalPrice - discountedPrice;

  if (cartItems.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Centered Progress Bar */}
      {/* <div className="flex justify-center mb-10">
        <div className="bg-white border border-green-200 rounded-xl shadow p-4 w-full max-w-md text-center">
          <p className="text-sm font-medium text-green-700 mb-2">
            {isDiscountEligible
              ? `🎉 You've unlocked ${discountPercent}% discount!`
              : `Add ${itemsLeft} more item(s) to unlock ${discountPercent}% off`}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-1">
            <div
              className="bg-green-500 h-2 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {isDiscountEligible && (
            <p className="text-sm text-green-600 font-semibold mt-1">
              You saved रु {savings}!
            </p>
          )}
        </div>
      </div> */}

      {/* Cart Content */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-green-800 border-b pb-4">
            Shopping Cart
          </h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row gap-4 items-center justify-between border rounded-xl p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-36 h-36 object-cover border rounded-lg"
              />
              <div className="flex-1 w-full">
                <h3 className="text-lg font-semibold text-green-800">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        decreaseQuantity({
                          id: item.id,
                          selectedSize: item.selectedSize,
                        })
                      )
                    }
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity({
                          id: item.id,
                          selectedSize: item.selectedSize,
                        })
                      )
                    }
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
                <p className="text-sm mt-2">
                  Subtotal:{" "}
                  <span className="text-green-700 font-semibold">
                    रु {item.totalPrice}
                  </span>
                </p>
                <button
                  onClick={() =>
                    dispatch(
                      removeFromCart({
                        id: item.id,
                        selectedSize: item.selectedSize,
                      })
                    )
                  }
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Summary */}
        <div className="border rounded-2xl p-6 shadow-md bg-gradient-to-br from-green-50 to-white h-fit font-sans">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 tracking-tight">
            🧾 Order Summary
          </h3>

          {/* Item Count */}
          <div className="flex justify-between text-gray-600 text-sm mb-2">
            <span className="font-medium">Total Items</span>
            <span>{totalQuantity}</span>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between text-lg font-semibold text-green-800 mb-1">
            <span>Subtotal</span>
            <span>रु {totalPrice}</span>
          </div>

          {/* Live Text */}
          <p className="text-green-600 text-sm mb-4 italic">Live</p>

          {/* Discount (if applied) */}
          {/* {isDiscountEligible && (
            <div className="flex justify-between text-sm text-green-600 mb-2 font-medium">
              <span>Discount ({discountPercent}%)</span>
              <span>- रु {savings}</span>
            </div>
          )} */}

          {/* Final Total */}
          <div className="flex justify-between text-xl font-bold text-green-700 border-t pt-4 mt-4">
            <span>Total Payable</span>
            <span>रु {totalPrice}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => setShowPaymentModal(true)}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold text-lg shadow-sm"
          >
            Proceed to Checkout
          </button>

          {/* Benefits */}
          <div className="mt-8 flex flex-col  items-start justify-start gap-6 text-sm border-t pt-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700 text-left"
              >
                <span className="p-2 bg-slate-300 bg-opacity-70 rounded-lg">
                  {benefit.icon}
                </span>
                <div className="leading-tight">
                  <span className="font-semibold text-sm block">
                    {benefit.title}
                  </span>
                  <span className="text-xs">{benefit.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* You May Also Like */}

      <div className=" px-4 w-full flex flex-col items-center mt-4">
        {/* Section Title */}
        <div className="mb-12">
          <span className="flex items-center text-sm sm:text-base text-gray-600 bg-gray-300 bg-opacity-30 justify-center gap-2 px-6 py-2 rounded-full border border-gray-300 shadow-sm">
            You May Also Like
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden "
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                <div className="flex items-center mb-1">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-gray-600 text-sm">
                    {product.rating}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="text-green-700 font-semibold text-lg">
                    रु {product.price}
                  </div>

                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-3 py-1.5 flex items-center gap-2 border border-gray-300 rounded-md hover:bg-green-500 hover:text-white transition text-sm"
                  >
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Payment Modal */}
       {/* {showPaymentModal && !paymentMethod && ( 
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-xl shadow-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowPaymentModal(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-semibold text-green-700 mb-6 text-center">
              Choose a Payment Method
            </h3>
            <div className="flex flex-col gap-4">
              <button
                className="bg-green-600 text-white py-2 rounded flex items-center justify-center gap-3 hover:bg-green-700"
                onClick={() => setPaymentMethod("esewa")}
              >
                <img
                  src={EsewaLogo}
                  alt="eSewa"
                  className="h-10 w-auto object-contain"
                />
                Pay with eSewa
              </button>
              <button
                className="bg-purple-600 text-white py-2 rounded flex items-center justify-center gap-3 hover:bg-purple-700"
                onClick={() => setPaymentMethod("khalti")}
              >
                <img
                  src={KhaltiLogo}
                  alt="Khalti"
                  className="h-10 w-auto object-contain"
                />
                Pay with Khalti
              </button>
            </div>
          </div>
        </div>
      )} */}
      {/* Trigger Payment Component after Choice */}
      {/* {paymentMethod === "esewa" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => {
                setPaymentMethod(null);
                setShowPaymentModal(false);
              }}
            >
              ×
            </button>
            <PaymentEsewa />
          </div>
        </div>
      )} */}
      {/* {paymentMethod === "khalti" && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              onClick={() => {
                setPaymentMethod(null);
                setShowPaymentModal(false);
              }}
            >
              ×
            </button>
            <PaymentKhalti />
          </div>
        </div>
      )}  */}
    </div>
  );
}
