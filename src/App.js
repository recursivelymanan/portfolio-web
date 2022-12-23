import React, { Text } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* Toolbar */}
      <div className="toolbar">{/* Add your toolbar buttons here */}</div>

      {/* Kernel logo */}
      <div className="kernel_logo">{/* Add your kernel logo here */}</div>

      {/* Cells */}
      <div className="cell markdown">
        {/* Markdown cell content */}
        <div className="inner_cell">
          <h1>Welcome to my Jupyter notebook!</h1>
          <p>
            This is a markdown cell. You can use it to write formatted text,
            include images, and create links.
          </p>
          <a href="https://en.wikipedia.org/wiki/Markdown">
            Learn more about Markdown
          </a>
        </div>
      </div>
      <div className="cell code">
        <div className="inner_cell">
          <p>this is code</p>
        </div>
      </div>
      <div className="cell">
        {/* Input/output prompt */}
        <div className="prompt">In [1]:</div>

        {/* Input/output area */}
        <div className="output_area">{/* Add your input/output here */}</div>
      </div>
    </div>
  );
}
