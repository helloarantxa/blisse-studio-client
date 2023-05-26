import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.Context";
import AllProducts from "../components/AllProducts";

function ShopPage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <nav>
        <ul>
          {/* <Link to="/all-products">All Products</Link> */}

          {user && user.isAdmin && (
            <li className="p-6 mt-8">
              <Link
                to="/create-product"
                className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 mt-4 font-semibold hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 col-span-2 sm:col-auto"
              >
                Create Product
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <AllProducts />

    </div>
  );
}

export default ShopPage;
