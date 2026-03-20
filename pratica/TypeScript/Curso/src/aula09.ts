enum dias {
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6,
}

console.log(dias.DOMINGO); // 1

console.log(dias.SEGUNDA); // 2

console.log(dias[2]); // SEGUNDA

const d = new Date();
const diaDaSemana = d.getDay();
console.log(diaDaSemana);
