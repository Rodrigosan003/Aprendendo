"use strict";
// testes/classificarIdade.test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const classificarIdade_1 = require("../src/classificarIdade");
console.log((0, classificarIdade_1.classificarIdade)(10)); // Esperado: Menor de idade!
console.log((0, classificarIdade_1.classificarIdade)(30)); // Esperado: Maior de idade!
console.log((0, classificarIdade_1.classificarIdade)(75)); // Esperado: Idoso!
console.log((0, classificarIdade_1.classificarIdade)(105)); // Esperado: Você está vivo ainda?
