import React, { useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Homepage2 from "./Components/Homepage2/Homepage2";
import Homepage3 from "./Components/Homepage3/Homepage3";

function App() {
  return (
    <div className="app bg-primary overflow-hidden">
      <nav className="app-navbar absolute top-0 z-10 w-screen flex bg-primary justify-center align-center">
        <Navbar />
      </nav>

      <section className="app-homepage">
        <Homepage />
        <Homepage2 />
        <Homepage3 />
      </section>
    </div>
  );
}

export default App;
