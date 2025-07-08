import { FaShoppingCart, FaStar } from "react-icons/fa";
import { products } from "../../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const YouMayAlsoLike = () => {
  const dispatch = useDispatch();

  return (
    <div className="px-4 w-full flex flex-col items-center mt-4">
      {/* Section Title */}
      <div className="mb-12">
        <span className="flex items-center text-sm sm:text-base text-gray-600 bg-gray-300 bg-opacity-30 justify-center gap-2 px-6 py-2 rounded-full border border-gray-300 shadow-sm">
          You May Also Like
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {products.flatMap((product) =>
          product.sizes.map((size, idx) => (
            <div
              key={`${product.id}-${size.label}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-cover"
              />

              {/* Card Content */}
              <div className="p-4">
                {/* Rating */}
                <div className="flex items-center mb-1">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span className="text-gray-600 text-sm">
                    {product.rating}
                  </span>
                </div>

                {/* Title + Size */}
                <h3 className="text-lg font-semibold text-green-800 mb-2 line-clamp-2">
                  {product.title} - {size.label}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-green-700 font-semibold text-lg">
                    रु {size.price}
                  </div>

                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...product,
                          selectedSize: size.label,
                          price: size.price,
                          totalPrice: size.price,
                          quantity: 1,
                        })
                      )
                    }
                    className="px-3 py-1.5 flex items-center gap-2 border border-gray-300 rounded-md hover:bg-green-500 hover:text-white transition text-sm"
                  >
                    <FaShoppingCart /> Add
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
