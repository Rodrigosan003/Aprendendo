// 1 - Operadores Aritméticos (Matemáticos).
// +, -, *, /, **
// ++, -- são operadores de incremento e decremento.

// let salario = 100;

// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(salario ** 2);

// 2 - Operadores de Atribuição.
// let valorTecladoGamer = 100;
// console.log(valorTecladoGamer);

// 3 - Operadores de Comparação. (igualdade)
// Igualdade estrita:
// console.log(1 === 1);
// console.log("1" === 1);
// Igualdade solta:
// console.log(1 == 1);
// console.log("1" == 1);

// 4 - Operadores Ternário.
// if e else são operadores lógicos.
// Operadores ternários são a forma mais clean de escrever essa estrutura lógica.
// let pontos = 200;
// let tipo = pontos > 100 ? "premium" : "comum";
// console.log(tipo);

// 5 - Operadores Lógicos.
// São representado pelo AND, OR, NOT
// AND = && - Ele retorna True se os dois operando forem true
// OR = || - Retorna true se um dos dois operandos forem true
// NOT = ! - Ele faz uma negação.
// Comparações não boleanos
// Falsy: undefined, null, 0, false, '', NaN
// If... Else...
// Se a hora estiver entre 06:00 até 12:00, bom dia!
// Se estiver entre 12:00 até 18:00, boa tarde!
// Caso contrário, boa noite.
// let hora = 18;

// if (hora >= 6 && hora < 12) {
//   console.log("Bom dia!");
// } else if (hora >= 12 && hora < 18) {
//   console.log("Boa tarde!");
// } else {
//   console.log("Boa noite!");
// }

// Switch... case...
// let permissao = "aluno";

// switch (permissao) {
//   case "comum":
//     console.log("usuário comum");
//     break;
//   case "gerente":
//     console.log("usuário gerente");
//     break;
//   case "diretor":
//     console.log("usuário diretor");
//     break;

//   default:
//     console.log("Usuário não reconhecido!");
// }

// Laço loop... for...
// 1. For
// for (let i = 1; i <= 5; i++) {
//   console.log("Estou aprendendo!", i);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 2. While
// let i = 10;

// while (i >= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i--;
// }

// 3. Do... while
// let i = 0;
// do {
//   console.log("digitando...", i);
//   i++;
// } while (i < 10);

// 4. For... in
// const pessoa = {
//   nome: "Rodrigo",
//   idade: 35,
// };

// for (let chave in pessoa) {
//   console.log(chave, pessoa["nome"]);
// }

// const cores = ["vermelho", "azul", "verde"];

// for (let indice in cores) {
//   console.log(indice, cores[indice]);
// }

// 5. For... of

// 6 - Operadores Bitwise.
