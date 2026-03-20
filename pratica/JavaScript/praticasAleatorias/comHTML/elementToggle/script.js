let botao = document.querySelector("#botao");
let body = document.querySelector("body");

botao.addEventListener("click", () => {
    body.classList.toggle("red");
})