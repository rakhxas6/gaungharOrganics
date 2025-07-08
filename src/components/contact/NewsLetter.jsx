import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7xdr5ff", // Your EmailJS service ID
        "template_y213bwv", // Your template ID
        form.current,
        "Gtqw3gCWMS92iu-ew" // Your public key
      )
      .then(
        () => {
          toast.success("Thanks for subscribing! 🎉");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="newsletter bg-green-50 py-12 px-6 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6 text-lg">
          Get the latest updates, offers, and community news directly in your
          inbox.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            name="user_email"
            required
            placeholder="Enter your email"
            aria-label="Email Address"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
