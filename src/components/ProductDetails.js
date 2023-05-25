import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
import { post, get } from "../services/authServices";
import { fileChange } from "../services/fileChange";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  // console.log(editedProduct);

  useEffect(() => {
    get(`/products/product-details/${id}`)
      .then((response) => {
        setProduct(response.data);
        setEditedProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedProduct(product);
  };

  // change for image upload using Cloudinary
  const handleFileChange = (e) => {
    fileChange(e)
      .then((response) => {
        console.log(response.data);
        setEditedProduct((prev) => ({
          ...prev,
          [e.target.name]: response.data.image,
        }));
      })
      .catch((err) => {
        console.log("Error while uploading the file:", err);
      });
  };

  const handleChange = (e) => {
    setEditedProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(`/products/edit-product/${id}`, editedProduct)
      .then((response) => {
        console.log("Product edited:", response.data);
        setProduct(editedProduct);
        setEditMode(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Delete Product
  const handleDelete = () => {
    get(`/products/delete-product/${id}`)
      .then(() => {
        console.log("Product deleted");
        navigate("/all-products");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      {!editMode ? (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
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
          
          {/* image upload */}
          <input
            type="file"
            onChange={handleFileChange}
            name="imageUrl"
          />
          <button type="submit">Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default ProductDetails;