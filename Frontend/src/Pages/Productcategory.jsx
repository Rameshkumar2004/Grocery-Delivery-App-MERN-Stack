import React from 'react';
import { useAppContext } from '../Context/AppContext';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { categories } from '../assets/assets';

const Productcategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className='mt-16'>
      {searchCategory && (
        <div className='flex flex-col items-end w-max mb-8'>
          <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
      )}

      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center h-[60vh] text-gray-500 text-lg'>
          No products found in this category.
        </div>
      )}
    </div>
  );
};

export default Productcategory;
