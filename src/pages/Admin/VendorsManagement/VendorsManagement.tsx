import { useState } from "react";
import { Link } from "react-router-dom";

const vendors = [
    { id: 1, name: "Vendor 1", email: "vendor1@example.com", shopName: "Shop 1", status: "Active" },
    { id: 2, name: "Vendor 2", email: "vendor2@example.com", shopName: "Shop 2", status: "Blocked" },
    { id: 3, name: "Vendor 3", email: "vendor3@example.com", shopName: "Shop 3", status: "Active" },
    { id: 4, name: "Vendor 4", email: "vendor4@example.com", shopName: "Shop 4", status: "Blocked" },
];

const VendorsManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState<keyof typeof vendors[0] | "">("");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const handleDetails = (id: number) => {
        console.log("Details clicked for vendor ID:", id);
    };

    const handleBlock = (id: number) => {
        console.log("Block clicked for vendor ID:", id);
    };

    const handleDelete = (id: number) => {
        console.log("Delete clicked for vendor ID:", id);
    };


    // Filter vendors based on the search term
    const filteredVendors = vendors.filter((vendor) =>
        [vendor.name, vendor.email, vendor.shopName, vendor.status]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    // Sort vendors based on the selected field and direction
    const sortedVendors = filteredVendors.sort((a, b) => {
        if (!sortField) return 0; // If no sorting field is selected, return as is.
        if (sortDirection === "asc") {
            return a[sortField] > b[sortField] ? 1 : -1;
        } else {
            return a[sortField] < b[sortField] ? 1 : -1;
        }
    });

    const handleSort = (field: keyof typeof vendors[0]) => {
        if (sortField === field) {
            // Toggle sort direction if the same field is clicked again
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    return (
        <div className="p-4 md:p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl text-center md:text-3xl font-bold">Vendors Management</h1>
                <Link
                    to='/admin/create-vendor'
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm md:text-base"
                >
                    Create Vendor
                </Link>
            </div>

            {/* Search and Vendor Count */}
            <div className="mb-4 lg:flex justify-between space-y-4">
                <input
                    type="text"
                    placeholder="Search vendors..."
                    className="w-full md:w-1/3 p-2 border border-violet-400 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <p>Vendors: {filteredVendors.length}</p>
            </div>

            {/* Vendors Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th
                                onClick={() => handleSort("id")}
                                className="border border-gray-300 px-4 py-2 text-left cursor-pointer"
                            >
                                ID {sortField === "id" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                onClick={() => handleSort("name")}
                                className="border border-gray-300 px-4 py-2 text-left cursor-pointer"
                            >
                                Name {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                onClick={() => handleSort("email")}
                                className="border border-gray-300 px-4 py-2 text-left cursor-pointer"
                            >
                                Email {sortField === "email" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                onClick={() => handleSort("shopName")}
                                className="border border-gray-300 px-4 py-2 text-left cursor-pointer"
                            >
                                Shop Name {sortField === "shopName" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th
                                onClick={() => handleSort("status")}
                                className="border border-gray-300 px-4 py-2 text-left cursor-pointer"
                            >
                                Status {sortField === "status" && (sortDirection === "asc" ? "↑" : "↓")}
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedVendors.map((vendor) => (
                            <tr key={vendor.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{vendor.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.shopName}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.status}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center flex flex-col md:flex-row md:justify-center gap-2 items-center">
                                    <button
                                        onClick={() => handleDetails(vendor.id)}
                                        className="w-24 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm lg:text-base"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleBlock(vendor.id)}
                                        className="w-24 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm lg:text-base"
                                    >
                                        Block
                                    </button>
                                    <button
                                        onClick={() => handleDelete(vendor.id)}
                                        className="w-24 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm lg:text-base"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VendorsManagement;
