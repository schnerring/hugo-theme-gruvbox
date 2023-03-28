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
  // Main theme
  document.documentElement.setAttribute("data-theme", theme);

  // Prism theme
  const prismDark = document.getElementById("prism-dark");
  const prismLight = document.getElementById("prism-light");
  prismDark.toggleAttribute("disabled", theme === "light");
  prismLight.toggleAttribute("disabled", theme === "dark");

  // Store user preference
  localStorage.setItem("theme", theme);
}

// Initial load
const theme = getTheme();
if (theme) setTheme(theme);

function toggleTheme(e) {
  const theme = e.currentTarget.classList.contains("light--hidden")
    ? "light"
    : "dark";
  setTheme(theme);
}

// This script is inlined in the <head> of the document, so we have to wait
// for the DOM content before can add event listeners to the toggle buttons
document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".theme__toggle");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
});
