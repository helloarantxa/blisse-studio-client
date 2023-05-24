import React, { useState } from "react";
import { post, get } from "../services/authServices";


function ConnectPage() {
  const [addConnectCard, setAddConnectCard] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    projectDate: "",
    location: "",
    projectType: "",
    projectDescription: "",
  });
  const handleChange = (e) => {
    setAddConnectCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    post(`/connect/connectCard`, addConnectCard)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Connect Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email address *
          <input
            name="email"
            type="email"
            required
            value={addConnectCard.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Full name *
          <input
            name="fullName"
            type="text"
            required
            value={addConnectCard.fullName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Your phone number
          <input
            name="phoneNumber"
            type="text"
            value={addConnectCard.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Project date
          <input
            name="projectDate"
            type="text"
            value={addConnectCard.projectDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Location
          <input
            name="location"
            type="text"
            value={addConnectCard.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          What type of project are you hosting? *
          <select
            name="projectType"
            value={addConnectCard.projectType}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Corporate">Corporate</option>
            <option value="Design">Design</option>
            <option value="Event">Event</option>
            <option value="Family">Family</option>
            <option value="Party">Party</option>
            <option value="Photoshop">Photoshop</option>
            <option value="Social">Social</option>
            <option value="Weddin">Wedding</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Tell us about your project
          <textarea
            name="projectDescription"
            value={addConnectCard.projectDescription}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ConnectPage;
