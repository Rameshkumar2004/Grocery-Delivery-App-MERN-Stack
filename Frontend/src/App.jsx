import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import { useAppContext } from "./Context/AppContext";
import Login from "./Components/Login";
import AllProducts from "./Pages/AllProducts";
import Productcategory from "./Pages/Productcategory";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import AddAddress from "./Pages/AddAddress";
import MyOrders from "./Pages/MyOrders";
import SellerLogin from "./Components/Seller/SellerLogin";
import SellerLayout from "./Pages/Seller/SellerLayout";
import AddProduct from "./Pages/Seller/AddProduct";
import ProductList from "./Pages/Seller/ProductList";
import Orders from "./Pages/Seller/Orders";

export default function App() {
  const isSellerpath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerpath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <ToastContainer />

      <div
        className={` ${isSellerpath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<Productcategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />

          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
      {!isSellerpath && <Footer />}
    </div>
  );
}
