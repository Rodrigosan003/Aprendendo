"use strict";
class AnimalHeranca {
    name;
    constructor(name) {
        this.name = name;
    }
    fazerSom() {
        console.log("Faz um som genérico");
    }
}
class CachorroHeranca extends AnimalHeranca {
    constructor(name) {
        super(name);
    }
    fazerSom() {
        console.log("Au au!");
    }
    abanarRabo() {
        console.log(`${this.name} abana o rabo.`);
    }
}
const myDogHeranca = new CachorroHeranca("Buddy");
myDogHeranca.fazerSom();
myDogHeranca.abanarRabo();
console.log(myDogHeranca.name);
