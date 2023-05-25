import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.Context";

const Navbar = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/connect">WORK WITH US</Link>
      <Link to="/portfolio">MY WORK</Link>
      <Link to="/shop">SHOP</Link>
      
      {isLoggedIn ? (
        <button onClick={logOutUser}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
