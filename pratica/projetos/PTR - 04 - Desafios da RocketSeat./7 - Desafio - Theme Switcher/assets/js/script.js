let container = document.querySelector(".container");
let ckb = document.querySelector("#ckb");

// Função teste só para ver o funcionamento.
// function teste() {
//     container.classList.toggle("dark-mode");
// }

ckb.addEventListener("click", () => {
    container.classList.toggle("dark-mode");
})