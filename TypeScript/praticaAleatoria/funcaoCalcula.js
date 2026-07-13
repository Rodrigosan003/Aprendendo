function calcula(a, b, operacao) {
    switch (operacao) {
        case "soma":
            return a + b;
        case "subtracao":
            return a - b;
        case "multiplicacao":
            return a * b;
        case "divisao":
            return b !== 0 ? a / b : null; // Evita divisão por zero
        default:
            return null; // Operação desconhecida
    }
}
// Exemplo de uso:
var resultadoSoma = calcula(10, 5, "soma"); // 15
var resultadoDivisao = calcula(10, 0, "divisao"); // null (divisão por zero)
var resultadoInvalido = calcula(10, 5, "modulo"); // null (operação desconhecida) 
