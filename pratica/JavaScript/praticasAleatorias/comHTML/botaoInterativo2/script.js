// let container = document.querySelector(".container");

// let blue = document.querySelector("#blue");
// let red = document.querySelector("#red");
// let black = document.querySelector("#black");
// let green = document.querySelector("#green");

// blue.addEventListener("click", () => {
//     container.classList.toggle("blue");
// });

// red.addEventListener("click", () => {
//     container.classList.toggle("red");
// });

// black.addEventListener("click", () => {
//     container.classList.toggle("black");
// });

// green.addEventListener("click", () => {
//     container.classList.toggle("green");
// });

let container = document.querySelector(".container");

let botoes = document.querySelectorAll(".btn");

const cores = ["blue", "red", "black", "green"];

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        // Remove todas as classes de cor
        container.classList.remove(...cores);

        // Adiciona a classe do botão clicado
        container.classList.add(botao.id);
    });
});