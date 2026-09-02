let title = document.querySelector("h1");
let body = document.querySelector("body");

function clicou(){
    title.textContent = "Eu falei para não clicar!"
    body.classList.toggle("red")
}