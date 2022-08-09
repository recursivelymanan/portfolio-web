import "./DownloadButton.css";
import resume from "../mananChopraLabResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function DownloadButton() {
  return (
    <div>
      <a href={resume} download="chopra_resume.pdf">
        <AiOutlineDownload size={50} style={{ color: "black" }} />
      </a>
    </div>
  );
}

export default DownloadButton;
