// Aula 26: Aprendendo Classes Abstratas em Typescript.

// Classes abstratas no TypeScript são modelos para outras classes, usadas para compartilhar implementações comuns e impor uma estrutura de herança, mas elas não podem ser instanciadas diretamente, servindo como um contrato para suas subclasses que devem implementar todos os seus métodos abstratos, ou usando-os junto com métodos concretos (com implementação). Para criar uma classe abstrata, utiliza-se a palavra-chave abstract.

// Quando usar classes abstratas
// Compartilhar lógica e estrutura: Use quando você tem uma base comum de comportamento e propriedades que deseja compartilhar entre várias subclasses relacionadas.

// Definir um modelo base: São ideais para definir uma classe base que serve como um rascunho, forçando as subclasses a implementar certas partes do código enquanto outras são fornecidas na classe abstrata.

// Como declarar e usar
// 1 -  Declarando a classe abstrata: Use a palavra-chave abstract antes de class para declarar uma classe abstrata.
// 2 - Definindo métodos abstratos: Métodos abstratos só têm sua assinatura (tipo e nome), sem implementação. A classe que herda da abstrata deve fornecer uma implementação para esses métodos.
// 3 - Herança: Use a palavra-chave extends para que uma classe herde de uma classe abstrata. A classe filha (subclasse) é a que será instanciada.

// Exemplo prático
abstract class AnimalBaseAula26 {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // Método abstrato: precisa ser implementado nas subclasses
  abstract fazerSom(): void;

  // Método concreto (com implementação)
  public comer(): void {
    console.log(`${this.nome} está comendo.`);
  }
}

class CachorroAula26 extends AnimalBaseAula26 {
  // Não é necessário redeclarar 'nome' aqui, pois já está na classe base

  constructor(nome: string) {
    super(nome); // Chama o construtor da classe pai (AnimalBaseAula26)
  }

  // Implementação do método abstrato
  fazerSom(): void {
    console.log(`${this.nome} faz "Au au!"`);
  }
}

// Uma classe filha pode instanciar um objeto
const cachorroAula26 = new CachorroAula26("Buddy");
cachorroAula26.comer(); // Saída: Buddy está comendo.
cachorroAula26.fazerSom(); // Saída: Buddy faz "Au au!"
