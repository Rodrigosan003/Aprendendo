// Exercício 6: Enum simples: Enum com dias da semana e mensagens personalizadas.

// Sua solução aqui

enum DiaDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}

let hoje: DiaDaSemana = DiaDaSemana.Terca;
console.log(hoje); // Output: 2 (o valor padrão é numérico e começa em 0)

let diaDaSemanaPorValor = DiaDaSemana[2];
console.log(diaDaSemanaPorValor); // Output: Terca