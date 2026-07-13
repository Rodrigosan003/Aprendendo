// 5 - Implemente uma função que calcule o fatorial de um número inteiro não negativo.
// function fatorial(num) {
//   let result = num;
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     while (num > 1) {
//       num--;
//       result *= num;
//     }
//   }
//   return result;
// }

// console.log(fatorial(0));

// Função recursiva:
function fatorialRecursivo(n) {
  let resultado = 1;
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorialRecursivo(n - 1);
}

// Função interativa:

function fatorialInterativo(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

const numero = 5;
const fatorialRecursivoResultado = fatorialRecursivo(numero);
const fatorialInterativoResultado = fatorialInterativo(numero);

console.log(
  `O resultado de ${numero} (recursivo) é: ${fatorialRecursivoResultado}`
);
console.log(
  `O resultado de ${numero} (interativo) é: ${fatorialInterativoResultado}`
);
