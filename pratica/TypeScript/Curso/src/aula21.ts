// Aula 21: Aprendendo sobre P.O.O. Entendendo HERANÇA em Typescript.

// Em TypeScript, Herança é um pilar da Programação Orientada a Objetos (POO) que permite que uma classe (subclasse ou classe derivada) herde propriedades e métodos de outra classe (superclasse ou classe base), reutilizando código e criando relações hierárquicas. Para implementar herança, usa-se a palavra-chave extends e, dentro da classe filha, a chamada super() para invocar o construtor da classe pai. A classe filha pode estender ou modificar o comportamento herdado, adicionando funcionalidades específicas.

// Como funciona a herança em TypeScript

// 1. Classe Base (Superclasse):
// É a classe original que contém propriedades e métodos que serão herdados.
// 2. Classe Derivada (Subclasse):
// É a nova classe que herda da classe base. Ela utiliza a palavra-chave extends para estabelecer a relação de herança.
// 3. Herança de Membros:
// A classe derivada tem acesso a todos os membros (propriedades e métodos) da classe base.
// 4. Reutilização de Código:
// Evita a duplicação de código, pois as funcionalidades comuns são definidas na classe base.
// 5. Modificação de Comportamento:
// A classe derivada pode sobrescrever métodos herdados para adicionar ou alterar o comportamento.
// 6. Uso de `super()`:
// No construtor da classe derivada, é necessário chamar super() para invocar o construtor da classe base, inicializando as propriedades herdadas.

// Exemplo prático:

// Classe base (Superclasse)
class AnimalBase {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log("Som genérico de animal");
  }

  public getName(): string {
    return this.name;
  }
}

// Classe derivada (Subclasse)
class DogV2 extends AnimalBase {
  constructor(name: string) {
    super(name); // Chama o construtor da classe pai
  }

  // Sobrescreve o método makeSound()
  public makeSound(): void {
    console.log("Au au!");
  }
}

const myDogV2 = new DogV2("Buddy");
myDogV2.makeSound(); // Output: Au au! (o método herdado foi sobrescrito)
console.log(myDogV2.getName()); // Output: Buddy (a propriedade name foi herdada)
