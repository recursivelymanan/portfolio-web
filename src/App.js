import "./App.css";
import React from "react";
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
            <a
              href="https://github.com/recursivelymanan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={50} style={{ color: "black" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/manan-chopra22/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
