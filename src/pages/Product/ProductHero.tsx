import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";


const ProductHero = () => {
  return (
    <div className="bg-gray-200 p-2 px-10 shadow text-start">
      <p className='flex gap-3 items-center'>
        <Link to="/" className="text-violet-500 hover:underline">
          Home
        </Link>
        <GrNext className="text-[12px]" />
        <Link to="/products" className="text-violet-500 hover:underline">
          Products
        </Link>
      </p>
    </div>
  );
};

export default ProductHero;