let res = document.querySelector("#res");
let entrada = document.querySelector("#entrada");
let btn = document.querySelector("#btn");
// function botao() {
//     // alert("clicou");
//     res.textContent = entrada.value;
//     entrada.value = "";
// }

btn.addEventListener('click', () => {
    res.textContent = entrada.value;
    entrada.value = "";
})

