"use strict";
class AnimalBase23 {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some sound");
    }
}
class DogAula23 extends AnimalBase23 {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Woof woof!");
    }
    bark() {
        console.log("Barking...");
    }
}
const myDogAula23 = new DogAula23("Buddy");
myDogAula23.makeSound();
myDogAula23.bark();
console.log(myDogAula23.name);
