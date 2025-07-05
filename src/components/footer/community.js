import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Community() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const checkboxRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    const serviceID = "service_7xdr5ff";
    const templateID = "template_y213bwv";
    const publicKey = "Gtqw3gCWMS92iu-ew"; // Also known as user ID

    const templateParams = {
      user_email: email,
      message: `New user signed up with email: ${email}`,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Thank you for joining! 🎉");
        setEmail("");
        if (checkboxRef.current) checkboxRef.current.checked = false;
      })
      .catch(() => {
        toast.error("Oops! Something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-gradient-to-br min-h-screen from-green-50 to-white py-10 px-4 flex flex-col items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      {/* 🟢 Page Header */}
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h1 className="text-3xl font-bold text-green-600 mb-2">
          Join Our Community
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Get exclusive offers, health tips, and early access to new products
        </p>
      </div>

      {/* 📨 Form Card */}
      <div className="max-w-md mx-auto my-16 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-green-500 mb-3">
          Join Our Community
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          Stay connected with holistic wellness and ancient kitchen wisdom.
        </p>

        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-400"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="text-sm flex items-start">
            <input
              type="checkbox"
              required
              className="mr-2 mt-1"
              ref={checkboxRef}
            />
            I agree to receive marketing emails from GauGhar
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`bg-green-500 text-white font-medium py-2 rounded hover:bg-green-600 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
