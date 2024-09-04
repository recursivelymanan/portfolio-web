import "./ProjectList.css";
import works from "../../works.json";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function ProjectList() {
  const raised = true;
  const publications = works.publications.map((pub) => {
    return (
      <Card id="left" sx={{ width: 1 / 4 }} style={{ display: "inline-block" }}>
        <CardContent>
          <Typography variant="h6">{pub.title}</Typography>
          <Typography>{pub.date}</Typography>
        </CardContent>
        <CardActions>
          <a href={pub.url} target="_blank" rel="noopener noreferrer">
            <Button size="large">Read</Button>
          </a>
        </CardActions>
      </Card>
    );
  });

  const presentations = works.presentations.map((pres) => {
    return (
      <Card id="left" sx={{ width: 1 / 4 }} style={{ display: "inline-block" }}>
        <CardContent>
          <Typography variant="h6">{pres.title}</Typography>
          <Typography>{pres.date}</Typography>
        </CardContent>
        <CardActions>
          <a href={pres.url} target="_blank" rel="noopener noreferrer">
            <Button size="large">Read</Button>
          </a>
        </CardActions>
      </Card>
    );
  });
  return (
    <div>
      <h1 id="center">Publications</h1>
      <div id="center">{publications}</div>
      <h1 id="center">Presentations</h1>
      <div id="center">{presentations}</div>
    </div>
  );
}

export default ProjectList;
