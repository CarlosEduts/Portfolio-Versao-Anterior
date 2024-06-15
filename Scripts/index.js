const container = document.querySelector(".container");
const themeButton = document.querySelector(".themeButton");
const divs = document.querySelectorAll(".content");

themeButton.addEventListener("click", () => {
  if (container.classList[1] == undefined) {
    themeButton.innerText = "TEMA CLARO";
  } else {
    themeButton.innerText = "TEMA ESCURO";
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

display(".home");
