// Aula 23: Aprendendo sobre P.O.O. Entendendo HERANÇA em Typescript.

// Em TypeScript, Herança permite criar novas classes (classes derivadas) que herdam propriedades e métodos de uma classe existente (classe base ou superclasse), utilizando a palavra-chave extends. Isso promove a reutilização de código, reduz a duplicação e cria uma estrutura hierárquica de classes, onde a classe derivada pode adicionar ou modificar o comportamento herdado.
// Como funciona a Herança em TypeScript:

// 1. Definição da Classe Base:
// Primeiro, define-se uma classe que servirá como a origem dos atributos e comportamentos.

// 2. Definição da Classe Derivada:
// Para criar uma nova classe que herda, utiliza-se a palavra-chave extends seguida do nome da classe base.

// 3. Reutilização de Membros:
// A classe derivada ganha automaticamente todos os membros (propriedades e métodos) da classe base, sem a necessidade de reescrevê-los.

// 4. Extensão e Modificação:
// A classe derivada pode:
// - Adicionar novos membros que não existem na classe base.
// - Modificar membros herdados (sobrescrever métodos), alterando seu comportamento para um caso específico.

// Exemplo prático:

// Classe base (superclasse)
class AnimalBase23 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some sound");
  }
}

// Classe derivada (subclasse) que herda de AnimalBase
class DogAula23 extends AnimalBase23 {
  constructor(name: string) {
    super(name); // Chama o construtor da classe base
  }

  // Sobrescreve o método makeSound
  makeSound(): void {
    console.log("Woof woof!");
  }

  // Método específico da classe DogAula23
  bark(): void {
    console.log("Barking...");
  }
}

const myDogAula23 = new DogAula23("Buddy");
myDogAula23.makeSound(); // Saída: Woof woof! (método sobrescrito)
myDogAula23.bark(); // Saída: Barking... (método da classe DogAula23)
console.log(myDogAula23.name); // Saída: Buddy (propriedade herdada de AnimalBase)
