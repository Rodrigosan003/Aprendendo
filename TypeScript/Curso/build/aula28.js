"use strict";
const usuario = {
    nome: "Ana",
    idade: 30,
    saudar: () => console.log("Olá!"),
    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },
};
class Cliente {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
