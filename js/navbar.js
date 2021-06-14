const card = document.querySelector(".card");
const bar = document.querySelector(".card__bar");

const firstElement = document.querySelector("a").getBoundingClientRect();
let current = document.querySelector("a");
bar.style.top = `${firstElement.top}px`;
bar.style.width = `${firstElement.width}px`;
bar.style.height = `${firstElement.height}px`;
bar.style.left = `${firstElement.left}px`;

window.addEventListener("resize", (_) => {
  console.log("Hopppp");
  bar.style.transition = "none";
  setPosition(bar, current.getBoundingClientRect());
});

card.addEventListener("click", (e) => {
  bar.style.transition = ".3s";
  let target = e.target;
  console.log("Hop");
  if (target.classList.contains("link")) {
    if (e.target.classList.contains("mdi")) {
      target = e.target.parentElement;
      current = e.target.parentElement;
    }

    setPosition(bar, target.getBoundingClientRect());
  }
});

function setPosition(element, data) {
  const { width, height, top, left } = data;
  element.style.top = `${top}px`;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  element.style.left = `${left}px`;
}


// for theme toggle
(function App() {
let isDark = false;
if (localStorage.getItem("dark-mode")) {
isDark = true;
setDarkTheme();
}
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
if (isDark) {
setLightTheme();
isDark = false;
ManageLocalStorage("DELETE");
return;
}
setDarkTheme();
ManageLocalStorage("ADD");
isDark = true;
});

function setLightTheme() {
document.body.classList.remove("dark");
}
function setDarkTheme() {
document.body.classList.add("dark");
}

function ManageLocalStorage(command) {
if (command === "DELETE") {
localStorage.removeItem("dark-mode");
return;
}
localStorage.setItem("dark-mode", true);
}
})();