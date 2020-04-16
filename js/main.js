window.addEventListener("DOMContentLoaded",function() {
  const LIGHT_MODE = document.getElementById("light_mode");
  const DARK_MODE = document.getElementById("dark_mode");

  LIGHT_MODE.addEventListener("click", () => {
    lightModeOn();
  });
  DARK_MODE.addEventListener("click", () => {
    darkModeOn();
  })

  if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    darkModeOn();
  } else {
    lightModeOn();
  }

  function lightModeOn() {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
    LIGHT_MODE.classList.add("active");
    DARK_MODE.classList.remove("active");
  }
  
  function darkModeOn() {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    LIGHT_MODE.classList.remove("active");
    DARK_MODE.classList.add("active");
  }

})