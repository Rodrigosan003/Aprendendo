let menu = document.querySelectorAll("a");

// menu.addEventListener("click", () => {
//     menu.classList.toggle("active")
// })

menu.onclick = () => {
    menu.classList.toggle("active");
}