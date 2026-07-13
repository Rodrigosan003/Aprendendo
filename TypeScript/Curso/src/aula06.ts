// Duas formas de declarar um array em TypeScript:

let numeros: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numeros2: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numeros.push(10);
numeros.unshift(-1);
console.log(numeros);

let numeros_ro: ReadonlyArray<number> = [1, 2, 3, 4, 5];
