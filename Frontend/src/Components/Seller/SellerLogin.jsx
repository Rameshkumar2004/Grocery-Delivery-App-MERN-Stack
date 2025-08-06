import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';

const SellerLogin = () => {
  const { isSeller, setIsSeller, navigate } = useAppContext(); // ✅ correct destructuring

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // ✅ fix typo: prevenDefault → preventDefault
    setIsSeller(true); // ✅ now this works
  };

  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="max-h-min flex flex-col gap-5 items-center text-sm text-gray-600 mt-16"
      >
        <div className="flex flex-col gap-5 items-start p-8 py-12 sm:min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Seller</span> Login
          </p>

          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
          >
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;
