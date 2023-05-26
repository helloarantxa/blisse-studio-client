import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

  const handleDelete = () => {
    get(`/products/delete-product/${id}`)
      .then(() => {
        console.log("Product deleted");
        navigate("/create-product");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mt-8"> Edit Product Details</h1>
      {!editMode ? (
        <div className="border border-gray-300 rounded-md p-4 mt-4">
          <h3 className="text-lg font-bold"> {product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} className="mt-4" />

          <div className="flex space-x-4">
          <button
            onClick={handleEdit}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 mt-4 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 mt-4 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
          >
            Delete
          </button>
        </div>
        </div>


      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              value={editedProduct.name}
              name="name"
              className="border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-600">
              Description
            </label>
            <textarea
              placeholder="Description"
              onChange={handleChange}
              value={editedProduct.description}
              name="description"
              className="border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-600">
              Price
            </label>
            <input
              type="number"
              placeholder="Price"
              onChange={handleChange}
              value={editedProduct.price}
              name="price"
              className="border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="imageUrl" className="text-gray-600">
              Image URL
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              name="imageUrl"
              className="border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
          <div className="flex space-x-4">

            <button
              type="submit"
              className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              Cancel
            </button>


          </div>
        </form>
      )}
    </div>
  );
}

export default ProductDetails;
