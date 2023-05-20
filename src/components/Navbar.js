import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/connect">Connect</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;    