import React from "react";

import AboutMe from "./components/Home/AboutMe/AboutMe";
import NavBar from "./components/Shared/NavBar/NavBar";
import Contact from "./components/Home/Contact/Contact";
import Socials from "./components/Shared/Socials/Socials";
import DownloadButton from "./components/Home/DownloadButton/DownloadButton";
import Projects from "./components/Home/Projects/Projects";

function Home() {
  return (
    <>
      <title>Manan Chopra</title>
      <header className="nav">
        <NavBar className="nav" />
      </header>
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <div>
          <h2 className="resume_text">Download my resume here!</h2>
          <DownloadButton />
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <span id="footer-note">
          <a
            href="https://github.com/recursivelymanan/portfolio-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            hand coded by manan chopra in the SF bay area
          </a>
        </span>
      </section>
      <Socials />
    </>
  );
}

export default Home;
