import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
})
const handleChange = (e) => {
        setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('info', newProduct)

    axios.post('http://localhost:4000/products/new-product', newProduct)
  .then((response) => {
    console.log('newProduct', response.data);
    navigate('/all-products');
  })

  .catch((error) => {
    console.error(error);
    // Handle error
  });
    // submission and create a new product
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
    </div>
  );
}

export default CreateProduct;
