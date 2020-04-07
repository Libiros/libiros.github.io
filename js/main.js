window.addEventListener("DOMContentLoaded",function() {
  const LIGHT_MODE = document.getElementById("light_mode");
  const DARK_MODE = document.getElementById("dark_mode");

  LIGHT_MODE.addEventListener("click", () => {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  });
  DARK_MODE.addEventListener("click", () => {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  })

  if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
})