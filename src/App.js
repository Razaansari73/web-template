import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.className = dark ? "" : "dark-mode";
  };

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {" "}
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}{" "}
      </button>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/menu" element={<Menu />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
