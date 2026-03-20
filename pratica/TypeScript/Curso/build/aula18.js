"use strict";
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
class Carro {
    modelo;
    constructor(modelo) {
        this.modelo = modelo;
    }
    ligarMotor() {
        console.log(`O motor do ${this.modelo} foi ligado.`);
    }
}
const meuCarro = new Carro("Sedan");
meuCarro.ligarMotor();
