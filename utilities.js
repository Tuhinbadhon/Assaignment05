function hideElementByID(e) {
  const element = document.getElementById(e);
  element.classList.add("hidden");
}
function showElementByID(e) {
  const element = document.getElementById(e);
  element.classList.remove("hidden");
}
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