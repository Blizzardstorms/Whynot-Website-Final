import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function Layout({ children }) {
  return (
    <div>
      <header className="border-b">
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold" style={{ color: "#ff7a00" }}>Y-Not Build</Link>
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-4">{children}</main>
      <footer className="mt-12 border-t">
        <div className="max-w-6xl mx-auto p-4 text-sm">
          <div>Y-Not Build — Umkomaas + 100km (KZN), worldwide on request</div>
          <div>Whidenham, Umkomaas, KZN</div>
          <div>Tel: 0681100585 / 0798471559</div>
          <div>Email: stafford@ynotbuild.co.za / dylan@ynotbuild.co.za</div>
          <div className="text-gray-500 mt-2">© {new Date().getFullYear()} Y-Not Build. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path="/about" element={<Layout><About/></Layout>} />
      <Route path="/gallery" element={<Layout><Gallery/></Layout>} />
      <Route path="/contact" element={<Layout><Contact/></Layout>} />
      <Route path="*" element={<Layout><NotFound/></Layout>} />
    </Routes>
  </BrowserRouter>
);
