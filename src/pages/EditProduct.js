import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: ""
  });
  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/product-details/${id}`)
      .then((response) => {
        setProduct(response.data);
        setEditedProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    setEditedProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .put(`http://localhost:4000/products/edit-product/${id}`, editedProduct)
    .then((response) => {
      console.log("Product edited:", response.data);
      navigate(`/products/${id}`);
    })
    .catch((error) => {
      console.error(error);
      // Handle error
    });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/products/delete-product/${id}`)
      .then(() => {
        console.log("Product deleted");
        navigate("/all-products");
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="EditProduct">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={editedProduct.name}
          name="name"
        />
        <textarea
          placeholder="Description"
          onChange={handleChange}
          value={editedProduct.description}
          name="description"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          value={editedProduct.price}
          name="price"
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
          value={editedProduct.imageUrl}
          name="imageUrl"
        />
        <button type="submit">Save</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditProduct;
