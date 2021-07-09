function getTheme() {
  if (localStorage && localStorage.getItem("theme")) {
    // user preference
    return localStorage.getItem("theme");
  }
  if (window.matchMedia) {
    // OS preference
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  // undefined
}

function setTheme(theme) {
  document.documentElement.setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
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
