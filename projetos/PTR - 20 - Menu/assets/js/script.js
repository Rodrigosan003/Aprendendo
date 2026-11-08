let menuIcon = document.querySelector("#menu-btn");
let nav = document.querySelector(".nav");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bi-x-lg");
  nav.classList.toggle("open");
});

alert("Oi");
