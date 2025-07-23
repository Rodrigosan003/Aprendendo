// Exercício 10: Parâmetro opcional: Função que trata parâmetro opcional com mensagem diferente.

// Sua solução aqui

function saudar(nome?: string): string {
  if (nome) {
    return `Olá, ${nome}!`;
  } else {
    return "Olá, visitante!";
  }
}

console.log(saudar("Maria")); // Saída: Olá, Maria!
console.log(saudar()); // Saída: Olá, visitante!
