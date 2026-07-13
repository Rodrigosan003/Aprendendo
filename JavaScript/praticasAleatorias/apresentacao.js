const readline = require("readline-sync");

const nome = readline.question("Qual é o seu nome? ");
console.log(`Olá, ${nome}! Seja bem-vindo(a) à apresentação do meu projeto de programação!`);

console.log("Neste projeto, você poderá escolher um número e decidir quantas vezes deseja vê-lo repetido na tela.");

let numero = parseFloat(readline.question("Escolha um número: "));
let vezes = parseInt(
  readline.question("Quantas vezes deseja repetir esse número? ")
);

console.log(`Repetindo o número ${numero}, ${vezes} vezes:`);

for (let i = 0; i < vezes; i++) {
  console.log("O número é: " + numero);
}

console.log("Obrigado por participar da apresentação do meu projeto!");