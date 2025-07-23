// 6 - Escreva uma função que converta uma temperatura de Celsius para Fahrenheit.
function celciusParaFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// Exemplo de uso:
let temperaturaCelcius = 25;
let temperaturaFahrenheit = celciusParaFahrenheit(temperaturaCelcius);

console.log(`${temperaturaCelcius}Cº é igual a ${temperaturaFahrenheit}Fº.`);
