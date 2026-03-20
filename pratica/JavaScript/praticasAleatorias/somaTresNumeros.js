// const somaTresNumeros = (num1, num2, num3) => {
//   return num1 + num2 + num3;
// };

// console.log(somaTresNumeros(3, 4, 2));

const readline = require("readline-sync");

let num1 = parseFloat(readline.question("Digite o primeiro número: "));
let num2 = parseFloat(readline.question("Digite o segundo número: "));
let num3 = parseFloat(readline.question("Digite o terceiro número: "));

const somaTresNumeros = (num1, num2, num3) => {
  return num1 + num2 + num3;
}

console.log("A soma dos três números é: " + somaTresNumeros(num1, num2, num3));