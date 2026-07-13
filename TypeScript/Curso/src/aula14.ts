const somaNumeros = (a: number, b: number): number => {
  return a + b;
};

console.log(somaNumeros(5, 10));

const fsoma = (n: number[]): number => {
  let s: number = 0;
  n.forEach((e) => {
    s += e;
  });
  return s;
};

let numer: number[] = [1, 2, 3, 4, 5];

console.log(fsoma(numer));
