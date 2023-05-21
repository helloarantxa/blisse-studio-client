import React from "react";
import { Link } from "react-router-dom";

function ShopPage() {
  return (
    <div>
      <h1 className="shop">Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/all-products">All Products</Link>
          </li>
          <li>
            <Link to="/create-product">Create Product</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ShopPage;
