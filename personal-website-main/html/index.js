const pythonButton = document.getElementById("python");
const javascriptButton = document.getElementById("javascript");
const pythonCodeBlock = document.getElementById("codePython");
const javascriptCodeBlock = document.getElementById("codeJS");

// This line is to remove whitespace between buttons that apparently is added in html output
// https://stackoverflow.com/questions/42803663/how-can-i-remove-white-space-text-nodes-from-my-html
pythonButton.nextSibling.parentNode.removeChild(pythonButton.nextSibling);

pythonButton.addEventListener("click", () => {
  pythonCodeBlock.style.display = "";
  javascriptCodeBlock.style.display = "none";

  if (pythonButton.classList.contains("bg-[#2b2b2b]")) return;

  pythonButton.classList.add("bg-[#2b2b2b]");
  pythonButton.classList.remove("bg-[#222222]", "hover:bg-[#363636]");

  javascriptButton.classList.add("bg-[#222222]", "hover:bg-[#363636]");
  javascriptButton.classList.remove("bg-[#2b2b2b]");
});

javascriptButton.addEventListener("click", () => {
  javascriptCodeBlock.style.display = "";
  pythonCodeBlock.style.display = "none";

  if (javascriptButton.classList.contains("bg-[#2b2b2b]")) return;

  javascriptButton.classList.add("bg-[#2b2b2b]");
  javascriptButton.classList.remove("bg-[#222222]", "hover:bg-[#363636]");

  pythonButton.classList.add("bg-[#222222]", "hover:bg-[#363636]");
  pythonButton.classList.remove("bg-[#2b2b2b]");
});
