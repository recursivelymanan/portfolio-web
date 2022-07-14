import "./App.css";
import NavBar from "./NavBar/NavBar";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import IconLink from "./IconLink/IconLink";

function App() {
  return (
    <>
      <title>Manan Chopra</title>
      <div className="root">
        <h1 class="construction-msg">
          {" "}
          Hello! My site is currently under construction.{" "}
        </h1>
        <div className="socials">
          <div className="icons">
            <a href="https://twitter.com/literatureeee_">
              <AiFillTwitterCircle size={50} style={{ color: "black" }} />
            </a>
            <a href="https://github.com/recursivelymanan">
              <AiFillGithub size={50} style={{ color: "black" }} />
            </a>
            <a href="https://www.linkedin.com/in/manan-chopra22/">
              <AiFillLinkedin size={50} style={{ color: "black" }} />
            </a>
          </div>
          <div className="icons-msg">
            <p>Check out my other profiles!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
