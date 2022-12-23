import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import Projects from "./components/Projects/Projects";
import hm1 from "./imgs/hm1.png";
import hm2 from "./imgs/hm2.png";
import vp1 from "./imgs/vp1.png";

function App() {
  return (
    <>
      <title>Manan Chopra</title>
      <header className="nav">
        <NavBar className="nav" />
      </header>
      <section id="about">
        <div className="about_section">
          <div className="about_text">
            <h3 className="about_intro">Hello! My name is</h3>
            <h1 className="about_name">Manan Chopra.</h1>
            <h3 className="about_tagline">
              I use code to paint pictures from NGS data.
            </h3>
            <h3 className="about_tagline"> (Like these) </h3>
          </div>
        </div>
        <div className="about_figs">
          <a
            href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%204/Panel%20D/out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="about_hm1" src={hm1} alt="heatmap" />
          </a>
          <a
            href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%204/Panel%20H/out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="about_vp1" src={vp1} alt="volcano plot" />
          </a>
          <a
            href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%205/Panel%20F/out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="about_hm2" src={hm2} alt="heatmap" />
          </a>
        </div>
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
            hand coded by manan chopra in la jolla
          </a>
        </span>
      </section>
      <Socials />
    </>
  );
}

export default App;
