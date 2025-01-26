import React from "react";
import NavBar from "./components/Shared/NavBar/NavBar";
import Socials from "./components/Shared/Socials/Socials";
import DBTest from "./components/MediaReviews/DBTest/DBTest";

function MediaReviews() {
  return (
    <>
      <header className="nav">
        <NavBar className="nav" />
      </header>
      <Socials />
      <DBTest />
    </>
  );
}

export default MediaReviews;
