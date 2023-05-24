import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.Context";
import AllProducts from "../components/AllProducts";

function ShopPage() {

  const { user } = useContext(AuthContext)

  return (
    <div>
      
      <nav>
        <ul>
          
            {/* <Link to="/all-products">All Products</Link> */}
        
          { user && user.isAdmin && 
          <li>
            <Link to="/create-product">Create Product</Link>
          </li> }
          
        </ul>
      </nav>
      <AllProducts/>
    </div>
  );
}

export default ShopPage;
