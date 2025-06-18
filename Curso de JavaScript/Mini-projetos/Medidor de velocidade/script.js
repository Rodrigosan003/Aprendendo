// Velocidade máxima de até 70km
// A cada 5km acima do limite, você ganha 1 ponto.
// Utilizar a função Math.floor()
// Caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(85);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  if (velocidade <= velocidadeMaxima) {
    console.log("Ok");
  } else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
    if (pontos >= 12) {
      console.log("Carteira Suspensa.");
    } else {
      console.log("Pontos:", pontos);
    }
  }
}
