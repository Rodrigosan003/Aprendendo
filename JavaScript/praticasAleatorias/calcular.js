// function calcular(a, b) {
//     return a + b;
// }

// calcular(3, 5)

const readline = require("readline-sync");

let numero1 = parseFloat(readline.question("Digite o primeiro número: "));
let numero2 = parseFloat(readline.question("Digite o segundo número: "));
let operacao = readline.question("Escolha a operação (+, -, *, /): ");

function calcular(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Operação inválida!";
  }
}

let resultado = calcular(numero1, numero2, operacao);
console.log(`O resultado de ${numero1} ${operacao} ${numero2} é: ${resultado}`);