import React, { FC, useState } from "react";
import MediaQuery from "react-responsive";

import { Routes, Route } from "react-router-dom";
import { DirectorsContext } from "./Context/DirectorsContext";

import Navbar from "./Components/Navbar/Navbar";

import Homepage from "./Components/Homepage/Homepage";
import Homepage2 from "./Components/Homepage2/Homepage2";
import Homepage3 from "./Components/Homepage3/Homepage3";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";

import About from "./Components/About/About";
import AboutDirectors from "./Components/AboutDirectors/AboutDirectors";
import AboutClients from "./Components/AboutClients/AboutClients";

import Contact from "./Components/Contact/Contact";

import NavbarTablet from "./ResponsiveComponents/NavbarTablet";
import FooterTablet from "./ResponsiveComponents/FooterTablet";
import FooterDesktop from "./ResponsiveComponents/FooterDesktop";
import ContactDesktop from "./ResponsiveComponents/ContactDesktop";

import ScrollToTop from "./Modules/ScrollToTop";

interface Props {
  menu: boolean;
  setMenu: (menu: boolean) => void;

  nikita: boolean;
  setNikita: (nikita: boolean) => void;

  christian: boolean;
  setChristian: (christian: boolean) => void;

  cruz: boolean;
  setCruz: (cruz: boolean) => void;

  drake: boolean;
  setDrake: (drake: boolean) => void;

  griffin: boolean;
  setGriffin: (griffin: boolean) => void;

  aden: boolean;
  setAden: (aden: boolean) => void;
}

const App: FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const [nikita, setNikita] = useState<boolean>(false);
  const [christian, setChristian] = useState<boolean>(false);
  const [cruz, setCruz] = useState<boolean>(false);
  const [drake, setDrake] = useState<boolean>(false);
  const [griffin, setGriffin] = useState<boolean>(false);
  const [aden, setAden] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <ScrollToTop>
      <div className="app bg-primary overflow-x-hidden">
        <nav className="app-navbar absolute top-0 z-10 w-screen flex bg-primary justify-center align-center">
          <MediaQuery maxWidth={767}>
            <Navbar menu={menu} setMenu={setMenu} />
          </MediaQuery>

          <MediaQuery minWidth={768}>
            <NavbarTablet />
          </MediaQuery>
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

          <Route
            path="/about"
            element={
              <main className="app-about">
                <About />
                <DirectorsContext.Provider
                  value={{
                    nikita,
                    setNikita,
                    christian,
                    setChristian,
                    cruz,
                    setCruz,
                    drake,
                    setDrake,
                    griffin,
                    setGriffin,
                    aden,
                    setAden,
                  }}
                >
                  <AboutDirectors />
                </DirectorsContext.Provider>
                <AboutClients />
                <ContactSection />
              </main>
            }
          />

          <Route
            path="/contact"
            element={
              <main className="app-contact lg:flex lg:justify-center">
                <MediaQuery maxWidth={1023}>
                  <Contact />
                </MediaQuery>

                <MediaQuery minWidth={1024}>
                  <ContactDesktop />
                </MediaQuery>
              </main>
            }
          />
        </Routes>

        <footer>
          <MediaQuery maxWidth={767}>
            <Footer />
          </MediaQuery>

          <MediaQuery minWidth={768} maxWidth={1023}>
            <FooterTablet />
          </MediaQuery>

          <MediaQuery minWidth={1024}>
            <FooterDesktop />
          </MediaQuery>
        </footer>
      </div>
    </ScrollToTop>
  );
};

export default App;
