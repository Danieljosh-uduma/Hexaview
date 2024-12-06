function handleDownload() {
  const downloadButton = document.querySelector("#downloadButton");
  downloadButton.innerHTML = "Successful";
  downloadButton.disabled = true;
  const cancelButton = document.querySelector("#cancelButton");
  cancelButton.style.display = "none";
}
const downloadButton = document.querySelector("#downloadButton");
downloadButton.addEventListener("click", handleDownload);
