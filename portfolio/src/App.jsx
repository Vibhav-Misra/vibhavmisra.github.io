import React, { useEffect, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/sections/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import "./index.css";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // refresh to home section
  useEffect(() => {
    const homeSection = document.getElementById("home__Section");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
        <Projects />
        <About />
        <Contact/>
      </div>
    </>
  );
}

export default App;
