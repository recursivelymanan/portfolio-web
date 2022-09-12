import ProjectList from "./ProjectList/ProjectList";
import React, { useState } from "react";

function Projects() {
  const [galleryView, toggleView] = useState(true);
  return (
    <div>
      <button onClick={() => toggleView(!galleryView)}>test</button>
      <ProjectList galleryView={galleryView} />
    </div>
  );
}

export default Projects;
