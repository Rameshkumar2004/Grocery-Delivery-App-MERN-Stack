import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$"; // Fix currency
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery , setSearchQuery]=useState({})

  // Fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  // Add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  // Update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  // Remove product from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
      setCartItems(cartData);
      toast.info("Removed from Cart");
    }
  };

  //Get cart Item Count

  const getCartCount=()=>{
    let totalCount=0;
    for(const item in cartItems){
      totalCount +=cartItems[item]
    }
    return totalCount;
  }
   
// Get Cart Total Amount
const getCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    const itemInfo = products.find(product => product._id === item);
    if (itemInfo && cartItems[item] > 0) {
      totalAmount += itemInfo.offerPrice * cartItems[item];
    }
  }

  // round to 2 decimal places
  return Math.floor(totalAmount * 100) / 100;
};




  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    getCartAmount,
    getCartCount,
    searchQuery,
    setSearchQuery

  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
