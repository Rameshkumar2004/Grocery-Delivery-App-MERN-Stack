import React, { useState } from 'react';
import { assets } from './../assets/assets';

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
    type={type}
    name={name}
    value={address[name] || ''}
    onChange={handleChange}
    placeholder={placeholder}
    required
  />
);

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted address:", address);
    // You can send `address` to backend or update global context here
  };

  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>
        Add shipping <span className='font-semibold text-primary'>Address</span>
      </p>
      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First name" />
              <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last name" />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="Email address" />
              <InputField handleChange={handleChange} address={address} name="phone" type="tel" placeholder="Phone number" />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="street" type="text" placeholder="Street" />
              <InputField handleChange={handleChange} address={address} name="zipcode" type="text" placeholder="Zip code" />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City" />
              <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State" />
            </div>
            <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country" />

            <button type="submit" className="w-full py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
              Save Address
            </button>
          </form>
        </div>
        <img src={assets.add_address_iamge} alt="Add Address" className="max-w-md mb-8 md:mb-0" />
      </div>
    </div>
  );
};

export default AddAddress;
