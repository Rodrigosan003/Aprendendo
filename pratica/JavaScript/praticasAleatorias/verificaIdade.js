// Se for menor de 18 anos, exibir "Menor de idade"
// Se for maior ou igual a 18 anos, exibir "Maior de idade"

// Calcular idade.
const readline = require("readline-sync");

let nome = readline.question("Digite seu nome: ");
let anoDeNascimento = parseInt(readline.question("Digite o ano de nascimento: "));
let anoAtual = parseInt(readline.question("Digite o ano atual: "));

function calcularIdade(anoDeNascimento, anoAtual) {
    return anoAtual - anoDeNascimento;
}

let idade = calcularIdade(anoDeNascimento, anoAtual);
if (idade < 0 || idade > 120 || isNaN(idade)) {
    console.log("Idade inválida.");
} else if (idade >= 60) {
    console.log(`Olá ${nome}. Você é idoso.`);
} else if (idade < 18) {
    console.log(`Olá ${nome}. Você é menor de idade.`);
} else {
    console.log(`Olá ${nome}. Você é maior de idade.`);
}   