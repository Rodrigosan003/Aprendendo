let menuIcon = document.querySelector("#menu-btn");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bi-x-lg");
  nav.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuIcon.classList.remove("bi-x-lg");
    link.classList.remove("active");
    link.classList.add("active");
  });
});
