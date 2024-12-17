/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChangeStatusMutation, useDeleteUserMutation, useGetAllUsersQuery } from '@/Redux/features/user/userApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'tailwindcss/tailwind.css';


const AllUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const usersPerPage = 5;

    const { data: users = { data: [], meta: {} }, isLoading } = useGetAllUsersQuery([
        { name: 'page', value: currentPage },
    ]);
    const [changeStatus, { isLoading: statusChangeLoading }] = useChangeStatusMutation();


    const [DeleteUser] = useDeleteUserMutation();


    const handleRoleToggle = (userId: number, role: string) => {
        console.log(`User ID: ${userId}, Selected Role: ${role}`);
        setDropdownOpen(null);
    };


    //status Change function
    const handleStatusToggle = async (userId: number, status: string) => {
        const toastId = toast.loading("Changing User Status...");
        try {
            const updatedData = {
                userId,
                status
            };
            const response = await changeStatus(updatedData).unwrap();
            toast.update(toastId, {
                render: response?.message || "User Status Change successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        } catch (error) {
            toast.update(toastId, {
                render: "User Status Change failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        }
    };

    // delete function
    const handleDeleteUser = async (userId: number) => {
        const confirmationToastId = toast(
            <div className="flex items-center space-x-4">
                <span>Are you sure ?     </span>
                <button
                    onClick={async () => {
                        toast.update(confirmationToastId, {
                            render: "Deleting user...",
                            type: "info",
                            isLoading: true,
                            autoClose: false,
                            closeButton: false,
                        });

                        const data = { userId };
                        try {
                            const res = await DeleteUser(data).unwrap();
                            toast.update(confirmationToastId, {
                                render: res?.message || "User deleted successfully!",
                                type: "success",
                                isLoading: false,
                                autoClose: 3000,
                                closeButton: true,
                            });
                        } catch (error) {
                            toast.update(confirmationToastId, {
                                render: "Error deleting user.",
                                type: "error",
                                isLoading: false,
                                autoClose: 3000,
                                closeButton: true,
                            });
                        }
                    }}
                    className="bg-red-500 text-white rounded px-4 py-2"
                >
                    Yes
                </button>
                <button
                    onClick={() => {
                        toast.dismiss(confirmationToastId);
                    }}
                    className="bg-gray-500 text-white rounded px-4 py-2"
                >
                    No
                </button>
            </div>,
            {
                position: "top-right",
                autoClose: false,
                closeButton: false,
                progress: undefined,
            }
        );
    };

    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.data.filter((user: any) =>
        (user.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (user.email?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    const sortedUsers = filteredUsers.sort((a: any, b: any) =>
        (a.name || '').localeCompare(b.name || '')
    );

    const totalPages = Math.ceil(users?.meta?.total / usersPerPage);
    
    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="p-6 font-serif mb-10 animate__animated animate__fadeInDown">
            <h1 className="text-2xl font-bold mb-4">All Users</h1>

            <div className="lg:flex justify-between space-y-3 mb-3">
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="mb-4 px-4 py-2 border rounded w-full lg:w-1/2 bg-gray-100 border-violet-400"
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <p>Users: {users?.meta?.total || 0}</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse shadow-lg">
                    <thead>
                        <tr className="bg-gray-200 text-left text-sm">
                            <th className="p-4">ID</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.map((user: any) => (
                            <tr key={user.id} className="border-b text-sm animate__animated animate__fadeInDown">
                                <td className="p-4">{user.id}</td>
                                <td className="p-4">{user.name}</td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">{user.role}</td>
                                <td className="p-4">{user.status}</td>
                                <td className="lg:p-4 p-2 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                                    {/* Role Toggle Button */}
                                    <div className="relative">
                                        <button
                                            onClick={() =>
                                                setDropdownOpen(
                                                    dropdownOpen === user.id ? null : user.id
                                                )
                                            }
                                            className="w-28 px-3 py-1 lg:px-2 lg:py-2 text-xs lg:text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Toggle Role
                                        </button>
                                        {dropdownOpen === user.id && (
                                            <div className="absolute z-10 mt-2 w-32 bg-white border rounded shadow-lg">
                                                <ul>
                                                    {['ADMIN', 'VENDOR', 'CUSTOMER'].map((role) => (
                                                        <li
                                                            key={role}
                                                            onClick={() =>
                                                                handleRoleToggle(user.id, role)
                                                            }
                                                            className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200"
                                                        >
                                                            {role}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Status Toggle Button */}
                                    <button
                                        onClick={() => {
                                            const newStatus = user.status === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE';
                                            handleStatusToggle(user.id, newStatus);
                                        }}
                                        disabled={isLoading}
                                        className={`w-28 px-3 py-1 lg:px-2 lg:py-2 text-xs lg:text-sm ${user.status === 'ACTIVE'
                                            ? 'bg-green-500 hover:bg-green-600'
                                            : 'bg-yellow-500 hover:bg-yellow-600'
                                            } text-white rounded`}
                                    >
                                        {statusChangeLoading ? 'Updating...' : user.status === 'ACTIVE' ? 'BLOCK' : 'ACTIVE'}
                                    </button>


                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteUser(user.id)}
                                        className="w-28 px-3 py-1 lg:px-2 lg:py-2 text-xs lg:text-sm bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-between items-center">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2">Page {currentPage} of {totalPages || 1}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllUsers;
