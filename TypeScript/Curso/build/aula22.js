"use strict";
class AnimalBaseAula22 {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    fazerBarulho() {
        console.log("Som genérico de animal");
    }
}
class Cachorro extends AnimalBaseAula22 {
    constructor(nome) {
        super(nome);
    }
    fazerBarulho() {
        console.log("Latir");
    }
    buscar() {
        console.log(`${this.nome} está buscando.`);
    }
}
const meuAnimal = new AnimalBaseAula22("Bicho");
meuAnimal.fazerBarulho();
const meuCachorro = new Cachorro("Rex");
meuCachorro.fazerBarulho();
meuCachorro.buscar();
