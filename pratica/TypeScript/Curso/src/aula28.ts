// Aula 28: Aprendendo mais sobre INTERFACE em Typescript.

interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // O '?' torna a propriedade opcional
  saudar(): void; // Declaração de um método
}

// Um objeto que pode ser usado com a interface Pessoa
const usuario: Pessoa = {
  nome: "Ana",
  idade: 30,
  saudar: () => console.log("Olá!"),
  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  },
};

// Uma classe que implementa a interface Pessoa
class Cliente implements Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudar() {
    console.log(`Olá, meu nome é ${this.nome}!`);
  }

  apresentar() {
    console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
