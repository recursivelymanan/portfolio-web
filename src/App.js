import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <title>Manan Chopra</title>
      <header className="nav">
        <NavBar className="nav" />
      </header>
      <section id="about"></section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <div>
          <h2>Download my resume here!</h2>
          <DownloadButton />
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <span id="footer-note"> hand coded by manan chopra in la jolla </span>
      </section>
      <Socials />
    </>
  );
}

export default App;
