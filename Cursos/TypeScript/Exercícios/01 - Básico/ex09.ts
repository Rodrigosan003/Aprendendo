// Exercício 9: Type Assertion: Force um tipo em uma variável any para string.

// Sua solução aqui

let valor: any;

valor = "Olá, mundo!";

if (typeof valor === 'string') {
    let str: string = valor as string;
    console.log(str.toUpperCase());
} else {
    console.log("O valor não é uma string");
}