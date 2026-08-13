import React from "react";
import { Routes, Route } from "react-router-dom";
import Navmarquee from "./components/Navmarquee.jsx";
import Navbartab from "./components/Navbartab.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Pages from "./pages/Pages.jsx";

function App() {
  return (
    <>
      <Navmarquee />
      <Navbartab />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/women" element={<Shop />} />
        <Route path="/men" element={<Shop />} />
        <Route path="/kids" element={<Shop />} />
        <Route path="/blog" element={<Pages />} />
        <Route path="/pages" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
