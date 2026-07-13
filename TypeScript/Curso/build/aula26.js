"use strict";
class AnimalBaseAula26 {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
}
class CachorroAula26 extends AnimalBaseAula26 {
    constructor(nome) {
        super(nome);
    }
    fazerSom() {
        console.log(`${this.nome} faz "Au au!"`);
    }
}
const cachorroAula26 = new CachorroAula26("Buddy");
cachorroAula26.comer();
cachorroAula26.fazerSom();
