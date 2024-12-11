import { Link } from 'react-router-dom';

const ProductHero = () => {
  return (
    <div className="bg-gray-200 p-2 px-10 shadow text-start">
      <p>
        <Link to="/" className="text-violet-500 hover:underline">
          Home
        </Link>
        /
        <Link to="/products" className="text-violet-500 hover:underline">
          Products
        </Link>
      </p>
    </div>
  );
};

export default ProductHero;