import { useGetByIdShopsQuery } from "@/Redux/features/shops/shopsApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const ShopDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: shopData, isLoading } = useGetByIdShopsQuery(id as string);

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;

    if (!shopData) {
        return <div className="text-center text-red-500 mt-10">Shop not found.</div>;
    }

    const { logoUrl, name, description, createdAt } = shopData.data;

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
            <Link to="/admin/shops-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Shop Logo */}
                <div className="bg-gradient-to-r from-blue-500 to-violet-500 p-6 text-center">
                    <img
                        src={logoUrl}
                        alt={name}
                        className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-md object-cover"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-white mt-4">{name}</h1>
                </div>

                {/* Shop Details */}
                <div className="p-6 md:p-8">
                    {/* Description */}
                    <div className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold text-gray-800">Description</h2>
                        <p className="text-gray-600 mt-2">{description || "No description provided."}</p>
                    </div>

                    {/* Shop Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-md font-semibold text-gray-700">Created On</h3>
                            <p className="text-gray-600">{new Date(createdAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-gray-700">Status</h3>
                            <p className={`text-gray-600 ${shopData?.data?.vendor?.status === "ACTIVE" ? "text-green-500" : "text-red-500"}`}>
                                {shopData?.data?.vendor?.status}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-gray-700">Vendor Name</h3>
                            <p className="text-gray-600">{shopData?.data?.vendor?.name || "N/A"}</p>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-gray-700">Vendor Email</h3>
                            <p className="text-gray-600">{shopData?.data?.vendor?.email || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;