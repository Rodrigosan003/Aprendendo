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
let hora = 18;

if (hora >= 6 && hora < 12) {
  console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// Switch... case...
// 6 - Operadores Bitwise.
