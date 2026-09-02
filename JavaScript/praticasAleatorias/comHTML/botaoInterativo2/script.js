
// Melhoria
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