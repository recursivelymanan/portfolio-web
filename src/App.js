import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import Projects from "./components/Projects/Projects";
import hm1 from "./imgs/hm1.png";
import vp1 from "./imgs/vp1.png";
import sp1 from "./imgs/sp1.png";
import sp2 from "./imgs/sp2.png";

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
          <div className="about_sps">
            <a
              href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%205/Panel%20F/out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="about_sp1" src={sp1} alt="swarmplot" />
            </a>
            <a
              href="https://github.com/WahlinLab/Human_RGC-iN/tree/main/Figure%204/Panel%20D/out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="about_sp2" src={sp2} alt="heatmap" />
            </a>
          </div>
        </div>
        <div className="about_citations">
          <p>
            Jones MK, Agarwal D, Mazo KW, Chopra M, Jurlina SL, Dash N, Xu Q,
            Ogata AR, Chow M, Hill AD, Kambli NK, Xu G, Sasik R, Birmingham A,
            Fisch KM, Weinreb RN, Enke RA, Skowronska-Krawczyk D, Wahlin KJ.
            Chromatin Accessibility and Transcriptional Differences in Human
            Stem Cell-Derived Early-Stage Retinal Organoids. Cells. 2022;
            11(21):3412. https://doi.org/10.3390/cells11213412
          </p>
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
