/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllCustomerQuery } from "@/Redux/features/customer/customer.api";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomerManagement = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 5;


    const { data: customers } = useGetAllCustomerQuery([
        { name: 'page', value: currentPage },
    ]);



    // Filter customers based on search term
    const filteredCustomers = customers?.data.filter((customer: any) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // Handler for action buttons
    const handleAction = (customerId: string, action: string) => {
        console.log(`${action} customer with ID: ${customerId}`);
    };

    // Function to handle page changes
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil((customers?.meta?.total || 0) / customersPerPage);

    return (
        <div className="container mx-auto p-4 animate__animated animate__fadeInDown">
            <h1 className="text-2xl font-semibold mb-4">Customer Management</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-2 p-2 border bg-gray-100 border-violet-300 rounded w-full"
            />

            <div className="mt-2 mb-3">
                <p>Total customers: {customers?.meta?.total}</p>
            </div>

            <div className="overflow-x-auto animate__animated animate__fadeInDown">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Profile</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Status</th>
                            <th className="border px-4 py-2 hidden md:table-cell">Orders</th>
                            <th className="border px-4 py-2 hidden md:table-cell">Followers</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers?.map((customer: any) => (
                            <tr key={customer.id} className="border-b hover:bg-gray-50 animate__animated animate__fadeInDown">
                                <td className="border px-4 py-2">
                                    <img
                                        src={customer.profilePhoto || "/default-profile.png"}
                                        alt={customer.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="border px-4 py-2">{customer.name}</td>
                                <td className="border px-4 py-2">{customer.email}</td>
                                <td className="border px-4 py-2">{customer.status}</td>
                                <td className="border px-4 py-2 hidden md:table-cell">{customer.Order?.length}</td>
                                <td className="border px-4 py-2 hidden md:table-cell">{customer.Follow?.length}</td>
                                <td className="border px-4 py-2">
                                    <div className="flex space-x-2">
                                        <Link
                                            to={`/admin/customer-details/${customer.id}`}
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                        >
                                            Details
                                        </Link>
                                        <button
                                            onClick={() => handleAction(customer.id, "Block")}
                                            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                                        >
                                            Block
                                        </button>
                                        <button
                                            onClick={() => handleAction(customer.id, "Delete")}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-between">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l"
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`px-4 py-2 ${pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CustomerManagement;
