
const OrderHistoryWithVendor = () => {
    const demoOrders = [
        {
            id: "ORD123",
            customerName: "John Doe",
            email: "john.doe@example.com",
            shopName: "ElectroMart",
            items: [{ id: 1 }, { id: 2 }],
            totalPrice: 120.5,
            status: "Completed",
            createdAt: "2024-12-18 14:30",
        },
        {
            id: "ORD124",
            customerName: "Jane Smith",
            email: "jane.smith@example.com",
            shopName: "FashionHub",
            items: [{ id: 1 }],
            totalPrice: 75.0,
            status: "Pending",
            createdAt: "2024-12-19 10:45",
        },
        {
            id: "ORD125",
            customerName: "Alice Johnson",
            email: "alice.johnson@example.com",
            shopName: "BookBazaar",
            items: [{ id: 1 }, { id: 2 }, { id: 3 }],
            totalPrice: 45.99,
            status: "Shipped",
            createdAt: "2024-12-20 09:15",
        },
    ];

    return (
        <div className="p-4 animate__animated animate__fadeInDown">
            <h1 className="text-base lg:text-3xl font-bold mb-4 text-violet-500 animate__animated animate__fadeInDown">Order Management</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-violet-700 animate__animated animate__fadeInDown">
                            <th className="px-4 py-2 border">Order ID</th>
                            <th className="px-4 py-2 border">Customer Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Shop Name</th>
                            <th className="px-4 py-2 border">Items Count</th>
                            <th className="px-4 py-2 border">Total Price</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoOrders.length > 0 ? (
                            demoOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 animate__animated animate__fadeInDown">
                                    <td className="px-4 py-2 border text-center">{order.id}</td>
                                    <td className="px-4 py-2 border text-center">{order.customerName}</td>
                                    <td className="px-4 py-2 border text-center">{order.email}</td>
                                    <td className="px-4 py-2 border text-center">{order.shopName}</td>
                                    <td className="px-4 py-2 border text-center">{order.items.length}</td>
                                    <td className="px-4 py-2 border text-center">${order.totalPrice.toFixed(2)}</td>
                                    <td className="px-4 py-2 border text-center">{order.status}</td>
                                    <td className="px-4 py-2 border text-center">{order.createdAt}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-4 py-2 border text-center animate__animated animate__fadeInDown" colSpan={8}>
                                    No orders available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderHistoryWithVendor;
