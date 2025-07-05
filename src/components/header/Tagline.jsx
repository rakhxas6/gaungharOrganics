import React, { useEffect, useState } from "react";
import { FaTruckPickup, FaRupeeSign, FaHeart } from "react-icons/fa";
import { MdMoneyOff } from "react-icons/md";
import { BiCheckShield } from "react-icons/bi";

const taglines = [
  { tagline: "Free Shipping Across India", icon: FaTruckPickup },
  { tagline: "Shop Authentic, Chemical-Free Oils", icon: BiCheckShield },
  { tagline: "7-Day Money-Back Guarantee", icon: MdMoneyOff },
  { tagline: "COD (Cash on Delivery) Available", icon: FaRupeeSign },
  { tagline: "Loved by 12,000+ Families", icon: FaHeart },
  { tagline: "Get ₹50 OFF on Your First Order", icon: BiCheckShield },
];

export default function Tagline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentTagline = taglines[currentIndex];
  return (
    <div className="topItem w-full py-2 bg-pink-100 flex justify-center items-center border-t-2 border-b-2 ">
      <div className="flex items-center gap-2 text-sm font-semibold transition-opacity duration-700 ease-in-out">
        <span className="text-blue-500 text-lg">
          {React.createElement(currentTagline.icon)}
        </span>
        <span>{currentTagline.tagline}</span>
      </div>
    </div>
  );
}
