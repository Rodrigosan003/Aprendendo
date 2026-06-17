// 01 - Crie uma função que receba uma string e retorne a mesma string invertida.

function inverteString(str) {
    return str.split('').reverse().join('');
}

// Exemplo de uso:
console.log(inverteString('Olá mundo'));
