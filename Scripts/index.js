const container = document.querySelector(".container");
const modeButton = document.querySelector(".mode-button");
const divs = document.querySelectorAll(".content");
const projectDivs = document.querySelectorAll(".project-box");

modeButton.addEventListener("click", () => {
  if (container.classList[1] == undefined) {
    modeButton.innerText = "light_mode";
  } else {
    modeButton.innerText = "dark_mode";
  }

  container.classList.toggle("darkTheme");
});

function display(className) {
  const content = document.querySelector(className);
  for (const div of divs) {
    div.style.display = "none";
  }

  content.style.display = "block";
}

function displayProjects(className) {
  const content = document.querySelector(className);
  for (const div of projectDivs) {
    div.style.display = "none";
  }

  content.style.display = "block";
}

display(".home");
displayProjects(".project01");
