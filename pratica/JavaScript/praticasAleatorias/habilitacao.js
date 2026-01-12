const readline = require("readline-sync");

const nome = readline.question("Digigite seu nome: ");
const idade = parseFloat(readline.question("Digite sua idade: "));

if (idade >= 18) {
    console.log(`Olá ${nome}, você tem ${idade} anos. Você já tem idade para tirar habilitação.`)
} else {
    console.log(`Olá ${nome}, você só tem ${idade} anos. Você não tem idade suficiente para habilitação!!!`);
}