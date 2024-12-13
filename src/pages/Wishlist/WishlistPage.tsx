/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from '@/Heading/Heading';
import { useState } from 'react';

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([
        {
            id: 1,
            title: "Product 1",
            price: "$50",
            image: "https://via.placeholder.com/150",
            details: "This is product 1 description."
        },
        {
            id: 2,
            title: "Product 2",
            price: "$75",
            image: "https://via.placeholder.com/150",
            details: "This is product 2 description."
        },
        {
            id: 3,
            title: "Product 3",
            price: "$100",
            image: "https://via.placeholder.com/150",
            details: "This is product 3 description."
        }
    ]);

    const handleRemove = (id: any) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    return (
        <div className="max-w-screen-lg mx-auto p-6 animate__animated animate__fadeInDown">
           <Heading Heading='Wishlist'></Heading>
            <div className="overflow-x-auto rounded-md pb-6">
                <table className="table-auto w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 animate__animated animate__fadeInDown">
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Details</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((item) => (
                            <tr key={item.id} className="text-center border-b animate__animated animate__fadeInDown">
                                <td className="px-4 py-2">
                                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                                </td>
                                <td className="px-4 py-2 font-semibold">{item.title}</td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className="px-4 py-2 text-sm text-gray-600">{item.details}</td>
                                <td className="px-4 py-2 flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
                                    <button
                                        className="w-full sm:w-24 bg-violet-500 text-white px-4 py-2 rounded-lg hover:bg-violet-600 transition shadow-md"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="w-full sm:w-24 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {wishlist.length === 0 && (
                <p className="text-center text-gray-600 mt-10">Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default WishlistPage;