function classificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade!";
    }
    else if (idade >= 60 && idade <= 100) {
        return "Idoso!";
    }
    else if (idade >= 18 && idade < 60) {
        return "Maior de idade!";
    }
    else {
        return "Você está vivo ainda?";
    }
}
// Exemplo de uso:
var idade = 112;
console.log(classificarIdade(idade));
