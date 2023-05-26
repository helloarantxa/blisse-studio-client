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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CONNECT PAGE</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600">
            Email address *
          </label>
          <input
            name="email"
            type="email"
            required
            value={addConnectCard.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-gray-600">
            Full name *
          </label>
          <input
            name="fullName"
            type="text"
            required
            value={addConnectCard.fullName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNumber" className="text-gray-600">
            Your phone number
          </label>
          <input
            name="phoneNumber"
            type="text"
            value={addConnectCard.phoneNumber}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDate" className="text-gray-600">
            Project date
          </label>
          <input
            name="projectDate"
            type="text"
            value={addConnectCard.projectDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="text-gray-600">
            Location
          </label>
          <input
            name="location"
            type="text"
            value={addConnectCard.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectType" className="text-gray-600">
            What type of project are you hosting? *
          </label>
          <select
            name="projectType"
            value={addConnectCard.projectType}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
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
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectDescription" className="text-gray-600">
            Tell us about your project
          </label>
          <textarea
            name="projectDescription"
            value={addConnectCard.projectDescription}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 mt-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 col-span-2 sm:col-auto"
        >
          Submit
        </button>
      </form>

      <div>
        {submissionStatus === "success" && <p>Submission successful!</p>}
        {submissionStatus === "error" && (
          <p>Submission failed. Please try again.</p>
        )}

        {connectCards.length > 0 && (
          <h2 className="text-xl font-bold mt-8"> Information Requests</h2>
        )}
        {connectCards.map((card) => (
          <div
            key={card._id}
            className="border border-gray-300 rounded-md p-4 mt-4"
          >
            <h3>
              <strong>Email:</strong> {card.email}
            </h3>
            <p>
              <strong>Full Name:</strong> {card.fullName}
            </p>
            <p>
              <strong>Phone Number:</strong> {card.phoneNumber}
            </p>
            <p>
              <strong>Project Date:</strong> {card.projectDate}
            </p>
            <p>
              <strong>Location:</strong> {card.location}
            </p>
            <p>
              <strong>Project Type:</strong> {card.projectType}
            </p>
            <p>
              <strong>Project Description:</strong> {card.projectDescription}
            </p>
            <button
              onClick={() => handleDelete(card._id)}
              className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 mt-4 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConnectPage;
