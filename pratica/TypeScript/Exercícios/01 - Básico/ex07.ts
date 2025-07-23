// Exercício 7: Union Types: Função que aceita string ou number e trata cada caso.

// Sua solução aqui

function tratarDado(dado: string | number) {
  if (typeof dado === "string") {
    // Lógica para string
    console.log("Dado recebido como string:", dado.toUpperCase());
  } else if (typeof dado === "number") {
    // Lógica para number
    console.log("Dado recebido como number:", dado * 2);
  }
}

// Exemplos de uso
tratarDado("Olá");
tratarDado(123);
