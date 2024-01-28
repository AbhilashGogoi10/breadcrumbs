import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import ProductListing from "./pages/product-listing";
import ProductDetails from "./pages/product-details";

import BreadCrumbs from "./components/breadcrumbs/BreadCrumbs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Avi's Store</h1>
        {/* breadcrumbs */}
        <BreadCrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
