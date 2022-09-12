import "./App.css";
import NavBar from "./NavBar/NavBar";
import Contact from "./Contact/Contact";
import Socials from "./Socials/Socials";
import DownloadButton from "./DownloadButton/DownloadButton";
import Projects from "./Projects/Projects";

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
        <DownloadButton />
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
