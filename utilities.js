document.addEventListener("input", function () {
  const nameInput = document.getElementById("name").value.trim();
  const numberInput = document.getElementById("number").value.trim();
  const nextButton = document.getElementById("nextButton");

  if (nameInput !== "" && numberInput !== "") {
    nextButton.classList.remove("hidden");
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.classList.add("hidden");
  }
});

function hideElementByID(e) {
  const element = document.getElementById(e);
  element.classList.add("hidden");
}
function showElementByID(e) {
  const element = document.getElementById(e);
  element.classList.remove("hidden");
}

function setBackgroundByID(e) {
  const element = document.getElementById(e);
  element.classList.add("bg-green-400");
}
function removeBackgroundByID(e) {
  const element = document.getElementById(e);
  element.classList.remove("bg-green-400");
}
function handleKeyEvent(e) {
  const element = e.target.innerText;
  document.getElementById("seat-name").innerText = element;
  console.log(element);
}
document.addEventListener("click", handleKeyEvent);
