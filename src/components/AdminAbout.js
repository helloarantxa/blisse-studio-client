import React, { useState } from "react";
import { post } from "../services/authServices";

const AdminAbout = () => {
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !information || !image) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    const formData = { title, information, image };

    // Submit the form data to the server
    post("/about/about", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Failed to submit the form");
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">MEET YOUR FLORIST</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-600">Title</label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="information" className="text-gray-600">Information</label>
          <input
            type="text"
            placeholder="Information"
            value={information}
            onChange={(e) => setInformation(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-gray-600">Image URL</label>
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 col-span-2 sm:col-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminAbout;