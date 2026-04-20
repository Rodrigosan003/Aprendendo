let res = document.querySelector("#res");
let entrada = document.querySelector("#entrada");
function botao() {
    // alert("clicou");
    res.textContent = entrada.value;
    entrada.value = "";
}