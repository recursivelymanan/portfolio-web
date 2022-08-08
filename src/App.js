import "./App.css";
import "./index.css";
import NavBar from "./NavBar/NavBar";
import IconLink from "./IconLink/IconLink";
import Socials from "./Socials/Socials";
import DownloadButton from "./DownloadButton/DownloadButton";

function App() {
  return (
    <>
      <title>Manan Chopra</title>
      <div className="root">
        <NavBar />
        <section id="about" />
        <section id="projects" />
        <section id="resume" />
        <section id="contact" />
        <Socials />
        <DownloadButton
          path="./mananChopraLabResume.pdf"
          id="resume-download"
        />
      </div>
    </>
  );
}

export default App;
