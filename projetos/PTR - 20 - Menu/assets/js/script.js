let btn = document.querySelector(".menu-btn");
let imgMenu = document.querySelector("i");
let nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  if (imgMenu.contains("bi bi-list")) {
    imgMenu.classList.remove("bi bi-list");
  } else {
    imgMenu.classList.add("bi bi-x-lg");
  }
});
