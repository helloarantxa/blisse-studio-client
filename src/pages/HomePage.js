import React from "react";

function HomePage() {
  return (
    <div
      className="logo-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="https://res.cloudinary.com/dn0dezspf/image/upload/v1685055503/march2023-countries-code-along/Blisse/Blisse_xqcufj.png"
        alt="Bliss Logo"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default HomePage;