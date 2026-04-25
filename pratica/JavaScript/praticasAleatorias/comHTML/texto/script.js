let res = document.querySelector("#res");
let entrada = document.querySelector("#entrada");
let btn = document.querySelector("#btn");

// Forma com o onclick 

// function botao() {
//     // alert("clicou");
//     res.textContent = entrada.value;
//     entrada.value = "";
// }

// Forma com o evento de click

btn.addEventListener('click', () => {
    res.textContent = entrada.value;
    entrada.value = "";
})

