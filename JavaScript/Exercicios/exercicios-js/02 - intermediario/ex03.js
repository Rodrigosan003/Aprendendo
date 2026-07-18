// 03 - Calcule a média dos valores em um array de números.
function media(array) {
  const soma = array.reduce((acc, val) => acc + val, 0);
  return soma / array.length;
}