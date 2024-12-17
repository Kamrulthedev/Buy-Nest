/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetByIdCustomerQuery } from "@/Redux/features/customer/customer.api";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const CustomerDetails = () => {
    const { id } = useParams();
    const { data: customer, isLoading, isError } = useGetByIdCustomerQuery(id);

    // Loading State
    if (isLoading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    if (isError || !customer) {
        return <div className="text-center mt-4 text-red-500">Failed to load customer details!</div>;
    }

    const CustomersInfo = customer.data;

    const {
        profilePhoto,
        name,
        email,
        contactNumber,
        address,
        status,
        createdAt,
    } = CustomersInfo;

    return (
        <div className="container mx-auto p-6">
             <Link to="/admin/customers-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-2xl font-bold mb-4">Customer Details</h1>

      
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 mb-6">
                <div className="flex-shrink-0">
                    <img
                        src={profilePhoto || "/default-profile.png"}
                        alt={name}
                        className="w-32 h-32 rounded-full object-cover border border-gray-300"
                    />
                </div>
                <div className="ml-4 mt-4 md:mt-0">
                    <p className="text-lg font-semibold">Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Contact Number: {contactNumber}</p>
                    <p>Address: {address}</p>
                    <p>Status: <span className={`font-semibold ${status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{status}</span></p>
                    <p>Created At: {new Date(createdAt).toLocaleDateString()}</p>
                    <p>Followers: {CustomersInfo.Follow?.length || 0}</p>
                    <p>Orders: {CustomersInfo.Orders?.length || 0}</p>
                </div>
            </div>

            {/* Reviews Table */}
            <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>
            {CustomersInfo?.Review?.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">Review ID</th>
                                <th className="border px-4 py-2">Title</th>
                                <th className="border px-4 py-2">Rating</th>
                                <th className="border px-4 py-2">Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {CustomersInfo?.Review.map((review: any) => (
                                <tr key={review.id} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">{review?.id}</td>
                                    <td className="border px-4 py-2">{review?.title}</td>
                                    <td className="border px-4 py-2">{review?.rating}</td>
                                    <td className="border px-4 py-2">{review?.comment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-500">No reviews available for this customer.</p>
            )} 
        </div>
    );
};

export default CustomerDetails;
