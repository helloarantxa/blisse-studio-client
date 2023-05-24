//Sumbits Connectcards
import React, { useState, useEffect } from "react";
import { get } from "../services/authServices";

function ConnectCardsPage() {
  const [connectCards, setConnectCards] = useState([]);

  useEffect(() => {
    get("/connect/connectCards")
      .then((response) => {
        setConnectCards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Connect Cards</h1>
      {connectCards.map((card) => (
        <div key={card._id}>
          <h3>Email: {card.email}</h3>
          <p>Full Name: {card.fullName}</p>
          <p>Phone Number: {card.phoneNumber}</p>
          <p>Project Date: {card.projectDate}</p>
          <p>Location: {card.location}</p>
          <p>Project Type: {card.projectType}</p>
          <p>Project Description: {card.projectDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default ConnectCardsPage;

