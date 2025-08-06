import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products (replace with real API)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Example dummy data
        const data = [
          {
            id: 1,
            name: "Wireless Earbuds",
            category: "Electronics",
            price: 59.99,
            stock: 34,
            image:
              "https://via.placeholder.com/100x100.png?text=Earbuds",
          },
          {
            id: 2,
            name: "Men's T-Shirt",
            category: "Clothing",
            price: 19.99,
            stock: 120,
            image:
              "https://via.placeholder.com/100x100.png?text=T-Shirt",
          },
        ];
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
      // TODO: Call backend API to delete from DB
    }
  };

  return (
    <div className="flex-1 p-6 overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-6">Product List</h1>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 p-3">Image</th>
              <th className="border border-gray-200 p-3">Name</th>
              <th className="border border-gray-200 p-3">Category</th>
              <th className="border border-gray-200 p-3">Price ($)</th>
              <th className="border border-gray-200 p-3">Stock</th>
              <th className="border border-gray-200 p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 p-3 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-200 p-3">{product.name}</td>
                <td className="border border-gray-200 p-3">{product.category}</td>
                <td className="border border-gray-200 p-3">
                  {product.price.toFixed(2)}
                </td>
                <td className="border border-gray-200 p-3">{product.stock}</td>
                <td className="border border-gray-200 p-3 flex gap-2">
                  <button
                    onClick={() => alert("Edit product feature coming soon")}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
