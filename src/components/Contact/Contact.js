import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Contact() {
  return (
    <>
      <div className="contact_box">
        <h1> You can contact me through email or LinkedIn </h1>
        <div className="horizontal">
          <div>
            <AiOutlineMail size={35} />
            <h3>m1chopra@ucsd.edu</h3>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/manan-chopra22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={35} style={{ color: "black" }} />
            </a>
            <h3>manan-chopra-22</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
