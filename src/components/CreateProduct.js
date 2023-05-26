import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post, get } from "../services/authServices";
import { fileChange } from "../services/fileChange";

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
    get("/products/all-products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFileChange = (e) => {
    fileChange(e)
      .then((response) => {
        console.log(response.data);
        setNewProduct((prev) => ({ ...prev, [e.target.name]: response.data.image }));
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  const handleChange = (e) => {
    setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post("/products/new-product", newProduct)
      .then((response) => {
        console.log("newProduct", response.data);
        setProducts((prevProducts) => [...prevProducts, response.data]);
        navigate("/all-products");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>


     <form onSubmit={handleSubmit} className="space-y-4">
  <div className="flex flex-col">
    <label htmlFor="name" className="text-gray-600">Name</label>
    <input
      type="text"
      placeholder="Name"
      onChange={handleChange}
      name="name"
      id="name"
      className="border border-gray-300 rounded-md p-2 mt-1"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="description" className="text-gray-600">Description</label>
    <textarea
      placeholder="Description"
      onChange={handleChange}
      name="description"
      id="description"
      className="border border-gray-300 rounded-md p-2 mt-1"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="price" className="text-gray-600">Price</label>
    <input
      type="number"
      placeholder="Price"
      onChange={handleChange}
      name="price"
      id="price"
      className="border border-gray-300 rounded-md p-2 mt-1"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="imageUrl" className="text-gray-600">Image URL</label>
    <input
      type="file"
      onChange={handleFileChange}
      name="imageUrl"
      id="imageUrl"
      className="border border-gray-300 rounded-md p-2 mt-1"
    />
  </div>
  <button
    type="submit"
    className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 col-span-2 sm:col-auto"
  >
    Create Product
  </button>
</form>



      <h2 className="text-xl font-bold mt-8">Products Created</h2>
      {products.map((product) => (
        <div key={product._id} className="border border-gray-300 rounded-md p-4 mt-4">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} className="mt-4" />
          <button
            onClick={() => handleEdit(product._id)}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 mt-4 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default CreateProduct;