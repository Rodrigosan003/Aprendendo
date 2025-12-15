const readline = require("readline-sync");

let nota = parseFloat(readline.question("Digite a primeira nota: "));
let nota2 = parseFloat(readline.question("Digite a segunda nota: "));
let nota3 = parseFloat(readline.question("Digite a terceira nota: "));

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

let media = calcularMedia(nota, nota2, nota3);
console.log(`A média escolar é: ${media.toFixed(2)}`);