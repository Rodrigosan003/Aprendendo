// Exercício 3: Objeto com interface simples: Crie uma interface Pessoa e uma função que a utiliza.

// Sua solução aqui

interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // ? Propriedade opcional.
}

const usuario: Pessoa = {
  nome: "Rodrigo",
  idade: 35,
  email: "email@contato.com",
};

const usuario2: Pessoa = {
  nome: "Lucas",
  idade: 20,
  email: "email@contato.com",
};

console.log(usuario);
console.log(usuario2);
