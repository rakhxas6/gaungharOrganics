import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HiOutlineMenuAlt3,
  HiOutlineShoppingCart,
  HiOutlineUser,
  HiX,
  HiOutlineShoppingBag,
  HiOutlinePhone,
  HiOutlineNewspaper,
  HiOutlineBookOpen,
  HiOutlineHeart,
} from "react-icons/hi";
import LogoEnglish from "../../assets/images/cropped img.png";
import nameOnly from "../../assets/images/nameOnly.png";
import nepaliLogo from "../../assets/images/croppedNepali.png";
import Tagline from "./Tagline";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);
  
  
  useEffect(() => {
    document.body.style.overflow = menuOpen && !closing ? "hidden" : "auto";
  }, [menuOpen, closing]);
  

  const handleClick = () => {
    navigate("/");
  };

  const handleCloseMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 200); 
  };

  return (
    <header className="w-full top-0 z-30 bg-white shadow-sm">
      <div className="relative h-16 flex items-center justify-between px-4 py-2 lg:px-16">
        {/* Left: Logo */}
        <div
          className="flex items-center  cursor-pointer "
          onClick={handleClick}
        >
          <img
            src={LogoEnglish}
            alt="GaunGhar Organics Logo"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <img
            src={nameOnly}
            alt="GaunGhar Name Logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Center: Navigation (perfectly centered) */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 text-gray-700 font-medium">
          <a href="/shop" className="hover:text-green-600 transition">
            Shop
          </a>
          <a href="/contact" className="hover:text-green-600 transition">
            Contact
          </a>
          <a href="/blog" className="hover:text-green-600 transition">
            Blog
          </a>
          <a href="/our-story" className="hover:text-green-600 transition">
            Our Story
          </a>
          <a href="/our-values" className="hover:text-green-600 transition">
            Our Values
          </a>
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="/account"
            className="text-gray-700 hover:text-green-600"
            aria-label="Account"
          >
            <HiOutlineUser size={24} />
          </a>
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <HiOutlineShoppingCart size={24} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
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
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-[50%] bg-green-100 z-50 shadow-lg p-6 transform transition-transform duration-300 ease-in-out
      ${closing ? "translate-x-full" : "translate-x-0"}`}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseMenu}
            className="absolute top-4 right-4 text-gray-700"
            aria-label="Close Menu"
          >
<<<<<<< HEAD
            <HiX size={26} />
          </button>

          {/* Logo and Navigation Vertically Aligned */}
          <div className="flex flex-col items-start mt-12 space-y-6 cursor-pointer">
            <div onClick={handleClick}>
              <img
                src={nepaliLogo}
                alt="GaunGhar Logo Nepali Version"
                className="h-24 w-24 object-cover"
              />
            </div>

            <nav className="space-y-4 w-full">
              <a
                href="/shop"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600"
              >
                <HiOutlineShoppingBag size={20} />
                Shop
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600"
              >
                <HiOutlinePhone size={20} />
                Contact
              </a>
              <a
                href="/blog"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600"
              >
                <HiOutlineNewspaper size={20} />
                Blog
              </a>
              <a
                href="/our-story"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600"
              >
                <HiOutlineBookOpen size={20} />
                Our Story
              </a>
              <a
                href="/our-values"
                className="flex items-center gap-2 text-gray-700 hover:text-green-600"
              >
                <HiOutlineHeart size={20} />
                Our Values
              </a>
            </nav>
          </div>
=======
            Contact
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
          <a href="/our-values" className="block text-gray-700 hover:text-green-600">
            Our Values
          </a>
>>>>>>> e64a786b45e9243877fe6cb3d72c349f7ba52fd0
        </div>
      )}
    </header>
  );
}
