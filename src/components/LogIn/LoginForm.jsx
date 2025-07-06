import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { GrSecure } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const generateOtp = (length = 6) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

export default function GaunGharOrganics() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState(new Array(6).fill(""));
  const [step, setStep] = useState("form"); // "form" | "otp" | "verified"
  const [timer, setTimer] = useState(60);

  const inputRefs = useRef([]);

  const phoneValue = watch("phone", "");
  const isValidPhone = /^[6-9]\d{9}$/.test(phoneValue);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (step !== "otp") return;

    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, step]);

  const sendOtp = (data) => {
    const otp = generateOtp(6);
    setGeneratedOtp(otp);
    setEnteredOtp(new Array(6).fill(""));
    setStep("otp");
    setTimer(60);
    toast.success("OTP sent to +977 " + data.phone);
    console.log("Generated OTP (for demo):", otp); // Remove in production
    reset();
  };

  const resendOtp = () => {
    const otp = generateOtp(6);
    setGeneratedOtp(otp);
    setEnteredOtp(new Array(6).fill(""));
    setTimer(60);
    toast.success("OTP resent!");
    console.log("Resent OTP (for demo):", otp); // Remove in production
  };

  const verifyOtp = () => {
    const otpString = enteredOtp.join("");
    if (otpString === generatedOtp) {
      toast.success("✅ OTP Verified Successfully!");
      setStep("verified");
      setTimeout(() => {
        navigate("/"); // Redirect after a short delay so user can see success toast
      }, 1500);
    } else {
      toast.error("❌ Invalid OTP. Please try again.");
    }
  };

  const handleChange = (element, index) => {
    if (!/^\d*$/.test(element.value)) return; // Only digits

    const newOtp = [...enteredOtp];
    newOtp[index] = element.value;
    setEnteredOtp(newOtp);

    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !enteredOtp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-10 sm:py-14 min-h-[78vh] sm:min-h-[85vh] md:min-h-[90vh]">
      <Toaster position="top-center" />
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4 mt-2">
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-300 text-sm font-medium">
            <GrSecure size={20} />
            Secure Login
          </span>
        </div>

        <p className="text-xl sm:text-2xl font-serif text-center text-gray-800 mb-6">
          Welcome to GaunGhar Organics
        </p>

        {step === "form" && (
          <form onSubmit={handleSubmit(sendOtp)}>
            <label
              htmlFor="phone"
              className="block text-center text-gray-600 text-sm font-mono font-medium mb-5"
            >
              Enter your mobile number to continue
            </label>

            <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden mb-3">
              <span className="px-3 sm:px-4 text-gray-600 text-xs md:text-sm font-semibold select-none">
                NP +977
              </span>
              <input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                {...register("phone", {
                  required: "Please enter your phone number.",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                aria-invalid={errors.phone ? "true" : "false"}
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-xs text-center mb-3">
                {errors.phone.message}
              </p>
            )}

            <button
              type="submit"
              disabled={!isValidPhone}
              className={`w-full py-3 rounded-2xl text-sm font-semibold transition-all ${
                isValidPhone
                  ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  : "bg-green-200 text-green-100 cursor-not-allowed"
              }`}
            >
              Send OTP
            </button>
          </form>
        )}

        {step === "otp" && (
          <div className="flex flex-col items-center gap-5 mt-2">
            <p className="text-sm text-gray-600 text-center">
              Enter the OTP sent to your number
            </p>

            <div className="flex justify-center space-x-2">
              {enteredOtp.map((digit, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 text-center text-xl font-semibold rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition"
                  value={digit}
                  onChange={(e) => handleChange(e.target, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  inputMode="numeric"
                  pattern="\d*"
                  autoComplete="one-time-code"
                />
              ))}
            </div>

            <button
              onClick={verifyOtp}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-sm font-semibold"
            >
              Verify OTP
            </button>

            <div className="flex justify-between w-full mt-2 text-xs text-gray-500">
              <button
                onClick={resendOtp}
                disabled={timer > 0}
                className={`underline ${
                  timer > 0
                    ? "cursor-not-allowed text-gray-300"
                    : "text-green-600"
                }`}
              >
                Resend OTP
              </button>
              <span>Resend available in {timer}s</span>
            </div>

            <button
              onClick={() => setStep("form")}
              className="text-xs text-gray-500 underline mt-2"
            >
              ← Go Back
            </button>
          </div>
        )}

        {step === "verified" && (
          <div className="text-center text-green-600 font-semibold text-sm">
            🎉 You are successfully verified!
          </div>
        )}

        <p className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          By continuing, you agree to our{" "}
          <span className="text-green-600 underline cursor-pointer">Terms</span>{" "}
          and{" "}
          <span className="text-green-600 underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}
