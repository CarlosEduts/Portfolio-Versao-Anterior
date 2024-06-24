const container = document.querySelector(".container");
const themeButton = document.querySelector(".themeButton");
const divs = document.querySelectorAll(".content");
const projectDivs = document.querySelectorAll(".projectContent");

themeButton.addEventListener("click", () => {
  if (container.classList[1] == undefined) {
    themeButton.innerText = "light_mode";
  } else {
    themeButton.innerText = "dark_mode";
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
