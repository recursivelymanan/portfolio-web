import "./Socials.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Socials() {
  return (
    <div>
      <div className="socials">
        <a
          href="https://github.com/recursivelymanan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="icon" size={60} style={{ color: "black" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/manan-chopra22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            className="icon"
            size={60}
            style={{ color: "black" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Socials;
