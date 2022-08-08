import "./App.css";
import NavBar from "./NavBar/NavBar";
import IconLink from "./IconLink/IconLink";
import Socials from "./Socials/Socials";
import DownloadButton from "./DownloadButton/DownloadButton";

function App() {
  return (
    <>
      <title>Manan Chopra</title>
      <header className="nav">
        <NavBar className="nav" />
      </header>
      <section id="about"></section>
      <section id="projects"></section>
      <section id="resume">
        <DownloadButton
          path="./mananChopraLabResume.pdf"
          id="resume-download"
        />
      </section>
      <section id="contact"></section>
      <section id="footer">
        <span id="footer-note"> made by manan chopra in la jolla </span>
      </section>
      <Socials />
    </>
  );
}

export default App;
