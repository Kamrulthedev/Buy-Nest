/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllShopsQuery } from "@/Redux/features/shops/shopsApi";
import { useState } from "react";
import { Link } from "react-router-dom";


const ShopManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    const { data } = useGetAllShopsQuery([
        { name: 'page', value: currentPage },
    ]);

    const shops = data?.data || [];
    const totalShops = data?.meta?.total || 0;

    // Filtering shops based on searchTerm
    const filteredShops = shops.filter((shop: any) =>
        shop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil(data?.meta?.total / itemsPerPage);

    const handleDeleteClick = (id: number) => {
        console.log('Delete Clicked for Shop ID:', id);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    return (
        <div className="p-4 md:p-6 animate__animated animate__fadeInDown">
            <h1 className="text-2xl text-start md:text-3xl font-bold mb-6">Shop Management</h1>
            <div className="mb-6 lg:flex justify-between space-y-4 lg:space-y-0">
                <input
                    type="text"
                    placeholder="Search Shop..."
                    className="w-full md:w-1/3 p-2 border border-violet-400 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <p className="text-sm lg:text-base">Shops: {totalShops}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-left text-sm">
                            <th className="px-4 py-2">Logo</th>
                            <th className="px-4 py-2">Shop ID</th>
                            <th className="px-4 py-2">Shop Name</th>
                            <th className="px-4 py-2">Vendor Email</th>
                            <th className="px-4 py-2">Products</th>
                            <th className="px-4 py-2">Order</th>
                            <th className="px-4 py-2">Followers</th>
                            <th className="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredShops.map((shop: any) => (
                            <tr className="text-xs animate__animated animate__fadeInDown" key={shop.id}>

                                <td className="px-4 py-2 text-center">
                                    <img
                                        src={shop.logoUrl}
                                        alt={shop.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>
                                <td className="px-4 py-2">{shop.id}</td>
                                <td className="px-4 py-2">{shop.name}</td>
                                <td className="px-4 py-2">{shop?.vendor?.email}</td>
                                <td className="px-4 py-2">{shop?.products?.length}</td>
                                <td className="px-4 py-2">{shop?.orders?.length}</td>
                                <td className="px-4 py-2">{shop?.followers?.length}</td>

                                <td className=" px-4 py-2 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center">
                                    <Link
                                        to={`/admin/shop-details/${shop.id}`}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 w-full md:w-auto"
                                    >
                                        Details
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteClick(shop.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 w-full md:w-auto"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <button
                    onClick={handlePrevPage}
                    className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ShopManagement;
