// Aula 22: Aprendendo sobre P.O.O. Entendendo HERANÇA em Typescript.

// Em TypeScript, Herança permite criar uma nova classe (derivada) que reutiliza, estende e modifica o comportamento de uma classe existente (base) usando a palavra-chave extends. A classe derivada herda as propriedades e os métodos da classe base, promove a reutilização de código e estabelece uma hierarquia entre as classes, sendo uma das quatro características fundamentais da Programação Orientada a Objetos (POO).

// Como funciona a Herança em TypeScript

// 1 - Classe Base (ou Superclasse): É a classe original que define um conjunto de propriedades e métodos.
// 2 - Classe Derivada (ou Subclasse): É a nova classe que herda da classe base.
// 3 - Palavra-chave extends: Usada para indicar que uma classe herda de outra.

// Exemplo de Código:

// Classe base (AnimalBaseAula22)
class AnimalBaseAula22 {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fazerBarulho(): void {
    console.log("Som genérico de animal");
  }
}

// Classe derivada (Cachorro) que herda de AnimalBaseAula22
class Cachorro extends AnimalBaseAula22 {
  constructor(nome: string) {
    super(nome); // Chama o construtor da classe pai (AnimalBaseAula22)
  }

  fazerBarulho(): void {
    // Sobrescreve o método fazerBarulho
    console.log("Latir");
  }

  buscar(): void {
    console.log(`${this.nome} está buscando.`);
  }
}

// Criando objetos
const meuAnimal = new AnimalBaseAula22("Bicho");
meuAnimal.fazerBarulho(); // Saída: Som genérico de animal

const meuCachorro = new Cachorro("Rex");
meuCachorro.fazerBarulho(); // Saída: Latir (método sobrescrito)
meuCachorro.buscar(); // Saída: Rex está buscando.
