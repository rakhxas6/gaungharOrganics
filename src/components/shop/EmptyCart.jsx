import { BiSolidBookBookmark } from "react-icons/bi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { benefits } from "../../data/products";

const EmptyCart = () => {
  const navigate = useNavigate();
  

  const handleBrowseProducts = () => {
    navigate("/shop");
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-between p-4 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')] bg-repeat">
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <MdOutlineRemoveShoppingCart
          size={60}
          className="text-green-400 mb-4"
        />
        <h2 className="text-2xl font-semibold text-green-500 mt-5 mb-3">
          Your Cart is Empty!
        </h2>
        <h4 className="text-lg font-light text-gray-600 max-w-md">
          Explore our collection of pure, cold-pressed oils
        </h4>

        <button
          onClick={handleBrowseProducts}
          className="bg-green-600 text-white px-20 py-3 rounded-lg hover:bg-green-700 transition duration-300 mt-6"
        >
          <BiSolidBookBookmark size={20} className="inline mr-2" />
          <span className="font-semibold">Browse Products</span>
        </button>
      </div>

      {/* Sticky Footer Benefits */}
      <div className="py-4 w-full flex flex-col sm:flex-row  items-center justify-center gap-5 sm:gap-15 text-sm   ">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-gray-700"
          >
            {benefit.icon}
            <div className="flex flex-col leading-tight">
              <span className="font-medium">{benefit.title}</span>
              <span className="text-xs">{benefit.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyCart;

//
