import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from "react";

function Contact() {
  return (
    <>
      <div className="contact_box">
        <h1 className="contact_header">
          You can contact me through email or LinkedIn
        </h1>
        <div className="horizontal">
          <div>
            <AiOutlineMail size={35} />
            <h3 className="contact_text">manan.zchopra[at]gmail[dot]com</h3>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/manan-chopra22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={35} style={{ color: "black" }} />
            </a>
            <h3 className="contact_text">manan-chopra-22</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
