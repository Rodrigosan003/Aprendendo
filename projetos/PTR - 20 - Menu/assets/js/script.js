let menuIcon = document.querySelector("#menu-btn");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bi-x-lg");
  nav.classList.toggle("open");
});

links.addEventListener("click", () => {
  links.forEach((rm) => {
    rm.classList.remove("active");
  });
  links.classList.add("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuIcon.classList.remove("bi-x-lg");
  });
});
