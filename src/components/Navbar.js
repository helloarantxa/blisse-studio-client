import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.Context";

const Navbar = () => {
  const { logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/connect">Connect</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <button onClick={logOutUser}>Logout</button>
    </nav>
  );
};

export default Navbar;
