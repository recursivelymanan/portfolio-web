import { Link as ScrollLink } from "react-scroll";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

import "./NavBar.css";
import React from "react";

function NavBar() {
  const location = useLocation();

  return (
    <nav id="navbar">
      <ul>
        <li id="nav-icon">
          <AiFillCaretRight size={15} style={{ color: "black" }} />
        </li>
        {location.pathname === "/" ? (
          <>
            <li>
              <ScrollLink
                activeClass="active"
                smooth
                spy
                to="about"
                offset={-65}
              >
                MANAN CHOPRA
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                smooth
                spy
                to="projects"
                offset={-65}
              >
                PROJECTS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                smooth
                spy
                to="resume"
                offset={-65}
              >
                RESUME
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                smooth
                spy
                to="contact"
                offset={-65}
              >
                CONTACT ME
              </ScrollLink>
            </li>
          </>
        ) : (
          <li>
            <RouterLink to="/">HOME</RouterLink>
          </li>
        )}
        <li>
          <RouterLink to="/movies">MOVIES</RouterLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
