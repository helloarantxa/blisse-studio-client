import React, { useEffect, useState } from "react";
import { get } from "../services/authServices";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    get('/products/all-products')
      .then((results) => {
        setProducts(results.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`);
  };

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
          {/* <button onClick={() => handleEdit(product._id)}>Edit</button> */}
        </div>
      ))}
    </div>
  );
}

export default AllProducts;