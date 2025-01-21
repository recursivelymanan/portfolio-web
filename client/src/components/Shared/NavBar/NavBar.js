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
        <li class="mainPage">
          <RouterLink to="/">HOME</RouterLink>
        </li>
        {location.pathname === "/" ? (
          <>
            <li>
              <ScrollLink
                activeClass="active"
                smooth
                spy
                to="projects"
                offset={-65}
              >
                projects
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
                resume
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
                contact me
              </ScrollLink>
            </li>
          </>
        ) : (
          <></>
        )}
        <li>
          <RouterLink to="/mediareviews">MEDIA REVIEWS</RouterLink>
        </li>
        {location.pathname === "/mediareviews" ? (
          <li>
            <ScrollLink></ScrollLink>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
