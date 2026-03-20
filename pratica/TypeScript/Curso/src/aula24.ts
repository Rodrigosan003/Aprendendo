// Aula 24: Aprendendo sobre P.O.O. Entendendo HERANÇA em Typescript.

// Em TypeScript, Herança é um pilar da Programação Orientada a Objetos (POO) que permite que uma classe (classe derivada) herde propriedades e métodos de outra classe (classe base), utilizando a palavra-chave extends. Isso promove a reutilização de código, facilita a manutenção e permite estender ou modificar o comportamento da classe pai. Por exemplo, uma classe Cachorro pode herdar de Animal, reutilizando propriedades como nome e sobrescrevendo um método como fazerSom() para adicionar um comportamento específico de cachorro.

// Como funciona a Herança em TypeScript:

// 1 - Classe Base (Superclasse): É a classe cujas propriedades e métodos serão herdados.
// 2 - Classe Derivada (Subclasse): É a classe que herda da classe base.
// 3 - Palavra-chave extends: É usada na declaração da classe derivada para especificar a classe da qual ela herdará.

// Exemplo Prático:

// Classe Base (Superclasse)
class AnimalHeranca {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  fazerSom(): void {
    console.log("Faz um som genérico");
  }
}

// Classe Derivada (Subclasse)
class CachorroHeranca extends AnimalHeranca {
  constructor(name: string) {
    super(name); // Chama o construtor da classe pai
  }

  // Sobrescreve o método da classe pai
  fazerSom(): void {
    console.log("Au au!");
  }

  // Método específico da classe Cachorro
  abanarRabo(): void {
    console.log(`${this.name} abana o rabo.`);
  }
}

const myDogHeranca = new CachorroHeranca("Buddy");
myDogHeranca.fazerSom(); // Saída: Au au!
myDogHeranca.abanarRabo(); // Saída: Buddy abana o rabo.
console.log(myDogHeranca.name); // Saída: Buddy (herdou a propriedade name)

// Vantagens da Herança
// Reutilização de Código
// : Evita a duplicação de código, pois as subclasses herdam membros da superclasse.
// Extensibilidade
// : Permite adicionar novas funcionalidades às classes derivadas sem modificar a classe pai.
// Manutenção Facilitada
// : Mudanças na classe pai refletem automaticamente nas classes filhas, simplificando a manutenção.
// Hierarquia de Classes
// : Cria uma estrutura hierárquica que ajuda na organização e na compreensão do código.
// Quando Usar Herança
// A herança é apropriada quando existe uma relação do tipo "é-um" entre as classes. Por exemplo, um Cachorro "é-um" tipo de Animal.
