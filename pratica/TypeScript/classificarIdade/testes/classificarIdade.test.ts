// testes/classificarIdade.test.ts

import { classificarIdade } from "../src/classificarIdade";

console.log(classificarIdade(10));   // Esperado: Menor de idade!
console.log(classificarIdade(30));   // Esperado: Maior de idade!
console.log(classificarIdade(75));   // Esperado: Idoso!
console.log(classificarIdade(105));  // Esperado: Você está vivo ainda?
