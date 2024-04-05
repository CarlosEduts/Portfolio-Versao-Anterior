const container = document.querySelector(".container");

function themeButton() {
  container.classList.toggle("darkTheme");
}

function display(className) {
  const divs = document.querySelectorAll(".content");
  for (const div of divs) {
    div.style.display = "none";
  }

  const content = document.querySelector(className);
  content.style.display = "block";
}

display(".home");
