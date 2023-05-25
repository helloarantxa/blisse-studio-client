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

  //RETURN
  return (
    <div>
      <h1>MEET YOUR FLORIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Information"
          value={information}
          onChange={(e) => setInformation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {errorMessage && <p>{setErrorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminAbout;
