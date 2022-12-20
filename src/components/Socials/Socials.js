import "./Socials.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImLab } from "react-icons/im";
import React from "react";

function Socials() {
  return (
    <div className="socials">
      <div className="icons">
        <a
          href="http://wahlinlab.ucsd.edu/meet-wahling-lab/manan-chopra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLab size={53} style={{ color: "black" }} />
        </a>
        <a
          href="https://twitter.com/literatureeee_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle size={60} style={{ color: "black" }} />
        </a>
        <a
          href="https://github.com/recursivelymanan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={60} style={{ color: "black" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/manan-chopra22/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={60} style={{ color: "black" }} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
