import React, { useState, useEffect, useContext } from "react";
import { post, get } from "../services/authServices";
import { AuthContext } from "../context/auth.Context";

function ConnectPage() {
  const { user } = useContext(AuthContext);
  const [addConnectCard, setAddConnectCard] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    projectDate: "",
    location: "",
    projectType: "",
    projectDescription: "",
  });
  const [connectCards, setConnectCards] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setAddConnectCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post("/connect/connectCard", addConnectCard)
      .then((response) => {
        console.log(response);
        setSubmissionStatus("success");
        setAddConnectCard({
          email: "",
          fullName: "",
          phoneNumber: "",
          projectDate: "",
          location: "",
          projectType: "",
          projectDescription: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setSubmissionStatus("error");
      });
  };

  const fetchConnectCards = () => {
    get("/connect/connectCards")
      .then((response) => {
        if (response) setConnectCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (cardId) => {
    post(`/connect/delete-card/${cardId}`)
      .then(() => {
        console.log("Card deleted");
        fetchConnectCards();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (user) {
      fetchConnectCards();
    }
  }, []);

  //--- [user] ???

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
            <option value="Wedding">Wedding</option>
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

      <div>
        {submissionStatus === "success" && <p>Submission successful!</p>}
        {submissionStatus === "error" && (
          <p>Submission failed. Please try again.</p>
        )}

        {connectCards.length > 0 && <h2>Information Requests</h2>}
        {connectCards.map((card) => (
          <div key={card._id}>
            <h3>Email: {card.email}</h3>
            <p>Full Name: {card.fullName}</p>
            <p>Phone Number: {card.phoneNumber}</p>
            <p>Project Date: {card.projectDate}</p>
            <p>Location: {card.location}</p>
            <p>Project Type: {card.projectType}</p>
            <p>Project Description: {card.projectDescription}</p>
            <button onClick={() => handleDelete(card._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectPage;
