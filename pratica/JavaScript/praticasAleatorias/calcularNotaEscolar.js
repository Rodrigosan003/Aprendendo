const readline = require("readline-sync");

let nota = parseFloat(readline.question("Digite a nota do aluno (0 a 100): "));

function calcularConceito(nota) {
  if (nota >= 90 && nota <= 100) {
    return "A";
  } else if (nota >= 80 && nota < 90) {
    return "B";
  } else if (nota >= 70 && nota < 80) {
    return "C";
  } else if (nota >= 60 && nota < 70) {
    return "D";
  } else if (nota >= 0 && nota < 60) {
    return "F";
  } else {
    return "Nota inválida!";
  }
}

let conceito = calcularConceito(nota);
console.log(`O conceito do aluno com nota ${nota} é: ${conceito}`);