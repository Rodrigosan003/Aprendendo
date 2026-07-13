let container = document.querySelector(".container");
let ckb = document.querySelector("#ckb");


ckb.addEventListener("click", () => {
    container.classList.toggle("dark-mode");
})