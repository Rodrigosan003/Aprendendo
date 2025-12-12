const readline = require("readline-sync");

let nome = readline.question("Digite seu nome: ");
let idade = parseInt(readline.question("Digite sua idade: "));
let email = readline.question("Digite seu email: ");

function cadastrarUsuario(nome, idade, email) {
  return {
    nome: nome,
    idade: idade,
    email: email,
  };
}

let usuario = cadastrarUsuario(nome, idade, email);
console.log("Usuário cadastrado com sucesso:");
console.log(usuario);
