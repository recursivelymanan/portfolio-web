import "./DownloadButton.css";

function download(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function DownloadButton() {
  return <button onclick="open()">Download!</button>;
}

export default DownloadButton;
