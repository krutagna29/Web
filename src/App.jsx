// src/App.jsx
import React from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Stats from "./component/Stats";
import Portfolio from "./component/Portfolio";
import Skills from "./component/Skills";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <Navbar />
      </header>

      <main>
        <Hero />
        <Stats />
        <Portfolio />
        <Skills />
        <Testimonial />
      </main>

      <footer className="site-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
