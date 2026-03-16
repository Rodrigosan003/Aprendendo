// Inputs
let first = document.getElementById("first");
let second = document.getElementById("second");

// Operação
let op = null;
document.querySelectorAll("[data-op]").forEach(btn => {btn.onclick = () => op = btn.dataset.op;
});

// Ação
let limpar = document.getElementById("limpar");
let igual = document.getElementById("igual");

let res = document.getElementById("res");

function clicou() {
  return res.textContent = "Clicou!!!";
};










