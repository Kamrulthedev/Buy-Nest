/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllVendorsQuery } from "@/Redux/features/vendors/vendorsApi";
import { useState } from "react";
import { Link } from "react-router-dom";


type TVendor = {
    id: number;
    name: string;
    email: string;
    shopName: string;
    status: string;
};

const VendorsManagement = () => {
    const { data = { data: [] as TVendor[], meta: {} }, isLoading } = useGetAllVendorsQuery(undefined);

    console.log(data)

    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState<keyof TVendor | "">("");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const handleDetails = (id: number) => console.log("Details clicked for vendor ID:", id);
    const handleBlock = (id: number) => console.log("Block clicked for vendor ID:", id);
    const handleDelete = (id: number) => console.log("Delete clicked for vendor ID:", id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const filteredVendors = data.data.filter((vendor: any) =>
        [vendor.name, vendor.email, vendor.shopName, vendor.status]
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const sortedVendors = filteredVendors.sort((a : any, b: any) => {
        if (!sortField) return 0;
        if (sortDirection === "asc") {
            return a[sortField]! > b[sortField]! ? 1 : -1;
        } else {
            return a[sortField]! < b[sortField]! ? 1 : -1;
        }
    });

    const handleSort = (field: keyof TVendor) => {
        if (sortField === field) {
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
                    to="/admin/create-vendor"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm md:text-base"
                >
                    Create Vendor
                </Link>
            </div>

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

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            {["id", "name", "email", "shopName", "status"].map((field) => (
                                <th
                                    key={field}
                                    onClick={() => handleSort(field as keyof TVendor)}
                                    className="border border-gray-300 px-4 py-2 text-left cursor-pointer"
                                >
                                    {field.toUpperCase()}{" "}
                                    {sortField === field && (sortDirection === "asc" ? "↑" : "↓")}
                                </th>
                            ))}
                            <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedVendors.map((vendor: any) => (
                            <tr key={vendor.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{vendor.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{vendor.shop.name}</td>
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
