import { Link } from "react-scroll";
import { AiFillCaretRight } from "react-icons/ai";
import "./NavBar.css";
import React from "react";

function NavBar() {
  return (
    <nav id="navbar">
      <ul>
        <li id="nav-icon">
          <AiFillCaretRight size={15} style={{ color: "black" }} />
        </li>
        <li>
          <Link activeClass="active" smooth spy to="about" offset={-65}>
            MANAN CHOPRA
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="projects" offset={-65}>
            PROJECTS
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="resume" offset={-65}>
            RESUME
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="contact" offset={-65}>
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
