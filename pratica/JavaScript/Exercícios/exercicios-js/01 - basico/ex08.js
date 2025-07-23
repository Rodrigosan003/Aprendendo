// 8 - Verifique se uma string contém determinada palavra.

function verificaJavaScript(str) {
  return str.includes("javascript");
}

// Exemplo de uso:
let texto1 = "Este é um exemplo de string com javascript.";
let texto2 = "Esta string não contém a palavra.";

console.log(verificaJavaScript(texto1)); // true
console.log(verificaJavaScript(texto2)); // false
