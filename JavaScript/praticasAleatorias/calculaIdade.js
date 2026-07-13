// Calcular idade.
const readline = require("readline-sync");

let nome = readline.question("Digite seu nome: ");
let anoDeNascimento = parseInt(readline.question("Digite o ano de nascimento: "));
let anoAtual = parseInt(readline.question("Digite o ano atual: "));

function calcularIdade(anoDeNascimento, anoAtual) {
    return anoAtual - anoDeNascimento;
}

let idade = calcularIdade(anoDeNascimento, anoAtual);
console.log(`Olá ${nome}. Sua idade é: ${idade} anos`);