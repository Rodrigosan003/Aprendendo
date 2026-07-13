function calcula(a: number, b: number, operacao: string): number | null {
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
const resultadoSoma = calcula(10, 5, "soma"); // 15
const resultadoDivisao = calcula(10, 0, "divisao"); // null (divisão por zero)
const resultadoInvalido = calcula(10, 5, "modulo"); // null (operação desconhecida) 