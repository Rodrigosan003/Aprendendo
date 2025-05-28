/* No JS existem dois tipos de funções.
A primeira realiza uma tarefa e não devolve nada. */
function dizerNome() {
  console.log("Rodrigo");
}

dizerNome();

// A segunda realiza uma tarefa e devolve algo através do return.
function multiplicarPorDois(valor) {
  return valor * 2;
}

// console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(15);

console.log(resultado);
