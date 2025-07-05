import { useState } from "react";
import { useSelector } from "react-redux";
import {
  HiOutlineMenuAlt3,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiX,
} from "react-icons/hi";
import LogoEnglish from "../../assets/images/cropped img.png";
import nameOnly from "../../assets/images/nameOnly.png";
import Tagline from "./Tagline";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="w-full top-0 z-30 bg-white shadow-sm">
      {/* Top navigation bar */}
      <div className="h-16 flex items-center justify-between px-4 py-2 lg:px-16">
        {/* Logo section */}
        <div
          className="flex items-center flex-shrink-0 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src={LogoEnglish}
            alt="GaunGhar Organics Logo"
            className="h-16 w-16 object-contain"
          />
          <img
            src={nameOnly}
            alt="GaunGhar Name Logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Main navigation links for large screens */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-8 text-gray-700 font-medium">
          <a href="/shop" className="hover:text-green-600 transition">
            Shop
          </a>
          <a href="/contact" className="hover:text-green-600 transition">
            Contact Us
          </a>
          <a href="/blog" className="hover:text-green-600 transition">
            Blog
          </a>
          <a href="/our-story" className="hover:text-green-600 transition">
            Our Story
          </a>
        </nav>

        {/* Icons: Account, Cart, and Hamburger menu */}
        <div className="flex items-center space-x-4">
          <a
            href="/account"
            className="text-gray-700 hover:text-green-600"
            aria-label="Account"
          >
            <HiOutlineUser size={24} />
          </a>
          <div className="relative" onClick={() => navigate("/cart")}>
            <HiOutlineShoppingCart size={24} className="text-green-800" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX size={26} /> : <HiOutlineMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Rotating Tagline */}
      <Tagline />

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <a href="/shop" className="block text-gray-700 hover:text-green-600">
            Shop
          </a>
          <a
            href="/contact"
            className="block text-gray-700 hover:text-green-600"
          >
            Contact Us
          </a>
          <a href="/blog" className="block text-gray-700 hover:text-green-600">
            Blog
          </a>
          <a
            href="/our-story"
            className="block text-gray-700 hover:text-green-600"
          >
            Our Story
          </a>
        </div>
      )}
    </header>
  );
}
