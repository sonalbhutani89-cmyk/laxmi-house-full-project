import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import Gallery from "./pages/Gallery";
import Brands from "./pages/Brands";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/brands" element={<Brands />} />

      <Route path="/contact" element={<ContactPage />} />

    </Routes>
  );
}

export default App;