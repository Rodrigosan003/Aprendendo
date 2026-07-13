# 10 Desafios de Algoritmos em JavaScript

## 🚀 Nível Iniciante

### Desafio 1: Calculadora Básica
**Objetivo:** Criar uma função que realiza operações básicas entre dois números.

**Descrição:** Escreva uma função `calculadora(a, b, operacao)` que retorna o resultado de:
- "soma": a + b
- "subtracao": a - b
- "multiplicacao": a * b
- "divisao": a / b

```javascript
function calculadora(a, b, operacao) {
    // Seu código aqui
}

// Teste:
console.log(calculadora(10, 5, "soma")); // 15
console.log(calculadora(10, 5, "subtracao")); // 5
console.log(calculadora(10, 5, "multiplicacao")); // 50
console.log(calculadora(10, 5, "divisao")); // 2
```

### Desafio 2: Verificador de Número Par ou Ímpar
**Objetivo:** Determinar se um número é par ou ímpar.

**Descrição:** Escreva uma função `verificarParImpar(numero)` que retorna "par" se o número for par e "ímpar" se for ímpar.

```javascript
function verificarParImpar(numero) {
    // Seu código aqui
}

// Teste:
console.log(verificarParImpar(10)); // "par"
console.log(verificarParImpar(7)); // "ímpar"
```

### Desafio 3: Contador de Vogais
**Objetivo:** Contar quantas vogais existem em uma string.

**Descrição:** Escreva uma função `contarVogais(texto)` que retorna o número de vogais (a, e, i, o, u) na string, desconsiderando maiúsculas/minúsculas.

```javascript
function contarVogais(texto) {
    // Seu código aqui
}

// Teste:
console.log(contarVogais("JavaScript")); // 3 (a, a, i)
console.log(contarVogais("Programação")); // 5
```

## 🔥 Nível Básico-Intermediário

### Desafio 4: Fibonacci
**Objetivo:** Gerar os primeiros N números da sequência de Fibonacci.

**Descrição:** Escreva uma função `fibonacci(n)` que retorna um array com os primeiros n números da sequência de Fibonacci.

```javascript
function fibonacci(n) {
    // Seu código aqui
}

// Teste:
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
```

### Desafio 5: Fatorial
**Objetivo:** Calcular o fatorial de um número.

**Descrição:** Escreva uma função `fatorial(numero)` que calcula o fatorial do número (n! = n × (n-1) × (n-2) × ... × 1).

```javascript
function fatorial(numero) {
    // Seu código aqui
}

// Teste:
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
```

### Desafio 6: Remover Duplicatas
**Objetivo:** Remover elementos duplicados de um array.

**Descrição:** Escreva uma função `removerDuplicatas(array)` que retorna um novo array sem elementos repetidos.

```javascript
function removerDuplicatas(array) {
    // Seu código aqui
}

// Teste:
console.log(removerDuplicatas([1, 2, 3, 2, 4, 1])); // [1, 2, 3, 4]
console.log(removerDuplicatas(["a", "b", "a", "c"])); // ["a", "b", "c"]
```

## 💪 Nível Intermediário

### Desafio 7: Palíndromo
**Objetivo:** Verificar se uma palavra é um palíndromo.

**Descrição:** Escreva uma função `ehPalindromo(palavra)` que retorna true se a palavra for igual quando lida de trás para frente.

```javascript
function ehPalindromo(palavra) {
    // Seu código aqui
}

// Teste:
console.log(ehPalindromo("radar")); // true
console.log(ehPalindromo("hello")); // false
console.log(ehPalindromo("A man a plan a canal Panama")); // true
```

### Desafio 8: Maior e Menor Elemento
**Objetivo:** Encontrar o maior e menor elemento de um array.

**Descrição:** Escreva uma função `encontrarExtremos(array)` que retorna um objeto com as propriedades `maior` e `menor`.

```javascript
function encontrarExtremos(array) {
    // Seu código aqui
}

// Teste:
console.log(encontrarExtremos([3, 7, 2, 9, 1])); // { maior: 9, menor: 1 }
console.log(encontrarExtremos([5, 5, 5])); // { maior: 5, menor: 5 }
```

### Desafio 9: Ordenação Bubble Sort
**Objetivo:** Implementar o algoritmo Bubble Sort para ordenar um array.

**Descrição:** Escreva uma função `bubbleSort(array)` que ordena o array em ordem crescente usando o algoritmo Bubble Sort.

```javascript
function bubbleSort(array) {
    // Seu código aqui
}

// Teste:
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90])); // [11, 12, 22, 25, 34, 64, 90]
```

### Desafio 10: FizzBuzz
**Objetivo:** Implementar o clássico problema FizzBuzz.

**Descrição:** Escreva uma função `fizzBuzz(n)` que retorna um array onde:
- Múltiplos de 3 são substituídos por "Fizz"
- Múltiplos de 5 são substituídos por "Buzz"
- Múltiplos de 15 são substituídos por "FizzBuzz"

```javascript
function fizzBuzz(n) {
    // Seu código aqui
}

// Teste:
console.log(fizzBuzz(5)); // [1, 2, "Fizz", 4, "Buzz"]
console.log(fizzBuzz(15).slice(0, 15)); // Primeiros 15 elementos
```

---

## 💡 Soluções

<details>
<summary>Clique para ver as soluções</summary>

### Solução 1: Calculadora Básica
```javascript
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
```

### Solução 2: Verificador de Número Par ou Ímpar
```javascript
function verificarParImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
}
```

### Solução 3: Contador de Vogais
```javascript
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
```

### Solução 4: Fibonacci
```javascript
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
```

### Solução 5: Fatorial
```javascript
function fatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
```

### Solução 6: Remover Duplicatas
```javascript
function removerDuplicatas(array) {
    return [...new Set(array)];
}
```

### Solução 7: Palíndromo
```javascript
function ehPalindromo(palavra) {
    const palavraLimpa = palavra.toLowerCase().replace(/[^a-z]/g, '');
    const reversa = palavraLimpa.split('').reverse().join('');
    return palavraLimpa === reversa;
}
```

### Solução 8: Maior e Menor Elemento
```javascript
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
```

### Solução 9: Bubble Sort
```javascript
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
```

### Solução 10: FizzBuzz
```javascript
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
```

</details>

## 📚 Conceitos Abordados

- **Variáveis e Operações:** Desafios 1, 2, 3
- **Estruturas Condicionais:** Desafios 1, 2, 7, 10
- **Loops (for, while):** Desafios 3, 4, 5, 6, 8, 9, 10
- **Funções:** Todos os desafios
- **Arrays:** Desafios 4, 6, 8, 9, 10
- **Strings:** Desafios 3, 7
- **Objetos:** Desafio 8
- **Algoritmos Clássicos:** Desafios 4, 5, 9, 10

## 🎯 Dicas para Praticar

1. **Comece pelos mais fáceis:** Desafios 1-3
2. **Não olhe as soluções imediatamente:** Tente resolver por conta própria
3. **Teste com diferentes valores:** Use números negativos, zeros, strings vazias
4. **Analise a complexidade:** Tente entender a eficiência do seu código
5. **Refatore:** Após resolver, tente melhorar sua solução

Boa sorte nos seus estudos! 🚀
