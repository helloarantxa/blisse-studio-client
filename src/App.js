import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Connect from "./pages/ConnectPage";
import Portfolio from "./pages/PortfolioPage";
import Shop from "./pages/ShopPage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import CreateProduct from "./components/CreateProduct";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";
import ConnectCardsPage from "./components/ConnectCardsPage";
import AdminAbout from "./components/AdminAbout";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/connect-cards" element={<ConnectCardsPage />} />
        <Route path="/admin/about" element={<AdminAbout />} />
      </Routes>

      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;

