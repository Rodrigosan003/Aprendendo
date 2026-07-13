// Aprendendo sobre P.O.O - Programação Orientada a Objetos.
// Aula 17 - Métodos construtores.

class Cadastro {
  nome: string;
  idade: number;
  constructor(n: string, i: number) {
    // Código que será executado sempre que um novo objeto for criado.
    this.nome = n;
    this.idade = i;
    console.log("Usuário cadastrado com sucesso!");
  }
}

const usuario1 = new Cadastro("Rodrigo", 25);
// usuario1.nome = "Rodrigo";
// usuario1.idade = 25;

const usuario2 = new Cadastro("Ana", 30);
// usuario2.nome = "Ana";
// usuario2.idade = 30;
const usuario3 = new Cadastro("Maria", 28);
// usuario3.nome = "Maria";
// usuario3.idade = 28;
const usuario4 = new Cadastro("João", 35);
// usuario4.nome = "João";
// usuario4.idade = 35;

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);

// Programar é muito legal! :D
// Aula 17 - Métodos construtores.
