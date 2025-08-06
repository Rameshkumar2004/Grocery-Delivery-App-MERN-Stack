import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders (replace with your backend API later)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Example static data (replace with API)
        const data = [
          {
            id: 1,
            customer: "John Doe",
            date: "2025-08-01",
            total: 120.5,
            status: "Pending",
          },
          {
            id: 2,
            customer: "Jane Smith",
            date: "2025-08-03",
            total: 89.99,
            status: "Shipped",
          },
        ];
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="flex-1 p-6 overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 p-3">Order ID</th>
              <th className="border border-gray-200 p-3">Customer</th>
              <th className="border border-gray-200 p-3">Date</th>
              <th className="border border-gray-200 p-3">Total ($)</th>
              <th className="border border-gray-200 p-3">Status</th>
              <th className="border border-gray-200 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 p-3">{order.id}</td>
                <td className="border border-gray-200 p-3">{order.customer}</td>
                <td className="border border-gray-200 p-3">{order.date}</td>
                <td className="border border-gray-200 p-3">{order.total.toFixed(2)}</td>
                <td className="border border-gray-200 p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="border border-gray-200 p-3">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
