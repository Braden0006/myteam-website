import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Homepage2 from "./Components/Homepage2/Homepage2";
import Homepage3 from "./Components/Homepage3/Homepage3";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";

import About from "./Components/About/About";

function App() {
  return (
    <div className="app bg-primary overflow-hidden">
      <nav className="app-navbar absolute top-0 z-10 w-screen flex bg-primary justify-center align-center">
        <Navbar />
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <section className="app-homepage">
              <Homepage />
              <Homepage2 />
              <Homepage3 />
              <ContactSection />
            </section>
          }
        />
        
        <Route path='/about' element={
          <section className="app-about">
            <About />
          </section>
        } />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
