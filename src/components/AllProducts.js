import React, { useEffect, useState } from "react";
import { get } from "../services/authServices";

function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    get('/products/all-products')
      .then((results) => {
        setProducts(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">ALL PRODUCTS</h1>
  
        <h3 className="mt-4 text-lg font-semibold text-gray-700 text-center">Pre-order only</h3>
  
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg p-4 text-center">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover object-center h-full w-full rounded-lg group-hover:opacity-75"
                  style={{ maxHeight: '250px' }} // Adjust the max height as desired
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-700">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{product.description}</p>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;