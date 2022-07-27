import "./Socials.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Socials() {
  return (
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
    </div>
  );
}

export default Socials;
