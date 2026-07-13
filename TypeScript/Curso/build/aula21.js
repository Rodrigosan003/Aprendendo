"use strict";
class AnimalBase {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Som genérico de animal");
    }
    getName() {
        return this.name;
    }
}
class DogV2 extends AnimalBase {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Au au!");
    }
}
const myDogV2 = new DogV2("Buddy");
myDogV2.makeSound();
console.log(myDogV2.getName());
