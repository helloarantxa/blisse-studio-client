import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.Context";

function ShopPage() {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1 className="shop">Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>


          { user.isAdmin && 
          <li>
            <Link to="/create-product">Create Product</Link>
          </li> }
        </ul>
      </nav>
    </div>
  );
}

export default ShopPage;
