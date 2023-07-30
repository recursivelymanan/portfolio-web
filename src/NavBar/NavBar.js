import { Link } from "react-scroll";
import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link activeClass="active" smooth spy to="about">
            MANAN CHOPRA
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="projects">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="blog">
            RESUME
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="contact">
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
