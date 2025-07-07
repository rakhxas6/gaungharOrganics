import React from "react";
import { FaHardHat } from "react-icons/fa";

const OurValues = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="text-center max-w-2xl">
        {/* Construction Icon */}
        <div className="flex justify-center mb-6">
          <FaHardHat className="text-yellow-500 text-6xl" />
        </div>

        {/* Title and Text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          We’re working on this!
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          This section of the website is under construction and will be fully
          ready in a few weeks.
          <br className="hidden sm:block" />
          Thank you for your patience and support!
        </p>
      </div>
    </div>
  );
};

export default OurValues;
