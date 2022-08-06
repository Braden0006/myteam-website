import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="app bg-primary">
      <nav className="app-navbar flex bg-primary justify-center align-center">
        <Navbar />
      </nav>

      <section className="app-homepage">
        <Homepage />
      </section>
    </div>
  );
}

export default App;
