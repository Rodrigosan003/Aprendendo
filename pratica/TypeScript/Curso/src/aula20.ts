// Aula 20: Aprendendo sobre P.O.O. Entendendo HERANÇA em Typescript.

// Em TypeScript, Herança é um pilar da Programação Orientada a Objetos (POO) que permite que uma classe (subclasse ou classe derivada) herde propriedades e métodos de outra classe (superclasse ou classe base) utilizando a palavra-chave extends. Isso promove a reutilização de código, a organização hierárquica de classes e a possibilidade de extender ou modificar o comportamento herdado, facilitando a manutenção e a criação de software modular.

// Como funciona a Herança em TypeScript?
// 1 - Definir a Classe Base: Uma classe principal é criada com atributos e métodos.
// 2 - Estender a Classe Base: Uma nova classe é criada e utiliza a palavra-chave extends para indicar que ela herda de outra classe.
// Exemplo Prático:
// Classe base (superclasse)
class Animal {
  protected nameN: string;

  constructor(nameN: string) {
    this.nameN = nameN;
  }

  makeSound(): void {
    console.log("Som genérico de animal");
  }
}

// Classe derivada (subclasse) que herda de Animal
class Dog extends Animal {
  constructor(nameN: string) {
    super(nameN); // Chama o construtor da classe base (Animal)
  }

  // Sobrescrevendo o método makeSound para um comportamento específico
  makeSound(): void {
    console.log("Au au!");
  }
}

const myDog = new Dog("Rex");
myDog.makeSound(); // Saída: Au au!
// console.log(myDog.nameN); // Saída: Rex
