import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="app bg-primary">
      <nav className="app-navbar fixed top-0 z-10 w-screen flex bg-primary justify-center align-center">
        <Navbar />
      </nav>

      <section className="app-homepage">
        <Homepage />
      </section>
    </div>
  );
}

export default App;
