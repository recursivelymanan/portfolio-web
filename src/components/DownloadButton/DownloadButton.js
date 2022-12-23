import "./DownloadButton.css";
import resume from "../../mananChopraLabResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import React from "react";

function DownloadButton() {
  return (
    <div className="download_box">
      <a href={resume} download="chopra_resume.pdf">
        <AiOutlineDownload size={50} style={{ color: "black" }} />
      </a>
    </div>
  );
}

export default DownloadButton;
