let menuIcon = document.querySelector("#menu-btn");
let nav = document.querySelector(".nav");
let link = document.querySelectorAll(".nav a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bi-x-lg");
  nav.classList.toggle("open");
});
