import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Connect from "./pages/ConnectPage";
import Portfolio from "./pages/PortfolioPage";
import Shop from "./pages/ShopPage";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUp"
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';


function App() {
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
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/all-products" element={<AllProducts/>} />
        <Route path="/product-details/:id" element={<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
