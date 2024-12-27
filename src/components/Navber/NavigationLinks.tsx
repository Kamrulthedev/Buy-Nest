import { Link } from "react-router-dom";

const NavigationLinks = () => {
    return (
        <div className="hidden md:flex lg:gap-5 font-serif text-gray-600">
            <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/'>Home</Link>
            {/* Shop Dropdown */}
            <div className="relative group lg:mt-2">
                <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to="/products">Shop »</Link>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-96 z-10 animate__animated animate__fadeInDown">
                    <div className="flex p-7">
                        <div>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category1">Man</Link>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category2">Woman</Link>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category3">Toys & Games</Link>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category4">Books</Link>
                        </div>
                        <div>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category1">Baby Products
                            </Link>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category2">Jewelry</Link>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products/category3">Groceries</Link>
                            <Link className="block px-4 py-2 hover:bg-slate-100 rounded-lg" to="/products">All Shop List</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/about'>About</Link>
            <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/contact'>Contact</Link>
        </div>
    );
};

export default NavigationLinks;