const readline = require("readline-sync");

const nome = readline.question("Qual é o seu nome? ");
const idade = parseInt(readline.question("Quantos anos você tem? "));

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);