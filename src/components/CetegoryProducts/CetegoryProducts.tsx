import { Link } from "react-router-dom";
import { FiShoppingCart, FiEye, FiHeart } from "react-icons/fi";
import { GiDorsalScales } from "react-icons/gi";
import Heading from "@/Heading/Heading";


const demoProducts = [
  { id: 1, brand: "POLO", name: "Rounded Cat Eye Sunglasses", price: "$180.00", img: "https://i.ibb.co.com/HPX62Qv/image.png" },
  { id: 2, brand: "LACOSTE", name: "Saffiano Leather Belt", price: "$200.00", img: "https://i.ibb.co.com/SwqymT0/image.png" },
  { id: 3, brand: "GUESS", name: "Silk Polka-Dot Scarf", price: "$220.00", img: "https://i.ibb.co.com/5T1mNC7/image.png" },
  { id: 4, brand: "LEVI'S", name: "Stretch Cotton Skinny Pant", price: "$240.00", img: "https://i.ibb.co.com/ZVqYgG9/image.png" },
];

const categories = ["Men", "Women", "Accessories"];

const CategoryProducts = () => {
  return (
    <div className="bg-white py-8 px-4 font-serif">
      <Heading Heading="Trendy Products">
      </Heading>
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white shadow-md rounded-lg hover:bg-slate-300 text-black font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {demoProducts.map((product) => (
          <div key={product.id} className="relative bg-white overflow-hidden group animate__animated animate__pulse">
            {/* Product Image */}
            <img src={product.img} alt={product.name} className="w-full shadow-lg h-80 object-cover" />

            {/* Overlay Icons */}
            <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 bg-white rounded-full shadow hover:text-blue-600">
                <FiEye size={20} />
              </button>
              <button className="p-2 bg-white rounded-full shadow hover:text-red-600">
                <FiHeart size={20} />
              </button>
              <button className="p-2 bg-white rounded-full shadow hover:text-gray-600">
                <GiDorsalScales size={20} />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <p className="text-sm text-gray-500">{product.brand}</p>
              <h2 className="font-medium text-lg">{product.name}</h2>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>

            {/* Hover Buttons */}
            <div className="absolute  bottom-4 left-0 right-0 flex justify-between space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link
                to={`/product/${product.id}`}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-600"
              >
                View Details
              </Link>
              <button className="px-4 py-2  bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                Add to Cart <FiShoppingCart className="inline ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
