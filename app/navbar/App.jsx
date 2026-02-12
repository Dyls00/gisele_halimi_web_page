import Navbar from "./Navbar";
import Store from "./Pages/Store";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Cart from "./Pages/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-sky-100 h-[200vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}
