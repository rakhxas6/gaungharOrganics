import { FaStar } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const avatarImages = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
];

export default function Home() {
 

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  const handleClick2 = () => {
    navigate("/our-story");
  };
  return (
    <main className="w-full">
      {/* Main Content */}
      <div className="mainContent flex flex-col lg:flex-row justify-between items-center px-6 lg:px-16 py-10 gap-10">
        {/* Left Side Content */}
        <div className="left w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
          {/* Tagline Button */}
          <div className="button-container">
            <button className="flex text-sm bg-blue-100 items-center gap-2 py-2 px-6 rounded-full border hover:shadow-lg transition">
              <SiTicktick />
              100% Organic Machine-Pressed Oils
            </button>
          </div>

          {/* Heading and Description */}
          <div className="infoContainer">
            <h2 className="text-4xl text-green-600 font-bold mb-5">
              Discover the Pure Essence of Traditional Oil Making
            </h2>
            <p className="text-gray-600 text-xl mb-5">
              Experience the authentic taste and health benefits of
              traditionally crafted wood-pressed oils, made with care from
              organic seeds.
            </p>

            {/* CTA Buttons */}
            <div className="buttons flex gap-4 mt-4 flex-wrap">
              <button
                onClick={handleClick}
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Shop Now
              </button>
              <button
                onClick={handleClick2}
                className="border border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition"
              >
                Learn Our Process
              </button>
            </div>

            {/* Trusted Section with Avatars */}
            <div className="trustedBy mt-6 flex items-center gap-4 flex-wrap">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {avatarImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`User ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover hover:scale-110"
                  />
                ))}
              </div>

              {/* Stars + Text */}
              <div className="flex flex-col  gap-1">
                <div className="star flex flex-row flex-start">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
                <span className="text-sm font-medium text-green-500 ">
                  Trusted by 10,000+ happy customers
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Large Image */}
        <div className="right w-full lg:w-1/2 flex justify-start lg:justify-center order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1620768667173-48634278cfb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGVkaWJsZSUyMG9pbCUyMHByb2R1Y3Rpb24lMjByZWxhdGVkfGVufDB8fDB8fHww"
            width={400}
            height={400}
            alt="Traditional oil making"
            className="rounded-xl shadow-lg     object-cover"
          />
        </div>
      </div>
    </main>
  );
}
