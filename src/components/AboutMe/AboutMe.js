import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <>
      <div className="about_section">
        <div className="about_text">
          <h3 className="about_intro">Hello! My name is</h3>
          <h1 className="about_name">Manan Chopra.</h1>
          <h3 className="about_tagline">
            I'm a bioinformatics engineer with a passion for writing stories with data.
          </h3>
          <h3 className="about_tagline">
            I'm still working on developing this website, but for now you can see some of my publications and presentations below, as well as my resume. 
          </h3>
        </div>
      </div>
    </>
  );
}
