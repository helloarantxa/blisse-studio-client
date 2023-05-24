import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: ""
  });
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/products/all-products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/products/new-product", newProduct)
      .then((response) => {
        console.log("newProduct", response.data);
        setProducts((prevProducts) => [...prevProducts, response.data]);
        navigate("/products");
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  const handleEdit = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          id="name"
        />
        <textarea
          placeholder="Description"
          onChange={handleChange}
          name="description"
          id="description"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          id="price"
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
          name="imageUrl"
          id="imageUrl"
        />
        <button type="submit">Create Product</button>
      </form>

      <h2>All Products</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />

          <button onClick={() => handleEdit(product._id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default CreateProduct;