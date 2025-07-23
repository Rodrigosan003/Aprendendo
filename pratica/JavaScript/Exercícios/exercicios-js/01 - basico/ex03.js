// 3 - Verifique se um número é par ou ímpar e retorne true para par e false para ímpar.
function parImpar(num) {
  if (num % 2 === 0) {
    return "Número Par!";
  } else {
    return "Número Ímpar";
  }
}

console.log(parImpar(11));
