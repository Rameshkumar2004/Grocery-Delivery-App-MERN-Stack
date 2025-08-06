import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../Context/AppContext';

function BestSeller() {
  const { products } = useAppContext();

  // Filter best-selling products if needed (example: top 4)
  const bestSellers = products.slice(0, 5);

  return (
    <div className='mt-16'>
      {/* Title */}
      <p className='text-2xl md:text-3xl font-medium mb-6'>Best Sellers</p>
      
      {/* Product Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {bestSellers.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
