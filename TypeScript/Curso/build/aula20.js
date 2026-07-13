"use strict";
class Animal {
    nameN;
    constructor(nameN) {
        this.nameN = nameN;
    }
    makeSound() {
        console.log("Som genérico de animal");
    }
}
class Dog extends Animal {
    constructor(nameN) {
        super(nameN);
    }
    makeSound() {
        console.log("Au au!");
    }
}
const myDog = new Dog("Rex");
myDog.makeSound();
