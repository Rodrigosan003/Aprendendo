"use strict";
class Cadastro {
    nome;
    idade;
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
        console.log("Usuário cadastrado com sucesso!");
    }
}
const usuario1 = new Cadastro("Rodrigo", 25);
const usuario2 = new Cadastro("Ana", 30);
const usuario3 = new Cadastro("Maria", 28);
const usuario4 = new Cadastro("João", 35);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);
