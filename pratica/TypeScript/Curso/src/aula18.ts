// Aula 18: P.O.O. Métodos de classes em TypeScript.

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Este é um método de classe
  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Carro {
  modelo: string;

  constructor(modelo: string) {
    this.modelo = modelo; // Usando this para atribuir o modelo
  }

  ligarMotor() {
    console.log(`O motor do ${this.modelo} foi ligado.`);
  }
}

const meuCarro = new Carro("Sedan"); // Chama o constructor
meuCarro.ligarMotor(); // Chama o método
