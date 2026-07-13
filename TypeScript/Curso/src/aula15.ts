function soma(v1: number, v2: number, v3: number): number {
  return v1 + v2 + v3;
}

console.log(soma(10, 25, 30));

// E se eu quiser fazer uma soma de 10 números ou mais?

// Para isso, podemos usar o operador rest ( ... )

function somaVarios(...numeros: number[]): number {
  return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

console.log(somaVarios(10, 25, 30, 40, 50, 60, 70, 80, 90, 100));

// OU

function soma(...n: number[]): number {
  let s: number = 0;
  n.forEach((en) => {
    s += en;
  });
  return s;
}

console.log(soma(10, 25, 30));
