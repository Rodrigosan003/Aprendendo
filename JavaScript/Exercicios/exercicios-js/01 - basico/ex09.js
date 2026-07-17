// 9 - Crie uma função que receba um número e retorne se ele é múltiplo de 3 ou 5.

const resultado = multiploNumero(2);
console.log(resultado);

function multiploNumero(entrada) {
  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return `O número ${entrada} é múltipo de 3 e de 5.`;
  } else if (entrada % 5 === 0) {
    return `O número ${entrada} é múltipo de 5.`;
  } else if (entrada % 3 === 0) {
    return `O número ${entrada} é múltipo de 3.`;
  } else {
    return `O número ${entrada} não é múltiplo nem de 3 e nem de 5.`;
  }
}
