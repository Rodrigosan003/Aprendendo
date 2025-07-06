// Exercício 6: Enum simples: Enum com dias da semana e mensagens personalizadas.
// Sua solução aqui
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
var hoje = DiaDaSemana.Terca;
console.log(hoje); // Output: 2 (o valor padrão é numérico e começa em 0)
var diaDaSemanaPorValor = DiaDaSemana[2];
console.log(diaDaSemanaPorValor); // Output: Terca
