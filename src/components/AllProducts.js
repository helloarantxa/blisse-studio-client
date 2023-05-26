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
    <div className="p-6">
      <h1 className="text-xl font-bold mt-8"> All Products</h1>

      {products.map((product) => (

        <div key={product._id} className="border border-gray-300 rounded-md p-4 mt-4">

         <h3 className="text-lg font-bold"> {product.name}</h3>

          <p>{product.description}</p>

          <p>Price: ${product.price}</p>

          <img src={product.imageUrl} alt={product.name} className="mt-4" />
          
        </div>
      ))}
    </div>
  );
}

export default AllProducts;