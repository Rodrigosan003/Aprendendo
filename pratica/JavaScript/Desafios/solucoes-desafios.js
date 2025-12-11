// ============================================
// 10 SOLUÇÕES DE DESAFIOS DE ALGORITMOS JS
// ============================================

// ================== DESAFIO 1 ==================
// Calculadora Básica
function calculadora(a, b, operacao) {
    switch(operacao) {
        case "soma":
            return a + b;
        case "subtracao":
            return a - b;
        case "multiplicacao":
            return a * b;
        case "divisao":
            if (b !== 0) {
                return a / b;
            }
            return "Erro: Divisão por zero";
        default:
            return "Operação inválida";
    }
}

// ================== DESAFIO 2 ==================
// Verificador de Número Par ou Ímpar
function verificarParImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
}

// ================== DESAFIO 3 ==================
// Contador de Vogais
function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for (let char of texto) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

// ================== DESAFIO 4 ==================
// Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequencia = [0, 1];
    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i-1] + sequencia[i-2];
    }
    return sequencia;
}

// ================== DESAFIO 5 ==================
// Fatorial
function fatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// ================== DESAFIO 6 ==================
// Remover Duplicatas
function removerDuplicatas(array) {
    return [...new Set(array)];
}

// ================== DESAFIO 7 ==================
// Palíndromo
function ehPalindromo(palavra) {
    const palavraLimpa = palavra.toLowerCase().replace(/[^a-z]/g, '');
    const reversa = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === reversa;
}

// ================== DESAFIO 8 ==================
// Maior e Menor Elemento
function encontrarExtremos(array) {
    if (array.length === 0) return { maior: null, menor: null };
    
    let maior = array[0];
    let menor = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) maior = array[i];
        if (array[i] < menor) menor = array[i];
    }
    
    return { maior, menor };
}

// ================== DESAFIO 9 ==================
// Bubble Sort
function bubbleSort(array) {
    const arr = [...array];
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
}

// ================== DESAFIO 10 ==================
// FizzBuzz
function fizzBuzz(n) {
    const resultado = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            resultado.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultado.push("Fizz");
        } else if (i % 5 === 0) {
            resultado.push("Buzz");
        } else {
            resultado.push(i);
        }
    }
    return resultado;
}

// ============================================
// TESTES PARA VERIFICAR AS IMPLEMENTAÇÕES
// ============================================

console.log("=== TESTES DOS DESAFIOS ===\n");

// Teste Desafio 1 - Calculadora
console.log("Desafio 1 - Calculadora:");
console.log("Soma:", calculadora(10, 5, "soma"));
console.log("Subtração:", calculadora(10, 5, "subtracao"));
console.log("Multiplicação:", calculadora(10, 5, "multiplicacao"));
console.log("Divisão:", calculadora(10, 5, "divisao"));
console.log("Divisão por zero:", calculadora(10, 0, "divisao"));
console.log("Operação inválida:", calculadora(10, 5, "potencia"));
console.log();

// Teste Desafio 2 - Par ou Ímpar
console.log("Desafio 2 - Par ou Ímpar:");
console.log("10 é:", verificarParImpar(10));
console.log("7 é:", verificarParImpar(7));
console.log("-3 é:", verificarParImpar(-3));
console.log();

// Teste Desafio 3 - Contador de Vogais
console.log("Desafio 3 - Contador de Vogais:");
console.log("JavaScript tem", contarVogais("JavaScript"), "vogais");
console.log("Programação tem", contarVogais("Programação"), "vogais");
console.log("AEIOUaeiou tem", contarVogais("AEIOUaeiou"), "vogais");
console.log();

// Teste Desafio 4 - Fibonacci
console.log("Desafio 4 - Fibonacci:");
console.log("Primeiros 5 números:", fibonacci(5));
console.log("Primeiros 7 números:", fibonacci(7));
console.log("Primeiros 10 números:", fibonacci(10));
console.log();

// Teste Desafio 5 - Fatorial
console.log("Desafio 5 - Fatorial:");
console.log("5! =", fatorial(5));
console.log("0! =", fatorial(0));
console.log("1! =", fatorial(1));
console.log("10! =", fatorial(10));
console.log();

// Teste Desafio 6 - Remover Duplicatas
console.log("Desafio 6 - Remover Duplicatas:");
console.log("Array [1, 2, 3, 2, 4, 1]:", removerDuplicatas([1, 2, 3, 2, 4, 1]));
console.log("Array ['a', 'b', 'a', 'c']:", removerDuplicatas(["a", "b", "a", "c"]));
console.log("Array [5, 5, 5, 5]:", removerDuplicatas([5, 5, 5, 5]));
console.log();

// Teste Desafio 7 - Palíndromo
console.log("Desafio 7 - Palíndromo:");
console.log("'radar' é palíndromo?", ehPalindromo("radar"));
console.log("'hello' é palíndromo?", ehPalindromo("hello"));
console.log("'A man a plan a canal Panama' é palíndromo?", ehPalindromo("A man a plan a canal Panama"));
console.log("'racecar' é palíndromo?", ehPalindromo("racecar"));
console.log();

// Teste Desafio 8 - Maior e Menor
console.log("Desafio 8 - Maior e Menor:");
console.log("Array [3, 7, 2, 9, 1]:", encontrarExtremos([3, 7, 2, 9, 1]));
console.log("Array [5, 5, 5]:", encontrarExtremos([5, 5, 5]));
console.log("Array [-1, -5, -3]:", encontrarExtremos([-1, -5, -3]));
console.log();

// Teste Desafio 9 - Bubble Sort
console.log("Desafio 9 - Bubble Sort:");
console.log("Array [64, 34, 25, 12, 22, 11, 90]:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log("Array [5, 1, 4, 2, 8]:", bubbleSort([5, 1, 4, 2, 8]));
console.log("Array [1]:", bubbleSort([1]));
console.log();

// Teste Desafio 10 - FizzBuzz
console.log("Desafio 10 - FizzBuzz:");
console.log("Primeiros 15:", fizzBuzz(15));
console.log("Primeiros 5:", fizzBuzz(5));
console.log();

// ============================================
// EXPORTAÇÃO DAS FUNÇÕES (para uso em outros módulos)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculadora,
        verificarParImpar,
        contarVogais,
        fibonacci,
        fatorial,
        removerDuplicatas,
        ehPalindromo,
        encontrarExtremos,
        bubbleSort,
        fizzBuzz
    };
}
