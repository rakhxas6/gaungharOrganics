import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { GrSecure } from "react-icons/gr";

export default function VedikaLogin() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const phoneValue = watch("phone", "");
  const isValidPhone = /^[6-9]\d{9}$/.test(phoneValue);

  const onSubmit = (data) => {
    toast.success("OTP sent to +977 " + data.phone);
    console.log("Continue with:", data.phone);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10 sm:py-14">
      <Toaster position="top-center" />
      <div className="w-full max-w-sm bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center mb-4">
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-300 text-sm font-medium">
            <GrSecure size={20} />
            Secure Login
          </span>
        </div>

        <p className="text-xl sm:text-2xl font-serif text-center text-gray-800 mb-6">
          Welcome to GaunGhar Organics
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="phone"
            className="block text-center text-gray-600 text-sm font-mono font-medium mb-5"
          >
            Enter your mobile number to continue
          </label>

          <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden mb-3">
            <span className="px-3 sm:px-4 text-gray-600 text-sm font-semibold select-none">
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
