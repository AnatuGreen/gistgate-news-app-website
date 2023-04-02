import "./App.css";
import Navbar from "./Nav";
import heroBackground from "./smiling-happy-young-woman.jpg";
import About from "./About";
import Terms from "./Terms";
import Contact from "./Contact";
import { useEffect, useState } from "react";

function App() {
  // useEffect(() => {
  //   function handleHashChange() {
  //     const { hash } = window.location;
  //     if (hash !== "") {
  //       const element = document.querySelector(hash);
  //       if (element) {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   }

  //   window.addEventListener("hashchange", handleHashChange);
  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);

  return (
    <div className="App">
      <div className="heroSection section" id="section1">
        <Navbar />
        <HeroText />
      </div>

      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Terms />
      </div>
      <div id="section4">
        <Contact />
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div>
      <p className="welcome">
        Welcome to <br></br>GistGate News App
      </p>
    </div>
  );
}

// const overlayStyles = {
//   content: '""',
//   display: "block",
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to set the transparency of the overlay color
// };

export default App;
