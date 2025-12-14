const readline = require("readline-sync");

let nome = readline.question("Digite seu nome: ");
let idade = parseInt(readline.question("Digite sua idade: "));
let cidade = readline.question("Digite sua cidade: ");

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Cidade: ${cidade}`);
