import { useGetByIdVendorsQuery } from '@/Redux/features/vendors/vendorsApi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

const VendorDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: userData } = useGetByIdVendorsQuery(id as string);

    if (!userData) return <div>Loading...</div>;

    const { data } = userData;

    return (
        <div className="max-w-4xl mx-auto p-6 h-full">
            <Link to="/admin/vendors-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-3xl font-semibold text-center mb-6">Vendor Details</h1>

            {/* Vendor Profile Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">

                <img
                    src={data.profilePhoto}
                    alt="Vendor"
                    className="w-40 h-40 object-cover rounded-t-lg mx-auto mb-4"
                />

                {/* Vendor Details */}
                <div className="space-y-3">
                    <p className="text-lg font-medium">Name : {data?.name}</p>
                    <p className="text-gray-600">Email : {data?.email}</p>
                    <p className={`text-sm ${data.status === 'ACTIVE' ? 'text-green-600' : 'text-red-600'}`}>
                        Status : {data.status}
                    </p>
                    <p className="text-gray-600">Role : {data.role}</p>
                    <p className="text-gray-600">Address : {data.address}</p>
                    <p className="text-gray-600">Contact No : {data.contactNumber}</p>
                    <p className="text-gray-600">Created on: {new Date(data.createdAt).toLocaleDateString()}</p>
                </div>
            </div>

            {/* Shop Information Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Shop Information</h2>

                {/* Shop Details */}
                <div className="space-y-3 text-center">
                    <div className="flex justify-center mb-4">
                        <img
                            src={data?.shop?.logoUrl}
                            alt="Shop Logo"
                            className="w-20 h-20 object-cover rounded-full"
                        />
                    </div>
                    <p className="text-lg font-medium text-center">Shop Name : {data?.shop?.name}</p>

                    <p className="text-gray-600">Description : {data?.shop?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VendorDetails;
