import { Link } from 'react-router-dom';

const NavberBrandLink = () => {
    return (
        <div>
            <Link to="/" className="transition-transform hover:scale-x-110">
                <div className="flex items-center space-x-2 animate__animated animate__fadeInDown">
                    <div className="rounded-full bg-violet-500 text-white h-10 w-10 flex items-center justify-center text-2xl">
                        <span className="text-xl lg:text-2xl font-bold animate__animated animate__zoomIn">B</span>
                    </div>
                    <h1 className="font-bold text-xl lg:text-2xl animate__animated animate__zoomIn">Buy Nest</h1>
                </div>
            </Link>
        </div>
    );
};

export default NavberBrandLink;