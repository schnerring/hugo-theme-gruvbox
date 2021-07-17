// Extensibility
function themeChanged(theme) {}

function getTheme() {
  if (localStorage && localStorage.getItem("theme")) {
    // User preference
    return localStorage.getItem("theme");
  }
  if (window.matchMedia) {
    // OS preference
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  // Undefined
}

function setTheme(theme) {
  // Hugo theme
  document.documentElement.setAttribute("theme", theme);

  // Prism theme
  const prismDark = document.getElementById("prism-dark");
  const prismLight = document.getElementById("prism-light");
  prismDark.toggleAttribute("disabled", theme === "light");
  prismLight.toggleAttribute("disabled", theme === "dark");

  // Store user preference
  localStorage.setItem("theme", theme);

  // Extensibility
  themeChanged(theme);
}

function toggleTheme(e) {
  const theme = e.currentTarget.classList.contains("light--hidden")
    ? "light"
    : "dark";
  setTheme(theme);
}

const toggleButtons = document.querySelectorAll(".theme__btn");
toggleButtons.forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});

const theme = getTheme();
if (theme) setTheme(theme);
