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

  // Validate phone number live (must be 10 digits, starting 6-9)
  const isValidPhone = /^[6-9]\d{9}$/.test(phoneValue);

  const onSubmit = (data) => {
    toast.success("OTP sent to +977 " + data.phone);
    console.log("Continue with:", data.phone);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-center">
          <span className="flex items-center gap-2 bg-green-200 text-green-600 hover:text-green-700 px-3 py-1 rounded-full border text-sm font-medium select-none">
            <GrSecure size={22} />
            Secure Login
          </span>
        </div>
        <p className="text-3xl font-serif leading-relaxed text-center text-gray-700 my-6">
          Welcome to GaunGhar Organics
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="phone"
            className="block text-center text-gray-700 text-sm font-mono font-medium mb-6"
          >
            Enter your mobile number to continue
          </label>
          <div className="flex items-center border rounded-2xl overflow-hidden mb-4">
            <span className="px-4 flex items-center select-none  text-gray-600 font-semibold">
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
              className="flex-1 px-4 py-3 text-xs focus:outline-none"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mb-4 text-center">
              {errors.phone.message}
            </p>
          )}
          <button
            type="submit"
            disabled={!isValidPhone}
            className={`w-full border-none py-3 rounded-2xl font-semibold transition
              ${
                isValidPhone
                  ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  : "bg-green-300 text-green-100 cursor-not-allowed"
              }
            `}
          >
            Send OTP
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
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
