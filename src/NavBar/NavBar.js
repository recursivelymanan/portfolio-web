import { Link } from "react-scroll";
import { AiFillCaretRight } from "react-icons/ai";
import "./NavBar.css";

function NavBar() {
  return (
    <nav id="navbar">
      <ul>
        <li id="nav-icon">
          <AiFillCaretRight size={15} style={{ color: "black" }} />
        </li>
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
