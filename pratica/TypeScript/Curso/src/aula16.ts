class Computador {
  nome: string = "";
  preco: number = 0;
}

const computador1 = new Computador();
computador1.nome = "Dell";
computador1.preco = 2500;

const computador2 = new Computador();
computador2.nome = "HP";
computador2.preco = 3000;

console.log(computador1);
console.log(computador2);
