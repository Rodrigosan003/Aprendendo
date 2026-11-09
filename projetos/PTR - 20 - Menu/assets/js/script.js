let menuIcon = document.querySelector("#menu-btn");
let nav = document.querySelector(".nav");
let links = document.querySelectorAll(".nav a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bi-x-lg");
  nav.classList.toggle("open");
});

function fecharMenu() {
  nav = false;
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
});
