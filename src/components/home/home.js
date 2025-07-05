import { FaStar } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../assets/images/background.jpg";

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
    <div className="mainContent min-h-[85vh] flex flex-col lg:flex-row justify-between items-center px-6 md:px-6 lg:px-16 pt-8 gap-2 border-b border-gray-400 border-opacity-60">
      {/* Left Side Content */}
      <div className="left w-full lg:w-[40vw] flex flex-col gap-4 order-2 lg:order-1 mb-4">
        {/* Tagline Button */}
        <div className="button-container">
          <button className="flex text-sm bg-blue-100 items-center gap-2 py-2 px-6 rounded-full border hover:shadow-lg transition group">
            <SiTicktick className="group-hover:rotate-12 transition-transform duration-200" />
            100% Organic Machine-Pressed Oils
          </button>
        </div>

        {/* Heading and Description */}
        <div className="infoContainer">
          <h2 className="text-2xl md:text-3xl text-green-600 font-bold mb-4 leading-snug">
            Discover the Pure Essence of Traditional Oil Making
          </h2>
          <p className="text-gray-600 text-sm md:text-xl mb-4">
            Experience the authentic taste and health benefits of traditionally
            crafted wood-pressed oils, made with care from organic seeds.
          </p>

          {/* CTA Buttons */}
          <div className="buttons flex gap-4 mt-2 flex-wrap">
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
          <div className="trustedBy mt-4 flex items-center gap-4 flex-wrap">
            {/* Avatars */}
            <div className="flex -space-x-3">
              {avatarImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`User ${i + 1}`}
                  loading="lazy"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Stars + Text */}
            <div className="flex flex-col gap-1">
              <div className="star flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>
              <span className="text-sm font-medium text-green-500">
                Trusted by 10,000+ happy customers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Large Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 relative group overflow-hidden rounded-tr-[35px] rounded-bl-[35px] h-[300px] sm:h-[360px] md:h-[400px] order-2 lg:order-1 mb-4 ">
        <img
          src={backgroundImg}
          alt="children in the mustard field carrying dokos full of woods"
          className="rounded-tr-[35px] rounded-bl-[35px] shadow-lg object-cover w-full  h-full"
        />
        {/* Optional Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-10 rounded-tr-[35px] rounded-bl-[35px]"></div> */}
      </div>
    </div>
  );
}
