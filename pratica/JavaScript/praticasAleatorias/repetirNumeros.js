const readline = require("readline-sync");
// const nome = readline.question('Qual é o seu nome? ');
// console.log(`Olá, ${nome}!`);

let numero = parseFloat(readline.question("Escolha um número: "));
let vezes = parseInt(
  readline.question("Quantas vezes deseja repetir esse número? ")
);

for (let i = 0; i < vezes; i++) {
  console.log("O número é: " + numero);
}
