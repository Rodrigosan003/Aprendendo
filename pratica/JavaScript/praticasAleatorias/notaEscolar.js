const readline = require("readline-sync");

const nomeAluno = readline.question("Qual é o nome do aluno? ");
const nota1 = parseFloat(readline.question("Digite a primeira nota: "));
const nota2 = parseFloat(readline.question("Digite a segunda nota: "));
const nota3 = parseFloat(readline.question("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3;

console.log(
  `A média final de ${nomeAluno} é ${media.toFixed(2)}.`
);
if (media >= 7) {
  console.log("Parabéns! Você foi aprovado.");
} else {
  console.log("Infelizmente, você foi reprovado.");
}   