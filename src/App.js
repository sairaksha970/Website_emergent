import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/App.css";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Farmers from "@/pages/Farmers";
import Contact from "@/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
