// 04 - Encontre o maior e o menor valor em um array.

function maiorMenor(array) {
  return {
    maior: Math.max(...array),
    menor: Math.min(...array)
  };
}
