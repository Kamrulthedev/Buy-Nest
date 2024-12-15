/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllUsersQuery } from '@/Redux/features/user/userApi';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';


const AllUsers = () => {
    const { data: users = { data: [], meta: {} }, isLoading } = useGetAllUsersQuery();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    const handleRoleToggle = (userId: any) => {
        console.log(userId);
    };

    const handleStatusToggle = (userId: any) => {
        console.log(userId);
    };

    const handleDeleteUser = (userId: any) => {
        console.log(`User with ID ${userId} deleted`);
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
    

    const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

    if (isLoading) return <div>Loading...</div>;

    console.log(users.data)

    return (
        <div className="p-6 font-serif">
            <h1 className="text-2xl font-bold mb-4 text-center">All Users</h1>

            <input
                type="text"
                placeholder="Search by name or email..."
                className="mb-4 px-4 py-2 border rounded w-full lg:w-1/2 bg-gray-100"
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse shadow-lg">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-4">ID</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Role</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data.map((user: any) => (
                            <tr key={user.id} className="border-b">
                                <td className="p-4">{user.id}</td>
                                <td className="p-4">{user.name}</td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">{user.role}</td>
                                <td className="p-4">{user.status}</td>
                                <td className="lg:p-4 p-2 flex space-x-2">
                                    <button onClick={() => handleRoleToggle(user.id)} className="w-32 px-2 py-1 lg:px-4 lg:py-2 text-sm lg:text-base bg-blue-500 text-white rounded hover:bg-blue-600">
                                        Toggle Role
                                    </button>
                                    <button onClick={() => handleStatusToggle(user.id)} className="w-32 lg:px-4 lg:py-2 text-sm lg:text-base bg-green-500 text-white rounded hover:bg-green-600">
                                        Toggle Status
                                    </button>
                                    <button onClick={() => handleDeleteUser(user.id)} className="w-32 lg:px-4 lg:py-2 text-sm lg:text-base bg-red-500 text-white rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-between">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllUsers;
