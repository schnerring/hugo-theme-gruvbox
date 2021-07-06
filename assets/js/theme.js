function toggleTheme(e) {
  const theme = e.currentTarget.classList.contains("light--hidden")
    ? "light"
    : "dark";
  document.documentElement.setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
}

const toggleButtons = document.querySelectorAll(".theme__btn");
toggleButtons.forEach((btn) => {
  btn.addEventListener("click", toggleTheme);
});
