function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);

  section.scrollIntoView({ behavior: "smooth" });
}
function next() {
  hideElementByID("homeScreen");
  showElementByID("success");
}

function Continue() {
  hideElementByID("success");
  showElementByID("homeScreen");
}
