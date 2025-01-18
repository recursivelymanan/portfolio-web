import React from "react";
import Home from "./Home.js";
import MediaReviews from "./MediaReviews.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mediareviews" element={<MediaReviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
